// Node-safe frontmatter utilities — no Vite/browser globals. Used by both the
// runtime index (`frontmatter.ts`, via `import.meta.glob`) and the build-time
// content plugin (`scripts/content-plugin.ts`, via `fs.readFileSync`).

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

export function frontmatterToMeta(slug: string, fm: Record<string, unknown>): BlogPostMeta {
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
