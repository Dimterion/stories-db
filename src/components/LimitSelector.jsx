export default function LimitSelector({ limit, onLimitChange }) {
  return (
    <div>
      <label htmlFor="limit">Show: </label>
      <select
        value={limit}
        id="limit"
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={16}>16</option>
      </select>
    </div>
  );
}
