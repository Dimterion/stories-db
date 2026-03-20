import FilterInput from "../components/FilterInput";
import LimitSelector from "../components/LimitSelector";
import SortSelector from "../components/SortSelector";
import StoryCard from "../components/StoryCard";

export default function HomePage({
  stories,
  filter,
  setFilter,
  limit,
  setLimit,
  limitOptions,
  sortBy,
  setSortBy,
  loading,
  error,
}) {
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
          options={limitOptions}
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
