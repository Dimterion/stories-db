import { useState, useEffect } from "react";
import { fetchStories } from "./services/storyService";
import FilterInput from "./components/FilterInput";
import LimitSelector from "./components/LimitSelector";
import SortSelector from "./components/SortSelector";
import StoryCard from "./components/StoryCard";

const LIMIT_OPTIONS = [4, 8, 16];

export default function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(4);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("newest");

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

  const filteredStories = stories
    .filter((story) => story.title.toLowerCase().includes(filter.toLowerCase()))
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "a-z":
          return a.title.localeCompare(b.title);
        case "z-a":
          return b.title.localeCompare(a.title);
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        default:
          return 0;
      }
    });

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
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
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
