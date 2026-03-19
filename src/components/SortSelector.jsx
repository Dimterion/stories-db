export default function SortSelector({ sortBy, onSortChange }) {
  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">Newest first</option>
        <option value="">Oldest first</option>
        <option value="">Alphabetical (A-Z)</option>
        <option value="">Alphabetical (Z-A)</option>
      </select>
    </div>
  );
}
