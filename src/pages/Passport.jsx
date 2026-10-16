import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { usePassport } from "../context/PassportContext";
import { stampImages } from "../data/stampImages";
import Mascot from "../components/Mascot";
import "./Passport.css";

const TYPE_ICON = {
  Mobile: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Web: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  Systems: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3v2.6M12 18.4V21M21 12h-2.6M5.6 12H3M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M18.4 18.4l-1.8-1.8M7.4 7.4L5.6 5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

function Perforation() {
  return (
    <>
      <span className="perf perf-top" aria-hidden="true" />
      <span className="perf perf-bottom" aria-hidden="true" />
      <span className="perf perf-left" aria-hidden="true" />
      <span className="perf perf-right" aria-hidden="true" />
    </>
  );
}

function Postmark({ variant = 0 }) {
  if (variant === 1) {
    // plain circular postmark, no radiating ticks
    return (
      <div className="postmark postmark--circle" aria-hidden="true">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="33" fill="none" stroke="var(--color-stamp)" strokeWidth="2.2" />
          <circle cx="50" cy="50" r="26" fill="none" stroke="var(--color-stamp)" strokeWidth="1" />
          <text x="50" y="47" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-stamp)">
            VISIT
          </text>
          <text x="50" y="58" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="6.5" fill="var(--color-stamp)">
            COMPLETE
          </text>
        </svg>
      </div>
    );
  }

  // default variant 0: rounded ink-stamp rectangle
  return (
    <div className="postmark postmark--rect" aria-hidden="true">
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <rect x="12" y="28" width="76" height="44" rx="4" fill="none" stroke="var(--color-stamp)" strokeWidth="2.2" />
        <rect x="17" y="33" width="66" height="34" rx="2" fill="none" stroke="var(--color-stamp)" strokeWidth="0.9" />
        <text x="50" y="49" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--color-stamp)">
          VISIT
        </text>
        <text x="50" y="60" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--color-stamp)">
          COMPLETE
        </text>
      </svg>
    </div>
  );
}

export default function Passport() {
  const { isStamped, count, total, isComplete } = usePassport();

  return (
    <div className="wrap passport-page">
      <Mascot state={isComplete ? "celebrating" : "idle"} />

      <p className="passport-kicker">Passport</p>
      <h1 className="passport-title">Stamps collected</h1>
      <p className="passport-sub">
        {isComplete
          ? "Fully stamped — you've read through every project."
          : `${count} of ${total} collected. Open a case study and read to the end to earn its stamp.`}
      </p>

      <Link to="/more-work" className="passport-more-link">
        Looking for more? See additional work →
      </Link>

      <div className="stamp-grid">
        {projects.map((p, i) => {
          const collected = isStamped(p.slug);
          return (
            <Link key={p.slug} to={`/work/${p.slug}`} className="stamp-item">
              <div className={`stamp-card ${collected ? "is-collected" : "is-empty"}`}>
                <Perforation />
                {stampImages[p.slug] && (
                  <div
                    className="stamp-photo"
                    style={{ backgroundImage: `url(${stampImages[p.slug]})` }}
                    aria-hidden="true"
                  />
                )}
                <div className="stamp-frame">
                  <span className="stamp-icon">{TYPE_ICON[p.meta.type] ?? TYPE_ICON.Web}</span>
                  <span className="stamp-denom">No. {String(i + 1).padStart(2, "0")}</span>
                </div>
                {collected && <Postmark variant={i % 2} />}
              </div>
              <div className="stamp-caption">
                <span className="stamp-tag">{p.tag}</span>
                <span className="stamp-title">{p.title}</span>
                <span className="stamp-status">{collected ? "Stamped" : "Not yet visited"}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {isComplete && (
        <motion.p
          className="passport-complete-note"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          That's the whole collection — thanks for reading through. <Link to="/contact">Get in touch</Link> if you'd like to talk through any of it.
        </motion.p>
      )}
    </div>
  );
}
