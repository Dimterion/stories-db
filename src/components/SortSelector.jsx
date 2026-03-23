export default function SortSelector({ sortBy, onSortChange }) {
  return (
    <div className="control-group">
      <label htmlFor="sort" className="control-label">
        Sort By
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="control-select"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="a-z">A–Z</option>
        <option value="z-a">Z–A</option>
      </select>
    </div>
  );
}
