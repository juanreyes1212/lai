import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown>; u?: string }) => void;
  }
}

const SCRIPT_ID = "plausible-analytics";

/**
 * Privacy-friendly analytics (Plausible). No cookies, no PII, no consent banner needed.
 *
 * Activates only when `VITE_ANALYTICS_DOMAIN` is set AND the app is running on
 * a non-localhost host. The script is loaded with `defer` and uses the
 * `manual` extension so we control SPA pageview tracking on route change.
 */
export const useAnalytics = () => {
  const location = useLocation();
  const injected = useRef(false);

  const domain = import.meta.env.VITE_ANALYTICS_DOMAIN as string | undefined;
  const isLocalhost =
    typeof window !== "undefined" &&
    /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/.test(window.location.hostname);
  const enabled = Boolean(domain) && !isLocalhost;

  useEffect(() => {
    if (!enabled || injected.current) return;
    if (document.getElementById(SCRIPT_ID)) {
      injected.current = true;
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.defer = true;
    script.setAttribute("data-domain", domain!);
    script.src = "https://plausible.io/js/script.manual.js";
    document.head.appendChild(script);

    // Tiny queue shim so calls before the script loads are not lost.
    if (!window.plausible) {
      window.plausible = (...args: unknown[]) => {
        (window.plausible as unknown as { q: unknown[] }).q =
          (window.plausible as unknown as { q?: unknown[] }).q || [];
        (window.plausible as unknown as { q: unknown[] }).q.push(args);
      };
    }
    injected.current = true;
  }, [enabled, domain]);

  useEffect(() => {
    if (!enabled) return;
    window.plausible?.("pageview", { u: window.location.href });
  }, [enabled, location.pathname, location.search]);
};
