export default function SortSelector({ sortBy, onSortChange }) {
  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="a-z">Alphabetical (A-Z)</option>
        <option value="z-a">Alphabetical (Z-A)</option>
      </select>
    </div>
  );
}
