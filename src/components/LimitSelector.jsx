export default function LimitSelector({ limit, onLimitChange, options }) {
  return (
    <div className="control-group">
      <label className="control-label">Max displayed</label>
      <div className="limit-buttons">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onLimitChange(option)}
            className={`limit-btn ${limit === option ? "limit-btn--active" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
