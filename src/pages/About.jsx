import "./Static.css";

export default function About() {
  return (
    <article className="wrap static-page">
      <h1>About</h1>
      <p>
        I'm a product designer and front-end developer who likes working close to the interaction —
        the parts of a product where a design decision and an engineering decision are really the same
        decision. Most of my recent work has been on habit-forming, feedback-driven product experiences.
      </p>
      <p>
        Before design, I worked in [your background — swap this in]. That's given me a habit of treating
        every screen as a small system: what state is it in, what changed to get here, and what does the
        user expect to happen next.
      </p>
      <h2>Tools I reach for</h2>
      <ul>
        <li>Figma, FigJam, and occasionally After Effects for motion prototypes</li>
        <li>React, Framer Motion, and vanilla CSS for build-out and prototyping in code</li>
        <li>Usability testing and lightweight quant analysis to close the loop</li>
      </ul>
    </article>
  );
}
