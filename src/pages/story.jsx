import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { useMetadata } from "../services/hooks";
import { fetchStory } from "../services/storyService";
import Loader from "../components/Loader";
import FallbackImage from "../components/FallbackImage";
import { ArrowLeftIcon, CheckIcon, CopyIcon } from "../components/Icons";
import { DEFAULT_DESCRIPTION } from "../services/Metadata/MetadataProvider";

export default function StoryPage() {
  const { slug } = useParams();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useMetadata({
    title: story ? `${story.title}` : "Stories",
    description: story?.excerpt ?? DEFAULT_DESCRIPTION,
  });

  function handleShare() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  useEffect(() => {
    async function loadStory() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchStory(slug);
        setStory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadStory();
  }, [slug]);

  return (
    <main className="story-page">
      <article className="story-article">
        {/* Header area — always visible */}
        <div className="story-header">
          <Link to="/" className="story-back">
            <ArrowLeftIcon /> Back to Home
          </Link>

          {loading && <Loader size="lg" />}
          {error && <p className="story-error">Error: {error}</p>}
          {!loading && !error && !story && (
            <p className="story-error">Story not found.</p>
          )}

          {!loading && !error && story && (
            <>
              {/* Tags */}
              {story.tags.length > 0 && (
                <div className="story-tags">
                  {story.tags.map((tag) => (
                    <span key={tag} className="story-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title & Meta */}
              <h1 className="story-title">{story.title}</h1>
              <div className="story-meta">
                <span>{new Date(story.date).toLocaleDateString()}</span>
                <span className="story-meta-dot" />
                <span>By {story.author}</span>
              </div>
            </>
          )}
        </div>

        {/* Content */}
        {!loading && !error && story && (
          <>
            {/* Header image */}
            <div className="story-hero-image">
              <FallbackImage
                src={story.image}
                alt={story.title}
                className="story-hero-image-tag"
              />
            </div>

            <div className="story-content">
              <ReactMarkdown>{story.content}</ReactMarkdown>
            </div>

            {/* Footer Actions */}
            <div className="story-actions">
              <p className="story-actions-label">Share</p>
              <div className="story-actions-buttons">
                <div className="story-action-btn-wrapper">
                  <button
                    className="story-action-btn"
                    aria-label="Copy link"
                    onClick={handleShare}
                  >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                  </button>
                  <span className="story-action-btn-label">
                    {copied ? "Link copied!" : ""}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </article>
    </main>
  );
}
