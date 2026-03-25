import { Link } from "react-router";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Dimterion's Stories</span>
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Stories.
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
