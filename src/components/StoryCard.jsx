import { Link } from "react-router";

export default function StoryCard({ story }) {
  return (
    <Link to={`/story/${story.id}`}>
      <article>
        {story.title} - {new Date(story.date).toLocaleDateString()}
      </article>
    </Link>
  );
}
