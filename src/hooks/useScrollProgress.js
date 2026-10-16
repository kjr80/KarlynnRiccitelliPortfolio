import { useEffect, useState } from "react";

/**
 * Tracks how far the user has scrolled through the page, as a 0–1 value.
 * Reset on every mount (i.e. every visit) — no persistence by design,
 * so the "unlock" moment always feels fresh.
 *
 * Starts at 0 and only updates from real scroll/resize events, rather than
 * reading window.scrollY immediately on mount — on route change, the
 * browser can briefly report a leftover scroll position from the previous
 * page before it's reset to the top, which would otherwise report a false
 * "already near the bottom" progress value for a split second and
 * incorrectly trigger the achievement badge.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return progress;
}
