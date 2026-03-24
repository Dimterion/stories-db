export default function LimitSelector({ limit, onLimitChange, options }) {
  const labelId = "limit-selector-label";

  return (
    <div className="control-group" role="group" aria-labelledby={labelId}>
      <span id={labelId} className="control-label">
        Max displayed
      </span>
      <div className="limit-buttons">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onLimitChange(option)}
            aria-pressed={limit === option}
            className={`limit-btn ${limit === option ? "limit-btn--active" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
