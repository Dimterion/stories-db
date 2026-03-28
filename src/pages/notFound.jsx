import { Link } from "react-router";
import notFoundPageImg from "../assets/images/not-found-page.jpg";

export default function NotFoundPage() {
  return (
    <main className="notfound-page">
      <div className="notfound-grid">
        {/* Left: Image */}
        <div className="notfound-image-col">
          <div className="notfound-image-frame">
            <img src={notFoundPageImg} alt="An empty bookshelf" />
            <div className="notfound-image-overlay" />
          </div>
          <div className="notfound-badge">
            <span className="notfound-badge-number">404</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="notfound-content-col">
          <span className="notfound-label">Page does not exist</span>
          <h1 className="notfound-title">
            The page has <br />
            <em>wandered off.</em>
          </h1>

          <p className="notfound-subtitle">
            Please check the link you are trying to access, refresh the page, or
            come back later.
          </p>

          <div className="notfound-buttons">
            <Link to="/" className="notfound-btn notfound-btn--primary">
              Return to Home page
            </Link>
          </div>

          <div className="notfound-suggestions">
            <div className="notfound-suggestion-col">
              <h4 className="notfound-suggestion-heading">Lorem</h4>
              <ul>
                <li>
                  <Link to="/">Ipsum</Link>
                </li>
                <li>
                  <Link to="/">Dolor</Link>
                </li>
              </ul>
            </div>
            <div className="notfound-suggestion-col">
              <h4 className="notfound-suggestion-heading">Need Help?</h4>
              <ul>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Feedback</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
