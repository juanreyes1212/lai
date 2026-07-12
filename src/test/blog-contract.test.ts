import { describe, it, expect } from "vitest";
import { blogPosts } from "@/data/blog";
import { _mdxSlugsForTest } from "@/content/blogLoader";

describe("blog content contract", () => {
  const mdxSlugs = new Set(_mdxSlugsForTest());
  const registeredSlugs = new Set(blogPosts.map((p) => p.slug));

  it("every registered post has a matching MDX file", () => {
    const missing = [...registeredSlugs].filter((s) => !mdxSlugs.has(s));
    expect(missing, `Missing MDX files for slugs: ${missing.join(", ")}`).toEqual([]);
  });

  it("every MDX file is registered in blogPosts", () => {
    const orphans = [...mdxSlugs].filter((s) => !registeredSlugs.has(s));
    expect(orphans, `Orphaned MDX files: ${orphans.join(", ")}`).toEqual([]);
  });

  it("slugs are unique in blogPosts", () => {
    expect(new Set(blogPosts.map((p) => p.slug)).size).toBe(blogPosts.length);
  });
});
