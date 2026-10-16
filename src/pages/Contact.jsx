import "./Contact.css";

export default function Contact() {
  return (
    <article className="wrap contact-page">
      <p className="contact-kicker">Boarding pass</p>
      <h1 className="contact-title">Let's talk</h1>

      <div className="boarding-pass">
        <div className="pass-main">
          <div className="pass-row">
            <div className="pass-field">
              <span className="pass-label">Passenger</span>
              <span className="pass-value">Karlynn Riccitelli</span>
            </div>
            <div className="pass-field">
              <span className="pass-label">Class</span>
              <span className="pass-value">Product Design</span>
            </div>
          </div>

          <div className="pass-row">
            <div className="pass-field">
              <span className="pass-label">From</span>
              <span className="pass-value pass-value--lg">YOU</span>
            </div>
            <svg className="pass-plane" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 15.5v-2l-8-5V4a1.5 1.5 0 00-3 0v4.5l-8 5v2l8-2.5V18l-2.5 1.8V21l4-1 4 1v-1.2L13 18v-5.5l8 3z" />
            </svg>
            <div className="pass-field pass-field--right">
              <span className="pass-label">To</span>
              <span className="pass-value pass-value--lg">ME</span>
            </div>
          </div>

          <div className="pass-row">
            <div className="pass-field">
              <span className="pass-label">Gate (email)</span>
              <a className="pass-value pass-link" href="mailto:you@example.com">Karlynn.Ricci@gmail.com</a>
            </div>
            <div className="pass-field">
              <span className="pass-label">Seat (LinkedIn)</span>
              <a className="pass-value pass-link" href="https://www.linkedin.com/in/karlynnriccitelli" target="_blank" rel="noreferrer">karlynnriccitelli</a>
            </div>
          </div>
        </div>

        <div className="pass-stub">
          <span className="pass-label">Boarding</span>
          <span className="pass-value">Anytime</span>
          <div className="pass-barcode" aria-hidden="true" />
          <a className="pass-link" href="https://github.com/kjr80" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </article>
  );
}
