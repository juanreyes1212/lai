## Goal

Give every blog post a unique, theme-appropriate Unsplash cover image. No two posts share an image.

## Approach

1. Audit all ~55 MDX files in `src/content/blog/` and collect current `image:` frontmatter values.
2. For each post, hand-pick a distinct Unsplash photo whose subject matches the post's theme (e.g. wearable → wrist/watch macro; ZIP streaming → cardboard boxes on a belt; unit toggle → scale readout; junction table → chain links; pending review queue → clipboard/inbox tray; RSS/OG pipeline → printing press; MDX migration → nested folders; theme toggle → light bulb; cmdk → keyboard keys, etc.).
3. Replace only the `image:` line in each MDX frontmatter — keep the existing `?w=800&h=400&fit=crop` query so `<ResponsiveImage>` continues to derive `srcset` correctly. No component changes.
4. Verify uniqueness: script-check that every `image:` URL (ignoring query string) appears exactly once across all posts.
5. Run vitest + typecheck to confirm nothing broke (contract test still passes since only image URLs changed).

## Out of scope

- No switch to AI-generated or local assets (per user choice).
- No changes to `<ResponsiveImage>`, OG image generation, or the content plugin.
- No new blog post about this change.

## Technical notes

- Photos will be sourced from Unsplash's free stock library, referenced by their canonical `images.unsplash.com/photo-<id>` URL with `?w=800&h=400&fit=crop`.
- Each swap is a one-line edit inside the MDX frontmatter block; no body changes.
- I'll batch the edits in parallel `line_replace` calls, then run one uniqueness check to catch any accidental collisions before verifying tests.
