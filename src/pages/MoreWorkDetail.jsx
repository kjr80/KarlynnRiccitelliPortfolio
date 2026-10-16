import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { moreWork } from "../data/moreWork";
import { useMoreWorkViews } from "../context/MoreWorkContext";
import "./MoreWorkDetail.css";

export default function MoreWorkDetail() {
  const { slug } = useParams();
  const item = moreWork.find((w) => w.slug === slug) ?? moreWork[0];
  const { markViewed } = useMoreWorkViews();

  useEffect(() => {
    markViewed(item.slug);
  }, [item.slug, markViewed]);

  return (
    <article className="wrap more-work-detail">
      <Link to="/more-work" className="detail-back">
        ← Back to More Work
      </Link>

      <p className="detail-tag">{item.tag}</p>
      <h1 className="detail-title">{item.title}</h1>
      <p className="detail-desc">{item.description}</p>

      <div className="detail-body">
        <p>{item.body}</p>

        {item.links && item.links.length > 0 && (
          <div className="detail-links">
            {item.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="detail-link">
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
