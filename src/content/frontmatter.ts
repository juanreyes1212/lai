// Single source of truth for blog metadata: MDX frontmatter, parsed at build/dev time.
// The `import.meta.glob(..., { query: '?raw', eager: true })` call inlines every MDX
// file's raw text at bundle time — small (~30 KB) and gives us a synchronous index
// without a second network fetch. Actual post bodies still lazy-load through blogLoader.

const raw = import.meta.glob<string>("./blog/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
});

export interface BlogPostMeta {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

// Minimal YAML frontmatter parser — supports the subset we use:
//   key: "double-quoted string"
//   key: ["one", "two"]
// Extend if the frontmatter shape grows.
export function parseFrontmatter(text: string): Record<string, unknown> {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const out: Record<string, unknown> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.+)$/);
    if (!kv) continue;
    const [, key, rawVal] = kv;
    const val = rawVal.trim();
    try {
      out[key] = JSON.parse(val);
    } catch {
      out[key] = val.replace(/^["']|["']$/g, "");
    }
  }
  return out;
}

const slugRe = /\.\/blog\/(.+)\.mdx$/;

function toMeta(path: string, text: string): BlogPostMeta {
  const slug = path.match(slugRe)?.[1] ?? "";
  const fm = parseFrontmatter(text);
  return {
    slug: String(fm.slug ?? slug),
    title: String(fm.title ?? slug),
    category: String(fm.category ?? "Uncategorized"),
    excerpt: String(fm.excerpt ?? ""),
    date: String(fm.date ?? ""),
    readTime: String(fm.readTime ?? ""),
    image: String(fm.image ?? ""),
    tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
  };
}

// Sort newest first. `Date.parse` handles the "Jul 12, 2026" strings we use.
export const blogPosts: BlogPostMeta[] = Object.entries(raw)
  .map(([path, text]) => toMeta(path, text))
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
