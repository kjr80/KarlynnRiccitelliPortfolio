import { AnimatePresence, motion } from "framer-motion";
import "./AchievementBadge.css";

export default function AchievementBadge({ show, label = "Case study complete" }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="badge-toast"
          role="status"
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="badge-stamp"
            initial={{ rotate: -14, scale: 0.6 }}
            animate={{ rotate: -8, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="var(--color-surface)" strokeWidth="2" fill="var(--color-stamp)" />
              <path d="M13 20.5l4.5 4.5L27 15" stroke="var(--color-surface)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.div>
          <div className="badge-text">
            <span className="badge-eyebrow">Achievement unlocked</span>
            <span className="badge-label">{label}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
