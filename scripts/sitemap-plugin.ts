import { readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import type { Plugin } from "vite";

const SITE_URL = "https://juanreyes.dev";

const staticRoutes = [
  { path: "/", priority: "1.0" },
  { path: "/work", priority: "0.8" },
  { path: "/personal", priority: "0.8" },
  { path: "/blog", priority: "0.8" },
  { path: "/resume", priority: "0.6" },
];

const collectBlogSlugs = (root: string): string[] => {
  const dir = resolve(root, "src/content/blog");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .sort();
};

const buildSitemap = (slugs: string[]): string => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    ...staticRoutes.map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`,
    ),
    ...slugs.map(
      (slug) =>
        `  <url>\n    <loc>${SITE_URL}/blog/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.6</priority>\n  </url>`,
    ),
  ].join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

const buildRss = (slugs: string[]): string => {
  const items = slugs
    .map((slug) => {
      const url = `${SITE_URL}/blog/${slug}`;
      const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return `    <item>\n      <title>${title}</title>\n      <link>${url}</link>\n      <guid>${url}</guid>\n    </item>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Juan Reyes — Blog</title>\n    <link>${SITE_URL}/blog</link>\n    <description>Frontend engineering, performance, and accessibility notes.</description>\n${items}\n  </channel>\n</rss>\n`;
};

/**
 * Emits sitemap.xml and rss.xml into the build output using the current set of
 * MDX blog files as the source of truth. Filenames === slugs (guaranteed by
 * blogLoader's contract), so no metadata drift is possible.
 */
export const sitemapPlugin = (): Plugin => ({
  name: "portfolio-sitemap",
  apply: "build",
  closeBundle() {
    const root = process.cwd();
    const slugs = collectBlogSlugs(root);
    const outDir = join(root, "dist");
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "sitemap.xml"), buildSitemap(slugs));
    writeFileSync(join(outDir, "rss.xml"), buildRss(slugs));
    // eslint-disable-next-line no-console
    console.log(`[sitemap] wrote ${slugs.length + staticRoutes.length} URLs`);
  },
});
