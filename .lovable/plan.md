## Problem

The site renders a blank page. Root cause (confirmed via Playwright):

```
TypeError: text.match is not a function
  at parseFrontmatter (src/content/frontmatterParser.ts:8)
  at src/content/frontmatter.ts:13
```

`src/content/frontmatter.ts` uses `import.meta.glob("./blog/*.mdx", { query: "?raw", ... })` expecting raw strings. But `@mdx-js/rollup` is registered with `enforce: "pre"` in `vite.config.ts` and transforms every `.mdx` request — including `?raw` — into a compiled JSX module. So each entry in the glob is a module object, not a string, and `text.match(...)` blows up. This throws during initial module evaluation, so React never mounts → blank `#root`.

Verified: `curl http://localhost:8080/src/content/blog/spa-seo-checklist.mdx?raw` returns compiled JSX, not raw MDX.

## Fix

Make the MDX plugin skip requests with a `?raw` query so Vite's built-in raw loader handles them. Wrap `mdx({...})` with a filtered version of its `transform` (and `resolveId` if defined) that bails out when `id` contains `?raw` or `&raw`.

### Change

In `vite.config.ts`:

1. Instantiate the MDX plugin as before.
2. Wrap its `transform` hook so it returns `null` for ids matching `/[?&]raw(&|$)/`, delegating to Vite's default `?raw` handling.
3. Keep `enforce: "pre"` and all other plugin config unchanged.

### Verification

- Reload preview → root mounts, homepage renders.
- Playwright: no `pageerror`, `#root` has content, screenshot shows hero.
- `/blog` list still populates from frontmatter.
- Opening an individual post still renders MDX (non-raw path unchanged).
- Existing vitest suite still green (frontmatter contract test runs in Node, unaffected).

## Notes

Purely a build-config fix — no content, component, or data changes. Scoped to `vite.config.ts`.
