import { Link } from "react-router";
import { useMetadata } from "../services/hooks";
import aboutPageImg from "../assets/images/about-page-img.jpg";

export default function AboutPage({ stories = [] }) {
  useMetadata({
    title: "About | Stories",
    description:
      "Learn more about Dimterion and the stories written on this site.",
  });

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <span className="about-label">Dimterion's Stories</span>
          <h1 className="about-title">
            A collection of <em>stories</em> written by me.
          </h1>
          <p className="about-subtitle">
            I've made this little site to store various stories that I wrote.
            They may be far from ideal, not quite polished, and already posted
            somewhere else, but sometimes you just need a bit of motivation to
            start doing something, like creating this site or writing stories.
            So here it is.
          </p>
        </div>

        <div className="about-hero-image-wrapper">
          <div className="about-hero-image-frame">
            <img src={aboutPageImg} alt="A circle with a signature." />
          </div>
          <Link to="/" className="about-hero-badge">
            <p className="about-badge-number">{stories.length}</p>
            <p className="about-badge-label">Stories to read</p>
          </Link>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision">
        <div className="about-vision-heading">
          <h2>About me</h2>
        </div>
        <div className="about-vision-content">
          <p>I'm a developer who likes writing both code and stories.</p>
          <p>
            Combining these couple of passions of mine, I do both every day for
            several years already.
          </p>

          <blockquote className="about-quote">
            This site stores all kinds of stories of various genres and topics
            like a tiny library. <Link to="/">Take a look.</Link>
          </blockquote>

          <p>
            I also have a blog on Medium, where I write every Friday about
            programming and development in general.
          </p>

          {/* Values Grid */}
          <div className="about-values">
            <div className="about-value-card">
              <h3>Medium blog</h3>
              <p>
                Here is a link to my{" "}
                <a
                  href="https://medium.com/@dimterion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium blog
                </a>{" "}
                (200+ posts; tech, web development, and coding-related content
                mostly).
              </p>
            </div>
            <div className="about-value-card about-value-card--alt">
              <h3>Questions?</h3>
              <p>
                You can contact me via{" "}
                <a
                  href="https://www.dimterion.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this form
                </a>{" "}
                (or, frankly, anywhere you want throughout my profiles; see
                links below).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Contacts</h2>
        <p>Visit my main site or view my other profiles.</p>
        <div className="about-cta-buttons">
          <a
            href="https://www.dimterion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta-btn about-cta-btn--primary"
          >
            Personal Site
          </a>
          <a
            href="https://linktr.ee/dimterion"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta-btn about-cta-btn--outline"
          >
            Profile links
          </a>
        </div>
      </section>
    </main>
  );
}
