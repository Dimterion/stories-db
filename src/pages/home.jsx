import Loader from "../components/Loader";
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
    })
    .slice(0, limit);

  return (
    <main className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <h1 className="home-hero-title">
          The Database of <br />
          <em>Stories</em>
        </h1>
        <p className="home-hero-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          voluptates!
        </p>
      </section>

      {/* Controls */}
      <section className="home-controls">
        <div className="home-controls-search">
          <FilterInput filter={filter} onFilterChange={setFilter} />
        </div>
        <div className="home-controls-right">
          <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
          <LimitSelector
            limit={limit}
            onLimitChange={setLimit}
            options={limitOptions}
          />
        </div>
      </section>

      {/* Stories */}
      {loading && <Loader />}
      {error && <p className="home-error">Error: {error}</p>}

      {!loading && !error && (
        <section className="home-grid">
          {filteredStories.length > 0 ? (
            filteredStories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))
          ) : (
            <p className="home-empty">No matching stories.</p>
          )}
        </section>
      )}
    </main>
  );
}
