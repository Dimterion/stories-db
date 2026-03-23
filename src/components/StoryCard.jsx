import { Link } from "react-router";

export default function StoryCard({ story, index }) {
  const isFeatured = index === 0;
  const isOffset = index === 2;

  return (
    <article
      className={`story-card ${isFeatured ? "story-card--featured" : "story-card--regular"} ${isOffset ? "story-card--offset" : ""}`}
    >
      <Link to={`/story/${story.id}`} className="story-card-link">
        <div className="story-card-meta">
          {new Date(story.date).toLocaleDateString()}
        </div>
        <h2 className="story-card-title">{story.title}</h2>
        <p className="story-card-excerpt">{story.excerpt}</p>
        <span className="story-card-cta">Read →</span>
      </Link>
    </article>
  );
}
