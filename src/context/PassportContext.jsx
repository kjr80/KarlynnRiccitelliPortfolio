import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { projects } from "../data/projects";

const PassportContext = createContext(null);

export function PassportProvider({ children }) {
  const [stamped, setStamped] = useState({});

  const stampProject = useCallback((slug) => {
    setStamped((prev) => (prev[slug] ? prev : { ...prev, [slug]: true }));
  }, []);

  const value = useMemo(() => {
    const total = projects.length;
    const count = Object.keys(stamped).length;
    return {
      stamped,
      stampProject,
      count,
      total,
      isStamped: (slug) => Boolean(stamped[slug]),
      isComplete: count === total,
    };
  }, [stamped, stampProject]);

  return <PassportContext.Provider value={value}>{children}</PassportContext.Provider>;
}

export function usePassport() {
  const ctx = useContext(PassportContext);
  if (!ctx) throw new Error("usePassport must be used within a PassportProvider");
  return ctx;
}
