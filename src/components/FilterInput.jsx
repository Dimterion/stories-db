export default function FilterInput({ filter, onFilterChange }) {
  return (
    <div>
      <input
        type="text"
        value={filter}
        placeholder="Filter stories by name"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}
