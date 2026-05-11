## Roadmap: Independent Checkpoint Merges (with companion blog posts)

Each checkpoint is self-contained — it can be merged, reverted, or skipped without affecting the others. **Each checkpoint also ships a companion blog post** added to `src/data/portfolioData.ts` (`blogPosts` array) documenting what was built, why, trade-offs, and learning points. Posts use the existing markdown pipeline (`MarkdownRenderer`) and follow the existing `BlogPost` shape (slug, title, excerpt, category, date, readTime, image, tags, content).

---

### Checkpoint 1 — Route-level code splitting
**Code scope:** `src/components/AnimatedRoutes.tsx`
- Convert page imports to `React.lazy()`, wrap `<Routes>` in `<Suspense fallback={<PageSkeleton />}>` (wires up the existing dead component).

**Blog post:** *"Shipping Faster First Paint with React.lazy + Suspense"*
- Category: Performance · Tags: React, Vite, Suspense
- Learning points: when lazy hurts vs helps, picking a fallback that doesn't cause layout shift, route chunks vs component chunks, measuring with Lighthouse before/after.

---

### Checkpoint 2 — SEO: sitemap, robots, Article JSON-LD
**Code scope:** `public/sitemap.xml` (or Vite plugin), `public/robots.txt`, `src/pages/BlogPost.tsx` JSON-LD via existing `<SEO>`.

**Blog post:** *"A Pragmatic SEO Checklist for a React SPA"*
- Category: SEO · Tags: SEO, JSON-LD, Sitemaps
- Learning points: why SPAs need explicit sitemaps, Article vs BlogPosting schema, validating with Rich Results Test, robots.txt gotchas.

---

### Checkpoint 3 — Font + asset loading optimization
**Code scope:** `index.html`, `src/index.css`
- Move Google Fonts to `<link rel="preconnect">` + stylesheet, ensure `font-display: swap`, preload hero image.

**Blog post:** *"Eliminating CLS from Web Fonts Without Switching to System Stacks"*
- Category: Performance · Tags: Web Fonts, CLS, Core Web Vitals
- Learning points: `@import` vs `<link>` cost, `font-display` trade-offs, `size-adjust`/fallback metrics, when preload is harmful.

---

### Checkpoint 4 — Responsive images with `srcset`
**Code scope:** project/blog card images; introduce `<ResponsiveImage>` wrapper.

**Blog post:** *"Responsive Images Without an Image CDN"*
- Category: Performance · Tags: Images, srcset, LCP
- Learning points: `srcset` vs `sizes` mental model, picking breakpoints, AVIF/WebP fallback, lazy + decoding=async.

---

### Checkpoint 5 — Repo hygiene
**Code scope:** delete `tailwind.config.lov.json` if stale, prune unused tokens (`--bronze`, `--copper-glow`), drop deprecated `showSkipToContent` prop.

**Blog post:** *"YAGNI in Practice: A Quarterly Dead-Code Sweep"*
- Category: Engineering · Tags: Refactoring, Tailwind, DX
- Learning points: how dead tokens leak through autocomplete, deprecation comments as a tool, safe-deletion workflow with grep + types.

---

### Checkpoint 6 — Accessibility automation
**Code scope:** add `vitest-axe`, `src/test/a11y.test.tsx` covering each route.

**Blog post:** *"Catching A11y Regressions in CI with vitest-axe"*
- Category: Accessibility · Tags: a11y, Testing, Vitest
- Learning points: what axe can and can't catch, balancing axe with manual SR checks, ignoring rules responsibly, per-route smoke pattern.

---

### Checkpoint 7 — Privacy-friendly analytics
**Code scope:** snippet in `index.html`, `useAnalytics` hook firing on route change, `VITE_ANALYTICS_DOMAIN`.

**Blog post:** *"Cookie-less Analytics for a Personal Site"*
- Category: Engineering · Tags: Analytics, Privacy, Plausible
- Learning points: GDPR posture without banners, SPA pageview tracking, what events are worth instrumenting on a portfolio.

---

### Checkpoint 8 — Blog content migration to MDX
**Code scope:** `@mdx-js/rollup`, posts moved to `src/content/blog/*.mdx`, `BlogPost.tsx` dynamic import, slim index in `portfolioData`.

**Blog post:** *"From Stringly-Typed Markdown to MDX Without Breaking the Build"*
- Category: Engineering · Tags: MDX, Vite, Content
- Learning points: frontmatter parsing, dynamic import maps in Vite, custom MDX components reusing existing renderers, migration safety net.

---

### Checkpoint 9 — Light mode toggle
**Code scope:** `next-themes`, light HSL tokens in `index.css`, toggle in `Navigation.tsx`.

**Blog post:** *"Designing a Second Theme After Committing to One"*
- Category: Design Systems · Tags: Theming, HSL, Tailwind
- Learning points: why HSL tokens make this trivial, finding hardcoded colors that slipped through, contrast audits per theme, persisting choice without flash.

---

### Checkpoint 10 — Cmd+K command palette
**Code scope:** shadcn `command`, `<CommandPalette>` mounted in `PageLayout`, indexed against `portfolioData`.

**Blog post:** *"Adding a Cmd+K Palette as a Single Source of Navigation Truth"*
- Category: UX · Tags: Search, Keyboard, shadcn
- Learning points: indexing strategy for small sites, fuzzy match vs prefix, accessible dialog patterns, shortcut conflicts.

---

### Checkpoint 11 — Contact form (Lovable Cloud + Resend)
**Code scope:** enable Cloud, edge function `send-contact-email`, `RESEND_API_KEY`, `/contact` route, link from `CTASection`.

**Blog post:** *"A Spam-Resistant Contact Form Without a Backend Server"*
- Category: Engineering · Tags: Edge Functions, Resend, Forms
- Learning points: honeypot + rate limit basics, server-side validation with zod, Resend deliverability, environment secrets hygiene.

---

### Checkpoint 12 — E2E tests + CI
**Code scope:** Playwright config, `e2e/*.spec.ts` per route, `.github/workflows/ci.yml` (typecheck + vitest + playwright).

**Blog post:** *"The Smallest Useful Playwright Suite for a Portfolio"*
- Category: Engineering · Tags: Playwright, CI, Testing
- Learning points: smoke vs critical-path coverage, headless reliability, caching browsers in GH Actions, what NOT to E2E test.

---

### Suggested merge order
```text
1 → 2 → 3 → 5    (quick wins, low risk)
4 → 6 → 7        (medium, still isolated)
8 → 9 → 10       (feature work)
11 → 12          (largest investments)
```

### Per-checkpoint definition of done
- Code change merged with no regressions to existing tests/typecheck.
- Companion blog post added to `blogPosts` with full markdown body, appears on `/blog` listing and at its slug.
- If the checkpoint introduces a new pattern (e.g. `<ResponsiveImage>`, `FadeInOnScroll` analogue), the blog post links to the file.

Reply "approve" or pick which checkpoint to start with.
