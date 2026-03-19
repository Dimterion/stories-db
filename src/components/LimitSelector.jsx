export default function LimitSelector({ limit, onLimitChange, options }) {
  return (
    <div>
      <label htmlFor="limit">Show: </label>
      <select
        value={limit}
        id="limit"
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
