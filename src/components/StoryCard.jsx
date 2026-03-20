export default function StoryCard({ story }) {
  return (
    <article>
      {story.title} - {story.date}
    </article>
  );
}
