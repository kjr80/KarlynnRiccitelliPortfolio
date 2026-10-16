import "./Footer.css";

const ISSUED = new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" });

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-note">Made with React, Framer Motion, and a slightly excessive love of travel documents.</p>
        <div className="footer-postmark" aria-hidden="true">
          <svg viewBox="0 0 100 100" width="56" height="56">
            <circle cx="50" cy="50" r="36" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.6" />
            <circle cx="50" cy="50" r="22" fill="none" stroke="var(--color-ink-soft)" strokeWidth="0.8" />
            {/* Arc kept to a 150° span (rather than a full half-circle) so the
                end letters stay near the top of the ring, well clear of the
                horizontal midline where the band between the two circles is
                at its narrowest — otherwise the text crosses one of the rings. */}
            <path id="footer-arc-top" d="M21.02,42.24 A30,30 0 0,1 78.98,42.24" fill="none" />
            <text fontFamily="var(--font-mono)" fontSize="7.5" fill="var(--color-ink-soft)" letterSpacing="1.2">
              <textPath href="#footer-arc-top" startOffset="50%" textAnchor="middle">
                PORTFOLIO
              </textPath>
            </text>
            <text x="50" y="47" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-ink-soft)">
              ISSUED
            </text>
            <text x="50" y="58" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--color-ink-soft)">
              {ISSUED.toUpperCase()}
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
