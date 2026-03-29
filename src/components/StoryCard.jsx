import { Link } from "react-router";
import { ArrowRightIcon } from "./Icons";
import FallbackImage from "./FallbackImage";

export default function StoryCard({ story, index }) {
  const isFeatured = index === 0;
  const isOffset = index === 2;

  return (
    <article
      className={`story-card ${
        isFeatured ? "story-card--featured" : "story-card--regular"
      } ${isOffset ? "story-card--offset" : ""}`}
    >
      <Link to={`/story/${story.slug}`} className="story-card-link">
        {/* Optional thumbnail at top */}
        <div className="story-card-image-wrapper">
          <FallbackImage
            src={story.image}
            alt={story.title}
            className="story-card-image"
          />
        </div>

        <div className="story-card-meta">
          {new Date(story.date).toLocaleDateString()}
        </div>
        <h2 className="story-card-title">{story.title}</h2>
        <p className="story-card-excerpt">{story.excerpt}</p>
        <span className="story-card-cta">
          Read <ArrowRightIcon />
        </span>
      </Link>
    </article>
  );
}
