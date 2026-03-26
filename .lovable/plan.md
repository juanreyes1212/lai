

## Plan: Improve NotFound Page

The current NotFound page is a bare-bones default that doesn't match the portfolio's design system. It uses `bg-muted` instead of the dark theme, has no navigation/footer, no animations, and uses a plain `<a>` tag instead of React Router's `Link`.

### Changes to `src/pages/NotFound.tsx`

1. **Wrap in PageLayout** -- Use the shared `PageLayout` component for consistent nav/footer
2. **Match design system** -- Use `bg-background`, `text-gradient`, glass cards, and copper/gold accents consistent with the rest of the site
3. **Use React Router `Link`** -- Replace the `<a>` tag with `Link` for client-side navigation
4. **Add animation** -- Use framer-motion for entrance animation (respecting reduced motion)
5. **Improve content** -- Add a more engaging 404 message with the portfolio's typography and a styled "Return Home" button using the `Button` component
6. **Accessibility** -- Proper heading hierarchy, descriptive text, focus-visible styles

### Technical Details

- Import `PageLayout`, `Link`, `Button`, `motion`, and `useReducedMotion`
- Remove the `console.error` side effect (unnecessary noise in production)
- Center content with proper spacing that accounts for the fixed nav header
- Use `text-gradient` on the "404" heading for brand consistency
- Add a subtle glow effect behind the number

