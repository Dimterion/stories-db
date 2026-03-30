import { Link } from "react-router";
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
  onLoadMore,
  loading,
  error,
}) {
  const allFilteredStories = stories
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
  const visibleStories = allFilteredStories.slice(0, limit);
  const hasMore = limit < allFilteredStories.length;

  return (
    <main className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <h1 className="home-hero-title">
          A collection of
          <br />
          <em>Stories</em>
        </h1>
        <p className="home-hero-subtitle">
          Hi! Thanks for visiting. If you want to check some of the stories I've
          written, take a look at the list below. For more information or links
          visit the <Link to="/about">About</Link> page.
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
        <>
          <section className="home-grid">
            {visibleStories.length > 0 ? (
              visibleStories.map((story, index) => (
                <StoryCard key={story.id} story={story} index={index} />
              ))
            ) : (
              <p className="home-empty">No matching stories.</p>
            )}
          </section>
          {/* Load More */}
          {hasMore && (
            <div className="home-load-more">
              <button onClick={onLoadMore} className="load-more-btn">
                Load More Stories
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
