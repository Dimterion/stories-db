import { useState, useEffect } from "react";
import { fetchStories } from "./services/storyService";
import StoryCard from "./components/StoryCard";

export default function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadStories() {
      try {
        const data = await fetchStories();
        console.log(data);
        setStories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadStories();
  }, []);

  return (
    <main>
      <h1>Stories DB</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

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
