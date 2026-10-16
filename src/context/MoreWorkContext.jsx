import { createContext, useContext, useState, useCallback } from "react";

const MoreWorkContext = createContext(null);

/**
 * Tracks which /more-work/:slug entries have been visited this session —
 * mirrors PassportContext, but for the "more work" list rather than the
 * three featured case studies. Not persisted, by the same reasoning: a
 * fresh visit should show a fresh, unchecked list.
 */
export function MoreWorkProvider({ children }) {
  const [viewed, setViewed] = useState({});

  const markViewed = useCallback((slug) => {
    setViewed((prev) => (prev[slug] ? prev : { ...prev, [slug]: true }));
  }, []);

  const isViewed = useCallback((slug) => Boolean(viewed[slug]), [viewed]);

  return (
    <MoreWorkContext.Provider value={{ markViewed, isViewed }}>
      {children}
    </MoreWorkContext.Provider>
  );
}

export function useMoreWorkViews() {
  const ctx = useContext(MoreWorkContext);
  if (!ctx) throw new Error("useMoreWorkViews must be used within a MoreWorkProvider");
  return ctx;
}
