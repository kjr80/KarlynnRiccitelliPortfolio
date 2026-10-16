import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Mascot from "../components/Mascot";
import { projects } from "../data/projects";
import "./Home.css";

export default function Home() {
  const [mascotState, setMascotState] = useState("waving");

  useEffect(() => {
    const t = setTimeout(() => setMascotState("idle"), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <section className="cover wrap">
        <svg className="cover-compass" viewBox="0 0 200 120" aria-hidden="true">
          <ellipse cx="100" cy="60" rx="96" ry="56" fill="none" stroke="var(--color-ink)" strokeWidth="0.6" />
          <ellipse cx="100" cy="60" rx="60" ry="56" fill="none" stroke="var(--color-ink)" strokeWidth="0.5" />
          <ellipse cx="100" cy="60" rx="30" ry="56" fill="none" stroke="var(--color-ink)" strokeWidth="0.5" />
          <line x1="4" y1="60" x2="196" y2="60" stroke="var(--color-ink)" strokeWidth="0.5" />
          <line x1="4" y1="30" x2="196" y2="30" stroke="var(--color-ink)" strokeWidth="0.4" />
          <line x1="4" y1="90" x2="196" y2="90" stroke="var(--color-ink)" strokeWidth="0.4" />
        </svg>

        <motion.div
          className="cover-book"
          initial={{ opacity: 0, y: 16, rotateX: -6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cover-emblem" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="15" stroke="var(--color-paper)" strokeWidth="1.4" />
              <circle cx="17" cy="17" r="9" stroke="var(--color-paper)" strokeWidth="1.4" />
              <path d="M17 2v30M2 17h30" stroke="var(--color-paper)" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          <p className="cover-kicker">Portfolio Passport</p>

          <div className="cover-photo-frame">
            <Mascot variant="photo" state={mascotState} />
          </div>

          <h1 className="cover-name">Karlynn Riccitelli</h1>
          <p className="cover-role">Product Designer · Front-End Developer</p>
          <p className="cover-issued">Issued for review — three stamps inside</p>
        </motion.div>

        <motion.div
          className="cover-copy"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>I design the moments that make people want to come back tomorrow.</h2>
          <p>
            I spend most of my time on habit-forming product experiences — the small feedback loops
            that turn a task into something people choose to do again. Each project below is a stamp
            in this passport; open one to collect it, or see the whole collection on the{" "}
            <a href="/passport">Passport page</a>.
          </p>
        </motion.div>
      </section>

      <section id="work" className="wrap work-grid">
        {projects.map((p) => (
          <Card key={p.slug} slug={p.slug} to={`/work/${p.slug}`} tag={p.tag} title={p.title} description={p.description} />
        ))}
      </section>

      <section className="wrap more-work-link">
        <Link to="/more-work">See more of my work →</Link>
      </section>
    </div>
  );
}
