import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProject, projects } from "../data/projects";
import { usePassport } from "../context/PassportContext";
import { useScrollProgress } from "../hooks/useScrollProgress";
import ProgressTrail from "../components/ProgressTrail";
import AchievementBadge from "../components/AchievementBadge";
import Mascot from "../components/Mascot";
import CaseStudyEmbed from "../components/CaseStudyEmbed";
import "./CaseStudy.css";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = getProject(slug);
  const { stampProject, isStamped } = usePassport();
  const progress = useScrollProgress();
  const [showBadge, setShowBadge] = useState(false);
  const [mascotState, setMascotState] = useState("waving");

  const alreadyStamped = isStamped(study.slug);

  // Wave on arrival, then settle to idle.
  useEffect(() => {
    setMascotState("waving");
    const t = setTimeout(() => setMascotState("idle"), 1600);
    return () => clearTimeout(t);
  }, [slug]);

  // Unlock the stamp once when the reader reaches the end.
  useEffect(() => {
    if (progress > 0.96 && !alreadyStamped) {
      stampProject(study.slug);
      setShowBadge(true);
      setMascotState("celebrating");
      const hide = setTimeout(() => setShowBadge(false), 3200);
      return () => clearTimeout(hide);
    }
  }, [progress, alreadyStamped, stampProject, study.slug]);

  const index = projects.findIndex((p) => p.slug === study.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div>
      <ProgressTrail progress={progress} />
      <Mascot state={mascotState} />
      <AchievementBadge show={showBadge} label={`"${study.title}" stamped`} />

      <article className="wrap case-study">
        <p className="case-tag">{study.tag}</p>
        <h1 className="case-title">{study.title}</h1>

        <div className="case-meta">
          <div className="case-meta-field">
            <span className="case-meta-label">Role</span>
            <span className="case-meta-value">{study.meta.role}</span>
          </div>
          <div className="case-meta-field">
            <span className="case-meta-label">Duration</span>
            <span className="case-meta-value">{study.meta.duration}</span>
          </div>
          <div className="case-meta-field">
            <span className="case-meta-label">Type</span>
            <span className="case-meta-value">{study.meta.type}</span>
          </div>
        </div>

        <CaseStudyEmbed embed={study.embed} />

        {study.sections.map((s) => (
          <section key={s.heading} className="case-section">
            <h2>{s.heading}</h2>
            {/* body may contain blank-line-separated paragraphs (quoted
                source text with its own paragraph breaks) — split those
                into separate <p> tags rather than collapsing them, which
                is what a single <p> would otherwise do to "\n\n". */}
            {s.body.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>
        ))}

        <div className="case-mrz" aria-hidden="true">
          P&lt;PORTFOLIO&lt;&lt;{study.slug.toUpperCase().replace(/-/g, "&lt;")}
          <br />
          STAMP{String(index + 1).padStart(2, "0")}&lt;&lt;{study.meta.type.toUpperCase()}&lt;&lt;&lt;COLLECTED
        </div>

        <Link to={`/work/${next.slug}`} className="case-next">
          Next stamp: {next.title} →
        </Link>
      </article>
    </div>
  );
}
