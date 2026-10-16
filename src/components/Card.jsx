import { Link } from "react-router-dom";
import { usePassport } from "../context/PassportContext";
import { stampImages } from "../data/stampImages";
import "./Card.css";

export default function Card({ to, tag, title, description, slug }) {
  const { isStamped } = usePassport();
  const collected = slug ? isStamped(slug) : false;
  const thumb = slug ? stampImages[slug] : null;

  return (
    <Link to={to} className="proj-card">
      <div
        className="proj-card-thumb"
        aria-hidden="true"
        style={thumb ? { backgroundImage: `url(${thumb})` } : undefined}
      >
        {collected && (
          <span className="proj-card-collected" title="Stamp collected">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" fill="var(--color-stamp)" />
              <path d="M5 8.2l2 2 4-4.4" stroke="var(--color-surface)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </span>
        )}
      </div>
      <div className="proj-card-body">
        {tag && <span className="proj-card-tag">{tag}</span>}
        <h3 className="proj-card-title">{title}</h3>
        <p className="proj-card-desc">{description}</p>
      </div>
    </Link>
  );
}
