import { motion, AnimatePresence } from "framer-motion";
import "./Mascot.css";

/**
 * Mascot component with two display modes:
 * - "floating" (default): fixed to the bottom-right corner, pops in based on
 *   page context (case study pages, the Passport page).
 * - "photo": inline, framed like a passport photo — used on the cover.
 *
 * The "photo" variant (the passport cover only) shows a real photo of you —
 * see PhotoFigure below, which reads from /avatar.jpg in the public folder.
 * The "floating" variant (used on other pages) still uses the placeholder
 * illustration — swap PlaceholderFigure's SVG for your own artwork later if
 * you want those animated too; the state prop and animation wiring stay the
 * same either way.
 *
 * states: "idle" | "waving" | "celebrating" | "pointing"
 */
export default function Mascot({ state = "idle", visible = true, variant = "floating" }) {
  const slotClass = variant === "photo" ? "mascot-slot mascot-slot--photo" : "mascot-slot";
  return (
    <div className={slotClass}>
      <AnimatePresence>
        {visible && (
          <motion.div
            key={state}
            className={`mascot mascot--${state} mascot--${variant}`}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {variant === "photo" ? <PhotoFigure /> : <PlaceholderFigure state={state} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PhotoFigure() {
  // Real photo of you, for the passport cover only. Drop your picture into
  // public/avatar.jpg (any image works — just keep that exact filename, or
  // change the src below to match whatever you name it).
  return <img src="/avatar.jpg" alt="Portrait" className="mascot-photo-img" />;
}

function PlaceholderFigure({ state }) {
  // Simple placeholder circle-figure for the floating mascot on other
  // pages. Replace with an <img> or inline SVG of your own illustration —
  // keep the wrapping <motion.div> above as-is.
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="34" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="2" />
      <circle cx="27" cy="32" r="3" fill="var(--color-ink)" />
      <circle cx="45" cy="32" r="3" fill="var(--color-ink)" />
      {state === "celebrating" ? (
        <path d="M25 42c4 5 18 5 22 0" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      ) : (
        <path d="M27 43c5 4 13 4 18 0" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      )}
    </svg>
  );
}