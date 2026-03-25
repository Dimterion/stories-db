export default function FilterInput({ filter, onFilterChange }) {
  return (
    <div className="filter-input-wrapper">
      <label htmlFor="filter" className="control-label">
        Search Stories
      </label>
      <div className="filter-input-row">
        <input
          id="filter"
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="Search by title..."
          className="filter-input"
        />
        {filter && (
          <button
            className="filter-clear-btn"
            onClick={() => onFilterChange("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
