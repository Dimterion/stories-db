import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Stories DB</span>
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Stories DB.
          </span>
        </div>

        <nav className="footer-links">
          <Link to="/" className="footer-link">
            Archive
          </Link>
          <Link to="/" className="footer-link">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
