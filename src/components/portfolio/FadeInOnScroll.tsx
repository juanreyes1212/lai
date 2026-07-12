import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FadeInOnScrollProps {
  children: ReactNode;
  as?: "div" | "section" | "article";
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  /** Kept for API compatibility; the CSS implementation is always in-view triggered. */
  inView?: boolean;
}

/**
 * Fades + slides content in when it enters the viewport, using IntersectionObserver
 * + CSS transitions. Respects prefers-reduced-motion (renders instantly, no transform).
 *
 * Previously implemented with framer-motion. Rewritten to CSS so list-heavy routes
 * (Index, Work, Personal, Blog) don't pay for the framer runtime just to fade cards in.
 * PageTransition still uses framer for AnimatePresence exit animations.
 */
const FadeInOnScroll = ({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 0.5,
  y = 30,
}: FadeInOnScrollProps) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "-50px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const Comp = as as ElementType;
  const style = prefersReducedMotion
    ? undefined
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
        willChange: visible ? undefined : "opacity, transform",
      };

  return (
    <Comp ref={ref} className={className} style={style}>
      {children}
    </Comp>
  );
};

export default FadeInOnScroll;
