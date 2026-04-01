import { Link } from "react-router";
import { ArrowRightIcon } from "./Icons";
import FallbackImage from "./FallbackImage";

export default function StoryCard({
  story,
  isFeatured = false,
  isLatest = false,
}) {
  return (
    <article
      className={`story-card ${isFeatured ? "story-card--featured" : "story-card--regular"}`}
    >
      <Link to={`/story/${story.slug}`} className="story-card-link">
        {/* Optional thumbnail at top */}
        <div className="story-card-image-wrapper">
          <FallbackImage
            src={story.image}
            alt={story.title}
            className="story-card-image"
          />
          <div className="story-card-badge-wrapper">
            {isLatest && !isFeatured && (
              <span className="story-card-badge" aria-label="Latest story">
                Latest
              </span>
            )}
            {isFeatured && (
              <span className="story-card-badge" aria-label="Featured story">
                Featured
              </span>
            )}
          </div>
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
