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
    slug: "fittrack",
    title: "FitTrack — Personal Fitness & Nutrition Tracker",
    status: "In Development" as const,
    description: "A private, self-hosted fitness tracker with Apple Watch / Ultrahuman wearable import, barcode food logging via Open Food Facts, AI-powered meal plans, and wearable-aware daily macro recommendations. Built around lean muscle goals — not weight loss.",
    tech: ["React", "Vite", "PostgreSQL", "Drizzle ORM", "Express", "OpenAI", "ZXing", "Open Food Facts"],
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=400&fit=crop",
    highlights: [
      "Health Auto Export & Ultrahuman JSON import with idempotent upserts",
      "Barcode scanner + Open Food Facts with portion multiplier",
      "Keyword-based 'I'm not sure' macro estimator (~40 food buckets)",
      "AI daily macro recommendations from HRV, sleep, and training load",
      "Nutrition goals: 4 presets (Lean Muscle / Clean Bulk / Maintenance / Cut)",
      "lbs/kg toggle, structured wellness journal, AI meal plan generator"
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
  {
    slug: "tails-and-scales",
    title: "Tails & Scales — Pet Services Booking & Photography Platform",
    status: "In Development" as const,
    description: "An MVP booking platform for a multi-service pet business (grooming, training, sitting, walking, in-home photography). Guest-first booking with optional account linking, a manual confirmation queue, dual-channel notifications (Resend + Twilio), token-gated client galleries, and streaming ZIP downloads generated server-side.",
    tech: ["React", "TypeScript", "Supabase", "Postgres RLS", "Edge Functions", "Resend", "Twilio", "Stripe"],
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop",
    highlights: [
      "Forward-only auth — book as a guest, link past bookings on signup via email",
      "Manual 'pending_review' queue instead of auto-confirm — owner approves every booking",
      "Email + SMS notifications with isolated try/catch so SMS failures don't break email",
      "Token-gated public pages via SECURITY DEFINER RPCs, no RLS gymnastics",
      "Streaming ZIP generation in 512 MB Edge Functions with EdgeRuntime.waitUntil",
      "Junction tables (booking_pets) ready for multi-pet UI without a destructive migration"
    ]
  },
];

