// Runtime blog index: parses MDX frontmatter at build/dev time via Vite's
// `import.meta.glob` (raw). The parser lives in a Node-safe sibling module so
// the build-time content plugin can reuse it without touching Vite globals.
import { parseFrontmatter, frontmatterToMeta, type BlogPostMeta } from "./frontmatterParser";

const raw = import.meta.glob<string>("./blog/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
});

const slugRe = /\.\/blog\/(.+)\.mdx$/;

export const blogPosts: BlogPostMeta[] = Object.entries(raw)
  .map(([path, text]) => {
    const slug = path.match(slugRe)?.[1] ?? "";
    return frontmatterToMeta(slug, parseFrontmatter(text));
  })
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export type { BlogPostMeta };
