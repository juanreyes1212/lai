import { lazy, type ComponentType } from "react";

// Vite resolves this at build time into a map of `./blog/<slug>.mdx` -> dynamic import.
// Each post becomes its own lazy-loaded chunk. Metadata lives in `./frontmatter.ts`,
// which reads the same files with `?raw` — so filenames ARE the slugs. No drift possible.
const modules = import.meta.glob<{ default: ComponentType }>("./blog/*.mdx");

const slugRegex = /\.\/blog\/(.+)\.mdx$/;

const mdxSlugs = new Set(
  Object.keys(modules)
    .map((path) => path.match(slugRegex)?.[1])
    .filter((s): s is string => Boolean(s)),
);

export const hasMdxPost = (slug: string): boolean => mdxSlugs.has(slug);

export const loadMdxPost = (slug: string): ComponentType | null => {
  const entry = Object.entries(modules).find(([path]) => path.match(slugRegex)?.[1] === slug);
  if (!entry) return null;
  return lazy(entry[1]);
};

// Exposed for tests.
export const _mdxSlugsForTest = (): string[] => [...mdxSlugs];
