## Project Audit & Upgrade Paths

A read-only pass across code, content, performance, a11y, SEO, and DX. Findings grouped by severity with concrete upgrade paths. Each checkpoint is independently mergeable and ships with a companion blog post documenting the learnings — same pattern as the previous 12-checkpoint roadmap.

---

### 1. Dead code / YAGNI leftovers

- **`src/components/MarkdownRenderer.tsx` is unused** after the MDX migration (only referenced by a blog code sample). Removing it lets us drop `react-markdown`, `remark-gfm` (from runtime), and `react-syntax-highlighter` (~200 KB) from `package.json`. MDX already renders via `mdxComponents.tsx`.
- **`.lovable/plan.md`** still lists shipped checkpoints 1–10. Trim or archive.
- **`src/lib/colors.ts`** — audit `getCategoryColor` / `getStatusColor` call sites; inline if single-use.

### 2. Performance

- **Framer Motion loads on every route** (~60 KB gz). Options: lazy-load `motion` inside `PageTransition`, or replace `FadeInOnScroll` with CSS `@starting-style` / view-timeline animations.
- **Hero LCP image not preloaded.** Add `<link rel="preload" as="image" fetchpriority="high">` in `index.html`.
- **`portfolioData.ts` (~730 lines) is imported by almost every route.** Split into `data/projects.ts`, `data/blog.ts`, `data/resume.ts` so route chunks only pull what they render.

### 3. SEO & metadata

- **`public/sitemap.xml` is hand-maintained** — new posts drift out of sync. Generate at build time from `blogPosts` via a small Vite plugin.
- **No RSS feed** — cheap to add (`/rss.xml`) from the same source.
- **BlogPost JSON-LD** omits `wordCount` and per-post `author.url` variance; add for richer results.
- **Per-post OG images** — currently reuse Unsplash hero. Consider build-time Satori-style OG generation.

### 4. Accessibility

- **vitest-axe only covers page-mount.** Add tests that open the Cmd+K palette and mobile nav, then re-run axe.
- **Theme toggle needs `aria-pressed`** (or state-aware `aria-label`) so SR users hear the change.
- **`FadeInOnScroll` reduced-motion parity** — confirm it short-circuits animations under `prefers-reduced-motion`.
- **Heading order spot-check** across MDX posts (`h1 → h2 → h3`, no jumps).

### 5. Code quality & architecture

- **`BlogPost.tsx` (~200 lines)** mixes MDX loading, JSON-LD, related-posts, and layout. Extract `useMdxPost(slug)` and `<RelatedPosts />`.
- **`AnimatedRoutes.tsx`** — route+skeleton mapping repeats; collapse into a `routes.map(...)` config.
- **Shared `<Prose>` wrapper** — blog and project detail pages re-declare `prose prose-invert`.
- **`useAnalytics` is untested** — add tests for the no-op branch and the route-change fire.

### 6. Testing & CI

- Only render-smoke tests today. Add:
  - Contract test: every `blogPosts` entry has a matching MDX file (guards drift).
  - Cmd+K: opens, filters, selects.
  - Theme toggle: persists + updates `<html>` class.
- **No CI config.** Wire a GitHub Actions job for `tsc --noEmit && vitest run` on PRs.

### 7. Content pipeline

- **Slug/filename drift risk** between `blogPosts[i].slug` and MDX filenames. Add a build-time assertion in `blogLoader.ts`.
- **Two sources of truth**: metadata lives in both `portfolioData.ts` and MDX frontmatter. Pick one — parse frontmatter at build time and delete the array, or drop frontmatter.
- **No draft workflow.** Add `draft: true` flag that hides posts from `/blog`, sitemap, RSS in production.

### 8. Security & config

- Document `VITE_ANALYTICS_DOMAIN` in `README.md`.
- Confirm `robots.txt` allow-all is intentional; consider disallowing `/resume.pdf` from indexing.
- No CSP / security headers — note for when a custom domain lands.

---

### Suggested checkpoint order

Each ships with a companion blog post capturing the learning points.

```text
A. Hygiene sweep          §1  → post: "Removing 200 KB by Deleting One Component"
B. Data split             §5  → post: "Splitting a Monolith Data File for Smaller Route Chunks"
C. Content contract       §7  → post: "One Source of Truth for Blog Metadata"
D. SEO automation         §3  → post: "Auto-Generating Sitemaps and RSS at Build Time"
E. A11y depth             §4  → post: "Testing Dialogs and Toggles with vitest-axe"
F. CI + extra tests       §6  → post: "The Smallest Useful GitHub Actions Config"
G. Perf polish            §2  → post: "Lazy-Loading Framer Motion Without Breaking Transitions"
```

Per-checkpoint definition of done (same as the previous roadmap):

- Code change merged with no regressions to typecheck or existing tests.
- Companion `.mdx` post added under `src/content/blog/` and registered in `portfolioData.blogPosts`, appearing on `/blog` and its slug page.
- If the checkpoint introduces a new pattern (e.g. `<Prose>`, `useMdxPost`), the post links to the file.

Reply with letters (e.g. "A, C, D"), "all", or pick a starting checkpoint.