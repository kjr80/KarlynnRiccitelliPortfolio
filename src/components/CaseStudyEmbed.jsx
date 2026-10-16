import "./CaseStudyEmbed.css";

/**
 * Renders a project's live embed — a video, a playable Figma prototype, or
 * a live website — inside a bordered frame, with an "Open in new tab" link
 * underneath as a fallback in case the embed is blocked (a signed-out
 * viewer, a stricter browser privacy setting, etc).
 *
 * `project.embed` is optional — case studies without one (or one you
 * haven't set up yet) simply skip rendering this block.
 */
export default function CaseStudyEmbed({ embed }) {
  if (!embed) return null;

  const aspectClass = embed.type === "drive-video" ? "embed-frame--video" : "embed-frame--tall";

  return (
    <div className="case-embed">
      <div className={`embed-frame ${aspectClass}`}>
        <iframe
          src={embed.src}
          title={embed.label}
          allow={embed.type === "drive-video" ? "autoplay" : undefined}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <a className="embed-open-link" href={embed.openUrl} target="_blank" rel="noreferrer">
        {embed.label} in a new tab ↗
      </a>
    </div>
  );
}
