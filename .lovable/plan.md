

## Plan: Scroll-to-Top on Blog Post Navigation

### Problem
When navigating to a blog post (or between blog posts via related articles), the page stays at the current scroll position instead of scrolling to the top.

### Solution
Create a `ScrollToTop` component that uses `useLocation` from React Router to detect route changes and smoothly scrolls to the top using `window.scrollTo` with `behavior: 'smooth'`. Wrap it with framer-motion's `AnimatePresence` for an accessible experience that respects `prefers-reduced-motion`.

### Changes

**New file: `src/components/ScrollToTop.tsx`**
- Uses `useLocation()` to detect route changes via `useEffect`
- Calls `window.scrollTo({ top: 0, behavior: 'smooth' })` (or `behavior: 'instant'` when reduced motion is preferred, using the existing `useReducedMotion` hook)
- Only scrolls if `window.scrollY > 0`

**Edit: `src/App.tsx`**
- Add `<ScrollToTop />` inside `<BrowserRouter>` so it fires on every route change across the app (not just blog posts)

This is a lightweight, app-wide fix — no changes needed to individual pages.

