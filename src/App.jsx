import { useState, useEffect } from "react";
import { fetchStories } from "./services/storyService";
import LimitSelector from "./components/LimitSelector";
import StoryCard from "./components/StoryCard";

export default function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    async function loadStories() {
      try {
        const data = await fetchStories(limit);
        setStories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadStories();
  }, [limit]);

  return (
    <main>
      <h1>Stories DB</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <LimitSelector limit={limit} onLimitChange={setLimit} />

      {!loading && !error && (
        <section>
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </section>
      )}
    </main>
  );
}
