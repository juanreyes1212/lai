// Work Projects Data
export const workProjects = [
  {
    slug: "petsmart-ecommerce",
    title: "PetSmart E-Commerce Platform",
    company: "PetSmart",
    description: "Led the frontend development of PetSmart's e-commerce platform serving 1.2M+ monthly users. Architected scalable React components and implemented performance optimizations that reduced load times by 40%.",
    tech: ["React.js", "TypeScript", "Redux", "Contentful", "GraphQL", "Jest"],
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    featured: true,
    role: "Senior Frontend Developer",
    duration: "2021 - Present",
    highlights: [
      "Reduced page load time by 40% through code splitting and lazy loading",
      "Built reusable component library used across 15+ product teams",
      "Implemented A/B testing framework that increased conversion by 25%",
      "Led migration from legacy jQuery to modern React architecture"
    ]
  },
  {
    slug: "hownd-dashboard",
    title: "Hownd Business Dashboard",
    company: "Hownd",
    description: "Built a comprehensive business analytics dashboard with real-time data visualization and performance metrics for small business owners.",
    tech: ["Vue.js", "D3.js", "Node.js", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    featured: true,
    role: "Lead Frontend Developer",
    duration: "2019 - 2021",
    highlights: [
      "Designed real-time analytics dashboard serving 50K+ businesses",
      "Implemented WebSocket-based live updates for instant data refresh",
      "Created custom D3.js visualizations for complex business metrics",
      "Reduced dashboard load time by 60% through optimization"
    ]
  },
  {
    slug: "design-system",
    title: "Enterprise Design System",
    company: "Enterprise",
    description: "Created a scalable design system reducing development time by 40% across multiple product teams with comprehensive documentation and Storybook integration.",
    tech: ["Storybook", "React", "CSS-in-JS", "Figma", "Chromatic"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    featured: false,
    role: "Design Systems Architect",
    duration: "2020 - 2021",
    highlights: [
      "Built 100+ accessible, reusable components",
      "Reduced design-to-development handoff time by 50%",
      "Implemented visual regression testing with Chromatic",
      "Created comprehensive documentation reducing onboarding time"
    ]
  },
  {
    slug: "retail-pos",
    title: "Retail POS System",
    company: "RetailTech",
    description: "Developed a modern point-of-sale system for retail chains with offline capabilities, inventory management, and real-time sync.",
    tech: ["React Native", "TypeScript", "SQLite", "Redux Saga"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    featured: false,
    role: "Frontend Developer",
    duration: "2018 - 2019",
    highlights: [
      "Built offline-first architecture with seamless sync",
      "Implemented barcode scanning and payment processing",
      "Created inventory management module",
      "Deployed to 500+ retail locations"
    ]
  },
];

// Personal Projects Data
export const personalProjects = [
  {
    slug: "spotley-wifi",
    title: "Spotley WiFi",
    status: "Live" as const,
    description: "WiFi management platform for businesses with customer analytics, marketing automation, and captive portal customization.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    link: "https://spotley.io",
    highlights: [
      "Manages 1000+ WiFi hotspots",
      "Built-in marketing automation",
      "Custom captive portal builder",
      "Real-time analytics dashboard"
    ]
  },
  {
    slug: "portfolio-v2",
    title: "Portfolio Site v2",
    status: "In Development" as const,
    description: "Personal portfolio showcasing projects and technical writing with modern animations and dark theme.",
    tech: ["React", "Framer Motion", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
    highlights: [
      "Modern glass-morphism design",
      "Smooth page transitions",
      "Dark theme optimized",
      "SEO optimized"
    ]
  },
  {
    slug: "code-snippets",
    title: "Code Snippets Manager",
    status: "Live" as const,
    description: "A developer tool for organizing, tagging, and quickly accessing code snippets with syntax highlighting.",
    tech: ["Electron", "React", "Monaco Editor", "SQLite"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    highlights: [
      "Cross-platform desktop app",
      "Syntax highlighting for 50+ languages",
      "Cloud sync capabilities",
      "Quick search and organization"
    ]
  },
  {
    slug: "budget-tracker",
    title: "Budget Tracker",
    status: "Archived" as const,
    description: "Personal finance app with expense tracking, budget goals, and visual spending analytics.",
    tech: ["React Native", "Firebase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    highlights: [
      "Bank integration via Plaid",
      "Spending category analysis",
      "Budget goal tracking",
      "Monthly reports"
    ]
  },
];

// Blog Posts Data
export const blogPosts = [
  {
    slug: "scalable-design-systems",
    title: "Building Scalable Design Systems for Enterprise Applications",
    category: "Architecture",
    excerpt: "How to create and maintain design systems that scale across multiple product teams while ensuring consistency and developer experience.",
    content: `Design systems are the backbone of modern enterprise applications. After building and maintaining design systems across multiple organizations, I've learned that success depends on three core principles: consistency, flexibility, and documentation.

## The Foundation: Tokens First

Before diving into components, establish your design tokens. These are the atomic values—colors, spacing, typography, shadows—that form the foundation of your entire system. Using CSS custom properties or a tool like Style Dictionary allows you to:

- Maintain a single source of truth
- Support theming and dark mode
- Enable platform-specific implementations

## Component Architecture

When building components, I follow a layered approach:

1. **Primitive components** - Basic building blocks like Box, Text, and Flex
2. **Composite components** - Buttons, Inputs, Cards built from primitives
3. **Pattern components** - Complex UI patterns like Forms, Modals, Navigation

Each layer builds upon the previous, creating a predictable and maintainable hierarchy.

## Documentation is Everything

A design system without documentation is just a component library. Invest heavily in:

- Interactive examples with code snippets
- Accessibility guidelines for each component
- Do's and Don'ts with visual examples
- Migration guides for version updates

Tools like Storybook combined with MDX make this process seamless.

## Governance and Adoption

The hardest part isn't building the system—it's getting teams to adopt it. Establish a governance model that includes:

- Regular office hours for questions
- A contribution process for new components
- Metrics tracking adoption across teams
- Champions within each product team

Remember: a design system is a product, not a project. It requires ongoing investment and iteration to remain valuable.`,
    date: "Dec 15, 2024",
    readTime: "8 min read",
    tags: ["Design Systems", "React", "Architecture"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
  },
  {
    slug: "react-performance-optimization",
    title: "Performance Optimization Strategies for React Applications",
    category: "Performance",
    excerpt: "Deep dive into React performance patterns including memoization, lazy loading, bundle optimization, and runtime performance monitoring.",
    content: `Performance is crucial for user experience. After optimizing applications serving millions of users, here are the strategies that consistently deliver results.

## Measure First, Optimize Second

Before making any changes, establish baselines using:

- **Lighthouse** for overall performance scores
- **React DevTools Profiler** for component render analysis
- **Web Vitals** for real-user metrics (LCP, FID, CLS)

Without measurements, you're just guessing.

## Code Splitting and Lazy Loading

The fastest code is code that never loads. Implement route-based code splitting:

\`\`\`javascript
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
\`\`\`

Combine with Suspense boundaries and loading skeletons for a smooth experience.

## Memoization Done Right

React.memo, useMemo, and useCallback are powerful but often misused. Only memoize when:

- The computation is genuinely expensive
- The component renders frequently with the same props
- You've measured and confirmed a performance issue

Over-memoization adds complexity without benefits.

## Virtual Lists for Large Data

Rendering thousands of items kills performance. Use virtualization libraries like react-window or TanStack Virtual to only render visible items.

## Bundle Analysis

Regularly analyze your bundle with tools like webpack-bundle-analyzer. Common issues include:

- Importing entire libraries when you need one function
- Duplicate dependencies across chunks
- Large images or fonts embedded in JavaScript

## The 40% Rule

In my experience, focusing on the biggest bottlenecks typically yields 40% improvements before hitting diminishing returns. Identify your top 3 performance issues and tackle those first.`,
    date: "Nov 28, 2024",
    readTime: "12 min read",
    tags: ["React", "Performance", "Optimization"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
  },
  {
    slug: "leading-frontend-teams",
    title: "Leading Frontend Teams: Lessons from the Trenches",
    category: "Leadership",
    excerpt: "Insights on technical leadership, mentoring developers, code reviews, and fostering a culture of continuous improvement.",
    content: `Leading a frontend team requires balancing technical expertise with people skills. Here's what I've learned mentoring developers and leading teams over the years.

## Technical Leadership vs Management

As a tech lead, your job isn't to write all the code—it's to multiply your team's effectiveness. This means:

- **Unblocking** team members when they're stuck
- **Architecting** solutions that the team can implement
- **Reviewing** code to maintain quality and share knowledge
- **Mentoring** to grow individual capabilities

## Code Reviews as Teaching Moments

Code reviews are your highest-leverage activity. I approach them with three goals:

1. **Catch bugs and issues** - The obvious purpose
2. **Share knowledge** - Explain the "why" behind suggestions
3. **Maintain consistency** - Ensure code aligns with team standards

Always start with what's good about the PR. Lead with praise, then suggestions.

## Building a Learning Culture

Create space for growth through:

- **Weekly tech talks** where team members share learnings
- **Pair programming** sessions for complex features
- **Documentation** as a first-class citizen
- **Blameless postmortems** when things go wrong

## Managing Technical Debt

Every codebase accumulates debt. The key is managing it intentionally:

- Maintain a tech debt backlog with prioritization
- Allocate 20% of each sprint to improvements
- Tie debt reduction to business outcomes
- Celebrate cleanup work, not just features

## The Human Side

Remember that your team members are humans first, developers second. Invest time in:

- Understanding career goals
- Providing regular feedback
- Advocating for their growth
- Creating psychological safety

The best code comes from teams that feel supported and challenged.`,
    date: "Oct 10, 2024",
    readTime: "6 min read",
    tags: ["Leadership", "Teams", "Culture"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Codebases",
    category: "TypeScript",
    excerpt: "Practical TypeScript patterns and practices that improve code quality, maintainability, and developer productivity.",
    content: `TypeScript has become essential for large-scale JavaScript applications. Here are practices that have proven valuable across codebases of all sizes.

## Strict Mode from Day One

Enable strict mode in tsconfig.json immediately:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
\`\`\`

It's much harder to add strictness to an existing codebase than to start with it.

## Type Inference is Your Friend

Let TypeScript infer types when obvious:

\`\`\`typescript
// ❌ Verbose
const items: string[] = ['a', 'b', 'c'];

// ✅ Inferred
const items = ['a', 'b', 'c'];
\`\`\`

Explicit types when documenting APIs, inference for implementation details.

## Discriminated Unions for State

Model complex state with discriminated unions:

\`\`\`typescript
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
\`\`\`

TypeScript will narrow the type based on the status field.

## Utility Types Are Powerful

Master built-in utility types:

- \`Partial<T>\` - Make all properties optional
- \`Required<T>\` - Make all properties required
- \`Pick<T, K>\` - Select specific properties
- \`Omit<T, K>\` - Exclude specific properties
- \`Record<K, V>\` - Create object types

## Avoid 'any' Like the Plague

Every 'any' is a hole in your type safety. When you need flexibility:

- Use \`unknown\` for truly unknown types
- Use generics for reusable patterns
- Use type guards to narrow types safely

## Organize Types Thoughtfully

For large codebases:

- Co-locate types with their implementations
- Export shared types from dedicated modules
- Use barrel files sparingly (they can hurt tree-shaking)
- Consider a \`types/\` directory for cross-cutting concerns`,
    date: "Sep 5, 2024",
    readTime: "10 min read",
    tags: ["TypeScript", "Best Practices"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
  },
  {
    slug: "accessibility-frontend",
    title: "Making Accessibility a Priority in Frontend Development",
    category: "Accessibility",
    excerpt: "A comprehensive guide to building accessible web applications that work for everyone, including WCAG compliance strategies.",
    content: `Accessibility isn't just a checkbox—it's about creating inclusive experiences that work for everyone. Here's how to build accessibility into your development process.

## Understanding WCAG

The Web Content Accessibility Guidelines (WCAG) are organized around four principles (POUR):

- **Perceivable** - Information must be presentable to users
- **Operable** - UI components must be operable
- **Understandable** - Information and UI must be understandable
- **Robust** - Content must be robust enough for assistive technologies

Aim for WCAG 2.1 Level AA as your baseline.

## Semantic HTML is the Foundation

Before reaching for ARIA, use semantic HTML:

\`\`\`html
<!-- ❌ Div soup -->
<div class="button" onclick="submit()">Submit</div>

<!-- ✅ Semantic -->
<button type="submit">Submit</button>
\`\`\`

Native elements provide keyboard support, focus management, and screen reader announcements for free.

## Keyboard Navigation

Every interactive element must be keyboard accessible:

- Tab order should follow visual order
- Focus states must be visible
- Escape should close modals/dropdowns
- Arrow keys for navigation within components

Test by unplugging your mouse and navigating your entire application.

## Color and Contrast

- Maintain 4.5:1 contrast ratio for normal text
- 3:1 for large text and UI components
- Never use color alone to convey information
- Test with color blindness simulators

## Screen Reader Testing

Regularly test with screen readers:

- **VoiceOver** (Mac) - Built into macOS
- **NVDA** (Windows) - Free and widely used
- **JAWS** (Windows) - Enterprise standard

Listen to how your content sounds, not just how it looks.

## Automated Testing

Integrate accessibility testing into your CI/CD:

- **eslint-plugin-jsx-a11y** for static analysis
- **axe-core** for runtime testing
- **Lighthouse** for overall audits

Automated tools catch about 30% of issues—manual testing is still essential.`,
    date: "Aug 18, 2024",
    readTime: "9 min read",
    tags: ["Accessibility", "WCAG", "UX"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop",
  },
  {
    slug: "vue-to-react-migration",
    title: "Migrating from Vue.js to React: A Practical Guide",
    category: "Migration",
    excerpt: "Step-by-step approach to migrating a large Vue.js application to React while maintaining business continuity.",
    content: `Framework migrations can be daunting, but with the right strategy, you can migrate incrementally while maintaining business continuity. Here's the approach I used for a 100K+ line codebase.

## Why Migrate?

Before starting, ensure you have valid reasons:

- Team expertise shifting toward React
- Ecosystem requirements (specific libraries)
- Hiring considerations
- Performance requirements

Don't migrate just because React is popular. Vue is excellent.

## The Strangler Fig Pattern

Instead of a big-bang rewrite, use the strangler fig pattern:

1. Build new features in React
2. Gradually replace Vue components
3. Eventually remove all Vue code

This approach reduces risk and delivers value continuously.

## Setting Up the Hybrid Architecture

Use module federation or a micro-frontend approach to run both frameworks:

\`\`\`javascript
// Shell application loads either Vue or React
const loadComponent = (framework, path) => {
  if (framework === 'vue') {
    return loadVueComponent(path);
  }
  return loadReactComponent(path);
};
\`\`\`

## Component Migration Strategy

Migrate bottom-up, starting with leaf components:

1. **Utilities and hooks** - Pure functions translate directly
2. **Presentational components** - Stateless components are straightforward
3. **Container components** - State management requires more thought
4. **Page components** - Migrate last, as they orchestrate everything

## State Management Translation

| Vue Concept | React Equivalent |
|-------------|------------------|
| data() | useState |
| computed | useMemo |
| watch | useEffect |
| methods | Regular functions |
| Vuex | Redux/Zustand |

## Testing During Migration

Maintain test coverage throughout:

- Keep existing Vue tests running
- Write new tests for React components
- Integration tests ensure feature parity
- E2E tests validate user journeys

## Timeline Expectations

For a 100K+ line codebase with a team of 5:

- Setup and tooling: 2-4 weeks
- First features in React: 4-6 weeks
- 50% migration: 6-12 months
- Complete migration: 12-18 months

Plan for the long haul and celebrate incremental wins.`,
    date: "Jul 22, 2024",
    readTime: "15 min read",
    tags: ["Vue.js", "React", "Migration"],
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
  },
  {
    slug: "state-management-2024",
    title: "Modern State Management in React: Beyond Redux",
    category: "React",
    excerpt: "Exploring modern state management solutions including Zustand, Jotai, and React Query for different use cases.",
    content: `The React state management landscape has evolved significantly. Redux isn't always the answer anymore. Let's explore when to use what.

## The State Categories

First, categorize your state:

1. **Server state** - Data from APIs (use React Query/SWR)
2. **Client state** - UI state, form state (use local state/Zustand)
3. **URL state** - Filters, pagination (use router state)
4. **Form state** - Input values, validation (use React Hook Form)

Each category has optimal solutions.

## React Query for Server State

React Query has revolutionized how we handle server state:

\`\`\`typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});
\`\`\`

It handles caching, background refetching, optimistic updates, and more.

## Zustand for Simple Client State

Zustand provides a minimal, hook-based API:

\`\`\`typescript
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
\`\`\`

Perfect for global client state without boilerplate.

## Jotai for Atomic State

Jotai excels at fine-grained reactivity:

\`\`\`typescript
const countAtom = atom(0);
const doubleAtom = atom((get) => get(countAtom) * 2);
\`\`\`

Great for complex derived state and avoiding unnecessary re-renders.

## When Redux Still Makes Sense

Redux remains valuable for:

- Complex state with many reducers
- Time-travel debugging requirements
- Strong TypeScript support with RTK
- Teams already familiar with Redux patterns

## My Recommendations

- Start with React's built-in state
- Add React Query for server state early
- Use Zustand when you need global client state
- Consider Jotai for complex atomic state
- Use Redux for large teams with complex requirements

The best state management is the minimum state management needed.`,
    date: "Jun 15, 2024",
    readTime: "11 min read",
    tags: ["React", "State Management", "Zustand"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    slug: "testing-strategies-frontend",
    title: "Testing Strategies for Frontend Applications",
    category: "Testing",
    excerpt: "A practical approach to testing React applications with Jest, React Testing Library, and Cypress for confidence in production.",
    content: `Testing frontend applications requires a balanced approach. Here's how to build a testing strategy that provides confidence without slowing down development.

## The Testing Pyramid (Updated)

The traditional pyramid needs adjustment for frontend:

- **E2E tests** - Few but critical user journeys
- **Integration tests** - Most of your tests should be here
- **Unit tests** - For complex utilities and edge cases

Integration tests at the component level provide the best ROI.

## React Testing Library Philosophy

RTL encourages testing behavior, not implementation:

\`\`\`typescript
// ❌ Testing implementation
expect(component.state.isOpen).toBe(true);

// ✅ Testing behavior
expect(screen.getByRole('dialog')).toBeVisible();
\`\`\`

Test what users see and do, not internal state.

## What to Test

Focus testing efforts on:

- **User flows** - Complete journeys through your app
- **Edge cases** - Error states, loading states, empty states
- **Accessibility** - Keyboard navigation, ARIA attributes
- **Business logic** - Complex calculations, validations

Don't test:

- Third-party libraries
- Framework internals
- Trivial implementations

## Mocking Strategy

Mock at the network boundary:

\`\`\`typescript
import { rest } from 'msw';

const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]));
  }),
];
\`\`\`

MSW (Mock Service Worker) provides realistic API mocking.

## E2E with Cypress

Reserve E2E for critical paths:

- Authentication flows
- Payment processing
- Core feature happy paths

\`\`\`javascript
describe('Checkout', () => {
  it('completes purchase successfully', () => {
    cy.login();
    cy.addToCart('product-1');
    cy.checkout();
    cy.contains('Order confirmed');
  });
});
\`\`\`

## Continuous Integration

Run tests on every PR:

- Unit/integration tests on every commit
- E2E tests on merge to main
- Visual regression tests for UI changes

Fast feedback loops catch issues early.`,
    date: "May 20, 2024",
    readTime: "10 min read",
    tags: ["Testing", "Jest", "Cypress"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
  },
];

// Resume Data
export const resumeData = {
  name: "Juan Reyes",
  title: "Senior Frontend Developer",
  location: "Mesa, AZ",
  email: "reyes1212@gmail.com",
  phone: "(480) 435-2155",
  summary: "Results-oriented software development professional with over 7 years of experience leading the design, development, and strategy for high-impact web applications. Expert in React, Vue.js, and enterprise-scale frontend architecture.",
  experience: [
    {
      company: "PetSmart",
      role: "Senior Frontend Developer",
      duration: "2021 - Present",
      location: "Phoenix, AZ",
      highlights: [
        "Lead frontend development for e-commerce platform serving 1.2M+ monthly users",
        "Architected React component library reducing development time by 40%",
        "Implemented performance optimizations reducing page load time by 40%",
        "Mentored team of 5 junior developers"
      ]
    },
    {
      company: "Hownd",
      role: "Lead Frontend Developer",
      duration: "2019 - 2021",
      location: "Tempe, AZ",
      highlights: [
        "Built real-time analytics dashboard for 50K+ small businesses",
        "Led Vue.js to React migration for core platform",
        "Implemented A/B testing framework increasing conversion by 25%",
        "Established frontend coding standards and review processes"
      ]
    },
    {
      company: "RetailTech Solutions",
      role: "Frontend Developer",
      duration: "2017 - 2019",
      location: "Scottsdale, AZ",
      highlights: [
        "Developed React Native POS system for 500+ retail locations",
        "Built offline-first architecture with seamless data sync",
        "Created inventory management module with real-time updates"
      ]
    }
  ],
  skills: {
    frontend: ["React.js", "Vue.js", "Next.js", "TypeScript", "JavaScript ES6+", "HTML5/CSS3"],
    styling: ["Tailwind CSS", "Styled Components", "SCSS", "CSS-in-JS"],
    state: ["Redux", "Zustand", "React Query", "Vuex"],
    testing: ["Jest", "Cypress", "React Testing Library", "Playwright"],
    tools: ["Git", "Docker", "CI/CD", "Webpack", "Vite", "Storybook"],
    design: ["Figma", "Adobe XD", "Design Systems", "Accessibility (WCAG 2.1)"]
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Arizona State University",
      year: "2017"
    }
  ]
};
