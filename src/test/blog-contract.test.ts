import { describe, it, expect } from "vitest";
import { blogPosts } from "@/content/frontmatter";
import { _mdxSlugsForTest } from "@/content/blogLoader";

// MDX files are the source of truth for blog metadata (see frontmatter.ts).
// These tests guard the invariants downstream code assumes.
describe("blog content contract", () => {
  const mdxSlugs = new Set(_mdxSlugsForTest());

  it("every parsed post has a matching MDX file", () => {
    const missing = blogPosts.map((p) => p.slug).filter((s) => !mdxSlugs.has(s));
    expect(missing, `Parsed slug without file: ${missing.join(", ")}`).toEqual([]);
  });

  it("slugs are unique", () => {
    expect(new Set(blogPosts.map((p) => p.slug)).size).toBe(blogPosts.length);
  });

  it("every post has required frontmatter fields", () => {
    const missing = blogPosts.filter(
      (p) => !p.title || !p.category || !p.excerpt || !p.date || !p.readTime || !p.image,
    );
    expect(
      missing.map((p) => p.slug),
      `Posts missing required frontmatter: ${missing.map((p) => p.slug).join(", ")}`,
    ).toEqual([]);
  });
});
