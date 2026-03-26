

## Plan: Add New Blog Posts to Fill Timeline Gaps

### Context
Existing posts span May 2024 - Dec 2024. The resume covers 2017-present. New posts will fill gaps and cover three themes:

1. **Project work areas** (TDD, YAGNI cleanup, accessibility auditing)
2. **NDA contract work** (3-month and 6-month engagements)
3. **Professional development** (WCAG certifications, upskilling)

### New Blog Posts (7 total)

| # | Title | Category | Date | Topic |
|---|-------|----------|------|-------|
| 1 | "Implementing TDD in Legacy React Codebases" | Testing | Mar 15, 2025 | Setting up Vitest + RTL, red/green TDD workflow, testing Navigation/PageLayout |
| 2 | "YAGNI in Practice: Auditing and Pruning a Real Codebase" | Architecture | Feb 20, 2025 | Removing 41 unused components, cutting 35 dependencies, keeping codebases lean |
| 3 | "Running a Full Accessibility Audit with axe-core" | Accessibility | Jan 25, 2025 | Programmatic auditing, fixing aria violations, semantic HTML fixes |
| 4 | "Lessons from a 6-Month Enterprise Contract" | Leadership | Apr 10, 2024 | NDA fintech client, leading a frontend rebuild under tight deadlines, navigating enterprise processes |
| 5 | "Shipping Fast on a 3-Month Contract" | Leadership | Feb 5, 2024 | NDA healthtech client, rapid prototyping, delivering MVP under compressed timeline |
| 6 | "Earning My WCAG 2.1 Certification: What I Learned" | Accessibility | Nov 12, 2023 | IAAP WAS certification journey, study approach, how it changed development habits |
| 7 | "Leveling Up: Building a Continuous Learning Practice" | learnings | Jul 8, 2023 | Structured self-improvement, balancing certifications with hands-on work, conference talks |

### Technical Changes

**File: `src/data/portfolioData.ts`**
- Add 7 new blog post objects to the `blogPosts` array, each with full markdown `content`, matching the existing post structure (slug, title, category, excerpt, content, date, readTime, tags, image)
- Posts inserted in chronological order (newest first) to maintain the existing sort convention

**File: `src/lib/colors.ts`**
- Add category colors for `"Testing"` and `"React"` (already used by existing posts but missing from the color map)
- Existing categories (Architecture, Accessibility, Leadership, learnings) already have colors

No other files need changes -- BlogSection, Blog, and BlogPost pages already dynamically render from the `blogPosts` array.

