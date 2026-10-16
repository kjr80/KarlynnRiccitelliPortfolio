import "./Resume.css";

export default function Resume() {
  return (
    <article className="wrap resume-page">
      <p className="resume-kicker">Visa · Credentials</p>
      <div className="resume-head">
        <h1>Résumé</h1>
        <a className="resume-download" href="/resume.pdf" download>
          Download PDF
        </a>
      </div>
      <p className="resume-note">
        Prefer to read it here rather than download it? It's embedded below.
      </p>
      <div className="resume-frame">
        <object data="/resume.pdf" type="application/pdf" className="resume-embed">
          <p className="resume-fallback">
            Your browser can't preview PDFs inline. <a href="/resume.pdf" download>Download the résumé</a> instead.
          </p>
        </object>
      </div>
    </article>
  );
}
