import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchStory } from "../services/storyService";

export default function StoryPage() {
  const { id } = useParams();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadStory() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchStory(id);
        setStory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadStory();
  }, [id]);

  return (
    <main>
      <h1>{story ? story.title : "Story"}</h1>
      <Link to="/">Home</Link>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && !story && <p>Story not found.</p>}

      {!loading && !error && story && (
        <>
          {story.tags.map((tag, index) => (
            <pre key={index}>{tag}</pre>
          ))}
          <p>{story.date}</p>
          <p>{story.content}</p>
        </>
      )}
    </main>
  );
}
