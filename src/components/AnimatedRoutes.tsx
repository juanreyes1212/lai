import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import PageSkeleton from "./PageSkeleton";

// Eagerly load the landing page so first paint isn't gated on a chunk fetch.
import Index from "@/pages/Index";

// Route-level code splitting: each page becomes its own chunk, fetched on demand.
const Work = lazy(() => import("@/pages/Work"));
const WorkProject = lazy(() => import("@/pages/WorkProject"));
const Personal = lazy(() => import("@/pages/Personal"));
const PersonalProject = lazy(() => import("@/pages/PersonalProject"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Resume = lazy(() => import("@/pages/Resume"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/work" element={<PageTransition skeleton="grid"><Suspense fallback={<PageSkeleton variant="grid" />}><Work /></Suspense></PageTransition>} />
        <Route path="/work/:slug" element={<PageTransition skeleton="detail"><Suspense fallback={<PageSkeleton variant="detail" />}><WorkProject /></Suspense></PageTransition>} />
        <Route path="/personal" element={<PageTransition skeleton="grid"><Suspense fallback={<PageSkeleton variant="grid" />}><Personal /></Suspense></PageTransition>} />
        <Route path="/personal/:slug" element={<PageTransition skeleton="detail"><Suspense fallback={<PageSkeleton variant="detail" />}><PersonalProject /></Suspense></PageTransition>} />
        <Route path="/blog" element={<PageTransition skeleton="grid"><Suspense fallback={<PageSkeleton variant="grid" />}><Blog /></Suspense></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition skeleton="detail"><Suspense fallback={<PageSkeleton variant="detail" />}><BlogPost /></Suspense></PageTransition>} />
        <Route path="/resume" element={<PageTransition skeleton="resume"><Suspense fallback={<PageSkeleton variant="resume" />}><Resume /></Suspense></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><Suspense fallback={<PageSkeleton />}><NotFound /></Suspense></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
