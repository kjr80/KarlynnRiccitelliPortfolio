import { motion } from "framer-motion";
import "./ProgressTrail.css";

export default function ProgressTrail({ progress }) {
  return (
    <div className="trail" role="progressbar" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100} aria-label="Reading progress">
      <div className="trail-track">
        <motion.div
          className="trail-fill"
          style={{ scaleX: progress }}
        />
      </div>
      <motion.div
        className="trail-marker"
        style={{ left: `${progress * 100}%` }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-trail)">
          <path d="M21 15.5v-2l-8-5V4a1.5 1.5 0 00-3 0v4.5l-8 5v2l8-2.5V18l-2.5 1.8V21l4-1 4 1v-1.2L13 18v-5.5l8 3z" />
        </svg>
      </motion.div>
    </div>
  );
}
