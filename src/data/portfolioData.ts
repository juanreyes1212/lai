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
    slug: "stringly-typed-markdown-to-mdx",
    title: "From Stringly-Typed Markdown to MDX Without Breaking the Build",
    category: "Engineering",
    excerpt: "23 blog posts lived inside a 1,951-line TypeScript file as multi-line template literals. Here is how I extracted them to MDX, kept a slim metadata index, and lazy-loaded each post — without touching the rendering layer.",
    date: "May 22, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop",
    tags: ["MDX","Vite","Content"],
  },
  {
    slug: "cookieless-analytics-personal-site",
    title: "Cookie-less Analytics for a Personal Site",
    category: "Engineering",
    excerpt: "Plausible + a 40-line React hook gives you SPA pageview tracking, zero cookies, no consent banner, and a build that still passes Lighthouse — without leaking your site to localhost.",
    date: "May 22, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    tags: ["Analytics","Privacy","Plausible"],
  },
  {
    slug: "vitest-axe-ci-a11y",
    title: "Catching A11y Regressions in CI with vitest-axe",
    category: "Accessibility",
    excerpt: "A 90-line smoke test that runs axe-core against every route on every commit — what it catches, what it can't, and the two jsdom gotchas to know about up front.",
    date: "May 20, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    tags: ["a11y","Testing","Vitest"],
  },
  {
    slug: "yagni-dead-code-sweep",
    title: "YAGNI in Practice: A Quarterly Dead-Code Sweep",
    category: "Engineering",
    excerpt: "How a deprecated prop, an unused CSS variable, and a phantom Tailwind token survived three refactors — and the 15-minute workflow that finds and kills them safely.",
    date: "May 20, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
    tags: ["Refactoring","Tailwind","DX"],
  },
  {
    slug: "responsive-images-without-cdn",
    title: "Responsive Images Without an Image CDN",
    category: "Performance",
    excerpt: "A 60-line <ResponsiveImage> wrapper that generates srcset from Unsplash URLs, picks the right size for each viewport, and cut my LCP image weight on mobile by ~70%.",
    date: "May 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=400&fit=crop",
    tags: ["Images","srcset","LCP"],
  },
  {
    slug: "web-fonts-without-cls",
    title: "Eliminating CLS from Web Fonts Without Switching to System Stacks",
    category: "Performance",
    excerpt: "Why @import in CSS is the slowest possible way to load Google Fonts, and how preconnect + a plain <link> tag fixed first-paint and CLS without giving up Sora and Instrument Serif.",
    date: "May 11, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499744937866-d7e566a20a61?w=800&h=400&fit=crop",
    tags: ["Web Fonts","CLS","Core Web Vitals"],
  },
  {
    slug: "spa-seo-checklist",
    title: "A Pragmatic SEO Checklist for a React SPA",
    category: "SEO",
    excerpt: "Sitemaps, robots.txt, and Article JSON-LD — the un-glamorous SEO work that single-page apps still have to do, and the small details Google cares about.",
    date: "May 11, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
    tags: ["SEO","JSON-LD","Sitemaps"],
  },
  {
    slug: "react-lazy-suspense-route-splitting",
    title: "Shipping Faster First Paint with React.lazy + Suspense",
    category: "Performance",
    excerpt: "Why route-level code splitting is the cheapest performance win in a Vite + React app — and the trade-offs nobody tells you about fallbacks, layout shift, and chunk granularity.",
    date: "May 11, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop",
    tags: ["React","Vite","Performance"],
  },
  {
    slug: "react-helmet-json-ld-seo",
    title: "Boosting SEO in React Apps with react-helmet-async and JSON-LD",
    category: "Performance",
    excerpt: "How I implemented dynamic meta tags and structured data across a multi-page React portfolio — and the practical lessons learned about SEO in single-page applications.",
    date: "Mar 28, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["SEO","React Helmet","JSON-LD"],
  },
  {
    slug: "tdd-legacy-react",
    title: "Implementing TDD in Legacy React Codebases",
    category: "Testing",
    excerpt: "How I retrofitted a test-driven development workflow into an existing React project using Vitest and React Testing Library — and why writing tests first changed the way I ship code.",
    date: "Mar 15, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    tags: ["TDD","Vitest","React Testing Library"],
  },
  {
    slug: "yagni-codebase-pruning",
    title: "YAGNI in Practice: Auditing and Pruning a Real Codebase",
    category: "Architecture",
    excerpt: "I deleted 41 unused components and removed 35 npm dependencies from a production codebase. Here's the process, the tools, and why less code is always better.",
    date: "Feb 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
    tags: ["Architecture","Code Quality","YAGNI"],
  },
  {
    slug: "axe-core-accessibility-audit",
    title: "Running a Full Accessibility Audit with axe-core",
    category: "Accessibility",
    excerpt: "How I programmatically audited every page of a React app for WCAG violations using axe-core, and the surprising issues I found hiding in plain sight.",
    date: "Jan 25, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop",
    tags: ["Accessibility","axe-core","WCAG"],
  },
  {
    slug: "six-month-enterprise-contract",
    title: "Lessons from a 6-Month Enterprise Contract",
    category: "Leadership",
    excerpt: "What I learned leading a frontend rebuild for a fintech client under NDA — navigating enterprise processes, earning trust, and shipping under pressure.",
    date: "Apr 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
    tags: ["Contract Work","Leadership","Enterprise"],
  },
  {
    slug: "three-month-contract-healthtech",
    title: "Shipping Fast on a 3-Month Contract",
    category: "Leadership",
    excerpt: "Rapid prototyping and MVP delivery for a healthtech startup under a compressed timeline — lessons in scope management, speed, and knowing when good enough is good enough.",
    date: "Feb 5, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop",
    tags: ["Contract Work","MVP","Startups"],
  },
  {
    slug: "wcag-certification-journey",
    title: "Earning My WCAG 2.1 Certification: What I Learned",
    category: "Accessibility",
    excerpt: "My journey to becoming IAAP WAS certified — the study process, the exam experience, and how it fundamentally changed how I write code.",
    date: "Nov 12, 2023",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    tags: ["Accessibility","WCAG","Certification"],
  },
  {
    slug: "continuous-learning-practice",
    title: "Leveling Up: Building a Continuous Learning Practice",
    category: "learnings",
    excerpt: "How I structure my professional development — balancing certifications, side projects, conference talks, and hands-on learning without burning out.",
    date: "Jul 8, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop",
    tags: ["Learning","Career","Professional Development"],
  },
  {
    slug: "scalable-design-systems",
    title: "Building Scalable Design Systems for Enterprise Applications",
    category: "Architecture",
    excerpt: "How to create and maintain design systems that scale across multiple product teams while ensuring consistency and developer experience.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
    tags: ["Design Systems","React","Architecture"],
  },
  {
    slug: "react-performance-optimization",
    title: "Performance Optimization Strategies for React Applications",
    category: "Performance",
    excerpt: "Deep dive into React performance patterns including memoization, lazy loading, bundle optimization, and runtime performance monitoring.",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["React","Performance","Optimization"],
  },
  {
    slug: "leading-frontend-teams",
    title: "Leading Frontend Teams: Lessons from the Trenches",
    category: "Leadership",
    excerpt: "Insights on technical leadership, mentoring developers, code reviews, and fostering a culture of continuous improvement.",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    tags: ["Leadership","Teams","Culture"],
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Codebases",
    category: "TypeScript",
    excerpt: "Practical TypeScript patterns and practices that improve code quality, maintainability, and developer productivity.",
    date: "Sep 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["TypeScript","Best Practices"],
  },
  {
    slug: "accessibility-frontend",
    title: "Making Accessibility a Priority in Frontend Development",
    category: "Accessibility",
    excerpt: "A comprehensive guide to building accessible web applications that work for everyone, including WCAG compliance strategies.",
    date: "Aug 18, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop",
    tags: ["Accessibility","WCAG","UX"],
  },
  {
    slug: "vue-to-react-migration",
    title: "Migrating from Vue.js to React: A Practical Guide",
    category: "Migration",
    excerpt: "Step-by-step approach to migrating a large Vue.js application to React while maintaining business continuity.",
    date: "Jul 22, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
    tags: ["Vue.js","React","Migration"],
  },
  {
    slug: "state-management-2024",
    title: "Modern State Management in React: Beyond Redux",
    category: "React",
    excerpt: "Exploring modern state management solutions including Zustand, Jotai, and React Query for different use cases.",
    date: "Jun 15, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["React","State Management","Zustand"],
  },
  {
    slug: "testing-strategies-frontend",
    title: "Testing Strategies for Frontend Applications",
    category: "Testing",
    excerpt: "A practical approach to testing React applications with Jest, React Testing Library, and Cypress for confidence in production.",
    date: "May 20, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    tags: ["Testing","Jest","Cypress"],
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
