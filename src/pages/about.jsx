import aboutPageImg from "../assets/images/about-page-img.jpg";

export default function AboutPage() {
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
            Maybe they are far from ideal, not quite polished, and has already
            been posted somewhere else, but sometimes you just need a bit of
            motivation to start doing something, like creating this site or
            writing stories. So here it is.
          </p>
        </div>

        <div className="about-hero-image-wrapper">
          <div className="about-hero-image-frame">
            <img
              src={aboutPageImg}
              alt="A circle with a signature."
            />
          </div>
          <div className="about-hero-badge">
            <p className="about-badge-number">10+</p>
            <p className="about-badge-label">Archived Works</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision">
        <div className="about-vision-heading">
          <h2>The Vision</h2>
        </div>
        <div className="about-vision-content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            ullam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            ullam.
          </p>

          <blockquote className="about-quote">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Obcaecati, ullam."
          </blockquote>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            ullam.
          </p>

          {/* Values Grid */}
          <div className="about-values">
            <div className="about-value-card">
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, ullam.
              </p>
            </div>
            <div className="about-value-card about-value-card--alt">
              <h3>Ipsum</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, ullam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
          ullam.
        </p>
        <div className="about-cta-buttons">
          <button className="about-cta-btn about-cta-btn--primary">
            Lorem
          </button>
          <button className="about-cta-btn about-cta-btn--outline">
            Ipsum
          </button>
        </div>
      </section>
    </main>
  );
}
