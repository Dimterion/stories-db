import { useEffect, useState } from "react";
import { useParams } from "react-router";
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <h1>{story.title}</h1>
      <p>{story.date}</p>
    </main>
  );
}
