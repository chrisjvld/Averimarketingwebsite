import { useEffect } from "react";

const SCRIPT_SRC = "/_vercel/insights/script.js";
const SCRIPT_ATTR = "data-vercel-analytics";

/**
 * Minimal client-only loader for the Vercel Web Analytics script.
 * Mirrors the behaviour of the official `@vercel/analytics/react` package
 * by injecting the analytics script when the component mounts.
 */
export function VercelAnalytics() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const existing = document.head.querySelector(`script[${SCRIPT_ATTR}]`);
    if (existing) {
      return;
    }

    const script = document.createElement("script");
    script.defer = true;
    script.src = SCRIPT_SRC;
    script.setAttribute(SCRIPT_ATTR, "true");
    script.dataset.sdkn = "custom";
    script.dataset.sdk = "react";
    script.dataset.sdkv = "0.0.0-local";
    document.head.appendChild(script);
  }, []);

  return null;
}
