import { Link } from "react-router-dom";
import { moreWork } from "../data/moreWork";
import { useMoreWorkViews } from "../context/MoreWorkContext";
import { stampImages } from "../data/stampImages";
import "./MoreWork.css";

export default function MoreWork() {
  const { isViewed } = useMoreWorkViews();

  return (
    <div className="wrap more-work-page">
      <p className="more-work-kicker">Additional stamps</p>
      <h1 className="more-work-title">More work</h1>
      <p className="more-work-sub">
        A few smaller projects and side quests that didn't make the featured three, for anyone who wants to keep
        reading.
      </p>

      <div className="postcard-grid">
        {moreWork.map((item) => {
          const viewed = isViewed(item.slug);
          return (
            <Link key={item.slug} className="postcard" to={`/more-work/${item.slug}`}>
              <div className={`postcard-stamp ${viewed ? "is-viewed" : "is-unviewed"}`} aria-hidden="true">
                {stampImages[item.slug] && (
                  <div
                    className="postcard-stamp-photo"
                    style={{ backgroundImage: `url(${stampImages[item.slug]})` }}
                  />
                )}
                <svg className="postcard-stamp-frame" viewBox="0 0 40 40" width="34" height="34">
                  <rect
                    x="2"
                    y="2"
                    width="36"
                    height="36"
                    rx="2"
                    fill="none"
                    stroke={viewed ? "var(--color-stamp)" : "var(--color-ink-soft)"}
                    strokeWidth="1.6"
                    strokeDasharray={viewed ? "0" : "2.4 2.4"}
                  />
                </svg>
                {viewed && (
                  <svg className="postcard-stamp-check" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="var(--color-stamp)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="postcard-tag">{item.tag}</span>
              <h3 className="postcard-title">{item.title}</h3>
              <p className="postcard-desc">{item.description}</p>
              <span className="postcard-link">{viewed ? "Viewed ✓" : "View →"}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
