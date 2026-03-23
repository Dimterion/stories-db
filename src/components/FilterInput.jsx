export default function FilterInput({ filter, onFilterChange }) {
  return (
    <div className="filter-input-wrapper">
      <label htmlFor="filter" className="control-label">
        Search Stories
      </label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Filter by title..."
        className="filter-input"
      />
    </div>
  );
}
