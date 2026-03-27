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
          <a
            href="https://www.dimterion.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
