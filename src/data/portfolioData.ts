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
    content: `Design systems are the backbone of modern enterprise applications. In this article, I'll share lessons learned from building design systems at scale...`,
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
    content: `Performance is crucial for user experience. Let's explore proven strategies for optimizing React applications...`,
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
    content: `Leading a frontend team requires a balance of technical expertise and people skills...`,
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
    content: `TypeScript has become essential for large-scale JavaScript applications...`,
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
    content: `Accessibility isn't just a checkbox—it's about creating inclusive experiences...`,
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
    content: `Framework migrations can be daunting, but with the right strategy...`,
    date: "Jul 22, 2024",
    readTime: "15 min read",
    tags: ["Vue.js", "React", "Migration"],
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
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
