export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <span className="about-label">Stories DB</span>
          <h1 className="about-title">
            A collection of <em>stories</em> to read.
          </h1>
          <p className="about-subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            ullam.
          </p>
        </div>

        <div className="about-hero-image-wrapper">
          <div className="about-hero-image-frame">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-8K01jOIeqvTuWhpHr21vl5_7igkFN4GgImdp9-GhJnd3W7H4U3I1HgY8nzKBQGcNdzY_Ergm9sibkULGYIS1ms-Mk4EaNZ10XUEmSWu-fJRrLRYx5ZpRJbk2dxYrKGSM6rj-wsqZ8gS6yIyBbiKhuyd3o2g1lRh8_M9VkSLDYZq9DKbbxkB4X-ojK55trVpbaBh0Cy8d6tN5VeK78uasqj-X0IudnxED8l8o8x_urCXV489DPH_Q28PJemSyyAYubNt3R0PA073N"
              alt="Ancient books and a fountain pen on a desk"
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
