import { useState, useEffect } from "react";
import { fetchStories } from "./services/storyService";
import FilterInput from "./components/FilterInput";
import LimitSelector from "./components/LimitSelector";
import StoryCard from "./components/StoryCard";

const LIMIT_OPTIONS = [4, 8, 16];

export default function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(4);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function loadStories() {
      setLoading(true);
      setError(null);

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

  // TO-DO: if limit should be applied to all available results (not only to the currently displayed ones), move it out of the useEffect and use: const filteredStories = stories.filter((story) => story.title.toLowerCase().includes(filter.toLowerCase())).slice(0, limit);

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <main>
      <h1>Stories DB</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <section>
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector
          limit={limit}
          onLimitChange={setLimit}
          options={LIMIT_OPTIONS}
        />
      </section>

      {!loading && !error && (
        <section>
          {filteredStories.length > 0 ? (
            filteredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))
          ) : (
            <p>No matching stories.</p>
          )}
        </section>
      )}
    </main>
  );
}
