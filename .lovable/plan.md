## Plan: Vitest Setup + YAGNI Cleanup

### Part 1: Set Up Vitest with React Testing Library

**New/modified files:**

- `vitest.config.ts` -- Vitest config with jsdom, path aliases, setup file
- `src/test/setup.ts` -- Jest-DOM matchers + matchMedia mock
- `tsconfig.app.json` -- Add `"vitest/globals"` to `compilerOptions.types`
- `package.json` -- Add devDependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`

**Test files (3):**

- `src/components/portfolio/Navigation.test.tsx` -- Tests: renders nav links, highlights active route, mobile menu toggle, closes on route change, "Get In Touch" mailto link
- `src/components/portfolio/PageLayout.test.tsx` -- Tests: renders children, includes Navigation and Footer, optional SkipToContent
- `src/pages/NotFound.test.tsx` -- Tests: renders 404 heading, "Return Home" link points to `/`, uses PageLayout wrapper

All tests will wrap renders in `MemoryRouter` for routing context and use `screen` queries for accessible assertions.

### Part 2: Remove Unused UI Components (YAGNI)

**Keep (6 files + 1 re-export):** `badge`, `button`, `input`, `toast`, `toaster`, `sonner`, `tooltip`, `use-toast.ts`

**Delete (41 files):** `accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `breadcrumb`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `form`, `hover-card`, `input-otp`, `label`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `sidebar`, `skeleton`, `slider`, `switch`, `table`, `tabs`, `textarea`, `toggle`, `toggle-group`

**Remove unused dependencies from `package.json`:** `@radix-ui/react-accordion`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-avatar`, `@radix-ui/react-checkbox`, `@radix-ui/react-collapsible`, `@radix-ui/react-context-menu`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-hover-card`, `@radix-ui/react-label`, `@radix-ui/react-menubar`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-popover`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-scroll-area`, `@radix-ui/react-select`, `@radix-ui/react-separator`, `@radix-ui/react-slider`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`, `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group`, `@hookform/resolvers`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `next-themes`, `react-day-picker`, `react-hook-form`, `react-resizable-panels`, `recharts`, `vaul`, `zod`

### Summary

- 4 new/modified config files for test infrastructure
- 3 test files covering Navigation, PageLayout, NotFound
- 41 unused UI component files deleted
- ~35 unused npm dependencies removed
- Result: lean codebase with working test suite