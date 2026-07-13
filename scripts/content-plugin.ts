import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { parseFrontmatter, frontmatterToMeta, type BlogPostMeta } from "../src/content/frontmatterParser";

const SITE_URL = "https://juanreyes.dev";

const staticRoutes = [
  { path: "/", priority: "1.0" },
  { path: "/work", priority: "0.8" },
  { path: "/personal", priority: "0.8" },
  { path: "/blog", priority: "0.8" },
  { path: "/resume", priority: "0.6" },
];

const escapeXml = (s: string) =>
  s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));

const collectPosts = (root: string): BlogPostMeta[] => {
  const dir = resolve(root, "src/content/blog");
  const posts = readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const fm = parseFrontmatter(readFileSync(join(dir, f), "utf8"));
      return {
        slug: String(fm.slug ?? slug),
        title: String(fm.title ?? slug),
        category: String(fm.category ?? "Uncategorized"),
        excerpt: String(fm.excerpt ?? ""),
        date: String(fm.date ?? ""),
        readTime: String(fm.readTime ?? ""),
        image: String(fm.image ?? ""),
        tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
      } as BlogPostMeta;
    })
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return posts;
};

const buildSitemap = (posts: BlogPostMeta[]): string => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    ...staticRoutes.map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`,
    ),
    ...posts.map((p) => {
      const iso = new Date(p.date).toISOString().slice(0, 10);
      return `  <url>\n    <loc>${SITE_URL}/blog/${p.slug}</loc>\n    <lastmod>${iso}</lastmod>\n    <priority>0.6</priority>\n  </url>`;
    }),
  ].join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

const buildRss = (posts: BlogPostMeta[]): string => {
  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`;
      const pub = new Date(p.date).toUTCString();
      return [
        `    <item>`,
        `      <title>${escapeXml(p.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${pub}</pubDate>`,
        `      <category>${escapeXml(p.category)}</category>`,
        `      <description>${escapeXml(p.excerpt)}</description>`,
        `    </item>`,
      ].join("\n");
    })
    .join("\n");
  const lastBuild = new Date().toUTCString();
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
    `  <channel>`,
    `    <title>Juan Reyes — Blog</title>`,
    `    <link>${SITE_URL}/blog</link>`,
    `    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
    `    <description>Frontend engineering, performance, and accessibility notes by Juan Reyes.</description>`,
    `    <language>en-us</language>`,
    `    <lastBuildDate>${lastBuild}</lastBuildDate>`,
    items,
    `  </channel>`,
    `</rss>`,
  ].join("\n");
};

// Load Inter TTF/WOFF once and reuse across renders.
const loadFonts = async (root: string) => {
  const base = resolve(root, "node_modules/@fontsource/inter/files");
  return [
    { name: "Inter", data: readFileSync(join(base, "inter-latin-400-normal.woff")), weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: readFileSync(join(base, "inter-latin-700-normal.woff")), weight: 700 as const, style: "normal" as const },
  ];
};

// JSX-free React element factory so this file doesn't need MDX/JSX processing.
const el = (type: string, props: Record<string, unknown>, ...children: unknown[]) => ({
  type,
  props: { ...props, children: children.length === 1 ? children[0] : children },
});

const renderOgTemplate = (post: BlogPostMeta) =>
  el(
    "div",
    {
      style: {
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #1a1410 0%, #0a0705 100%)",
        padding: "80px",
        fontFamily: "Inter",
        color: "#f5ebe0",
      },
    },
    el(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: 24 } },
      el(
        "div",
        {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: "#d4a574",
            textTransform: "uppercase",
            letterSpacing: 6,
          },
        },
        post.category,
      ),
      el(
        "div",
        {
          style: {
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1,
            maxWidth: 1040,
          },
        },
        post.title,
      ),
    ),
    el(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 26,
          color: "#a89485",
          borderTop: "2px solid #3d2f24",
          paddingTop: 32,
        },
      },
      el(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 16 } },
        el("div", { style: { fontWeight: 700, color: "#f5ebe0" } }, "Juan Reyes"),
        el("div", {}, "· juanreyes.dev"),
      ),
      el("div", {}, post.date),
    ),
  );

const generateOgImage = async (post: BlogPostMeta, fonts: Awaited<ReturnType<typeof loadFonts>>) => {
  const svg = await satori(renderOgTemplate(post) as never, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  return png;
};

/**
 * Content pipeline plugin:
 *   1. sitemap.xml + rss.xml built from MDX frontmatter (single source of truth)
 *   2. Per-post OG PNGs at /og/<slug>.png (satori + resvg)
 * Runs at `closeBundle` so it only touches the production build output.
 */
export const contentPlugin = (): Plugin => ({
  name: "portfolio-content-pipeline",
  apply: "build",
  async closeBundle() {
    const root = process.cwd();
    const posts = collectPosts(root);
    const outDir = join(root, "dist");
    mkdirSync(outDir, { recursive: true });
    mkdirSync(join(outDir, "og"), { recursive: true });

    writeFileSync(join(outDir, "sitemap.xml"), buildSitemap(posts));
    writeFileSync(join(outDir, "rss.xml"), buildRss(posts));

    try {
      const fonts = await loadFonts(root);
      for (const post of posts) {
        const png = await generateOgImage(post, fonts);
        writeFileSync(join(outDir, "og", `${post.slug}.png`), png);
      }
      // eslint-disable-next-line no-console
      console.log(`[content] wrote sitemap + rss (${posts.length} posts) + ${posts.length} OG images`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("[content] OG image generation failed:", err);
    }
  },
});

// Backwards-compat export so existing imports keep working.
export const sitemapPlugin = contentPlugin;

// Type-only import to silence unused-import warning if this file is copied elsewhere.
void fileURLToPath;
