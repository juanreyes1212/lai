import { lazy, type ComponentType } from "react";

// Vite resolves this at build time into a map of `./blog/<slug>.mdx` -> dynamic import.
// `as: "default"` would inline; we want lazy chunks per post for code splitting.
const modules = import.meta.glob<{ default: ComponentType }>("./blog/*.mdx");

const slugRegex = /\.\/blog\/(.+)\.mdx$/;

export const hasMdxPost = (slug: string): boolean =>
  Object.keys(modules).some((path) => path.match(slugRegex)?.[1] === slug);

export const loadMdxPost = (slug: string): ComponentType | null => {
  const entry = Object.entries(modules).find(([path]) => path.match(slugRegex)?.[1] === slug);
  if (!entry) return null;
  return lazy(entry[1]);
};
