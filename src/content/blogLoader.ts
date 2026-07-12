import { lazy, type ComponentType } from "react";
import { blogPosts } from "@/data/blog";

// Vite resolves this at build time into a map of `./blog/<slug>.mdx` -> dynamic import.
// `as: "default"` would inline; we want lazy chunks per post for code splitting.
const modules = import.meta.glob<{ default: ComponentType }>("./blog/*.mdx");

const slugRegex = /\.\/blog\/(.+)\.mdx$/;

const mdxSlugs = new Set(
  Object.keys(modules)
    .map((path) => path.match(slugRegex)?.[1])
    .filter((s): s is string => Boolean(s)),
);

// Dev-time contract: every `blogPosts` entry must have a matching MDX file, and
// every MDX file must be registered in `blogPosts` (so sitemap/RSS/list stay in sync).
// Fails loudly in dev/test; stripped in production builds.
if (import.meta.env?.DEV || import.meta.env?.MODE === "test") {
  const registered = new Set(blogPosts.map((p) => p.slug));
  const missingFile = [...registered].filter((s) => !mdxSlugs.has(s));
  const orphanedFile = [...mdxSlugs].filter((s) => !registered.has(s));
  if (missingFile.length || orphanedFile.length) {
    const details = [
      missingFile.length && `registered but no MDX file: ${missingFile.join(", ")}`,
      orphanedFile.length && `MDX file but not registered: ${orphanedFile.join(", ")}`,
    ]
      .filter(Boolean)
      .join(" | ");
    // eslint-disable-next-line no-console
    console.error(`[blogLoader] Slug/file drift → ${details}`);
  }
}

export const hasMdxPost = (slug: string): boolean => mdxSlugs.has(slug);

export const loadMdxPost = (slug: string): ComponentType | null => {
  const entry = Object.entries(modules).find(([path]) => path.match(slugRegex)?.[1] === slug);
  if (!entry) return null;
  return lazy(entry[1]);
};

// Exposed for tests: read the raw slug sets so contract can be asserted.
export const _mdxSlugsForTest = (): string[] => [...mdxSlugs];
