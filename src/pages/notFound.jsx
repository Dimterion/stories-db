import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="notfound-page">
      <div className="notfound-grid">
        {/* Left: Image */}
        <div className="notfound-image-col">
          <div className="notfound-image-frame">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGf4dfn7KeoM4AEn6T-TlXjqloFklAEludRuvP-zjqAVrrL0TQ_lzUfVWJMcMBKxPYZDPCXr59duRqJxpryRiKdoK9mGHfsJPTlFr20T1Df9YlNNwJNLU54rXsf7UshcZozAZe8A2ZYcnXtQtpXmNb2rLPyL-wGJl_KWGCFTkBR_3jLoxHSFBScksRXj1Ju8BytsHFZ7akTSUNpub8xMTMsFV6tBc2qjTjkrooElR_HODGdR7ajYIYPaHzqgetgJx6pGa963gWeg_F"
              alt="An old library shelf with a single missing book"
            />
            <div className="notfound-image-overlay" />
          </div>
          <div className="notfound-badge">
            <span className="notfound-badge-number">404</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="notfound-content-col">
          <span className="notfound-label">Database Entry Missing</span>
          <h1 className="notfound-title">
            The page has <br />
            <em>wandered off.</em>
          </h1>

          <p className="notfound-subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            ullam.
          </p>

          <div className="notfound-buttons">
            <Link to="/" className="notfound-btn notfound-btn--primary">
              Return to Homepage
            </Link>
            <Link to="/" className="notfound-btn notfound-btn--secondary">
              Search Stories
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
