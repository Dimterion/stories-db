export default function Loader({ size = "md" }) {
  return (
    <div
      className={`loader loader--${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="loader-spinner" />
    </div>
  );
}
