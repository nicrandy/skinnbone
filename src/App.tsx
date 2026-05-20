import logo from '../images/skin n bone logo.png';

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <img src={logo} alt="Skin n Bone logo" className="brand-logo" />
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#offerings">Offerings</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Oddities & Faux Taxidermy</span>
          <h1>Curios for collectors, crafted with uncanny care.</h1>
          <p>
            Skin n Bone creates handcrafted faux taxidermy, sculpted oddities, and custom props for modern cabinets of curiosity.
            The banner image is the main branding anchor for the site.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button">Order a custom piece</a>
            <a href="#offerings" className="button button-outline">Explore the collection</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="logo-frame">
            <img src={logo} alt="Skin n Bone banner logo" className="hero-logo" />
          </div>
        </div>
      </main>

      <section id="about" className="content-block">
        <div className="section-heading">
          <p className="section-label">About</p>
          <h2>Curious craftsmanship for the uncanny collector.</h2>
        </div>
        <p className="section-copy">
          Our studio mixes custom faux taxidermy, sculpted oddities, and atmospheric props for retail, editorial, and immersive spaces.
          Every installation is designed to feel exotic, tactile, and unmistakably Skin n Bone.
        </p>
      </section>

      <section id="offerings" className="features-grid">
        <article className="feature-card">
          <h3>Faux taxidermy</h3>
          <p>Custom mounts and wall installations that look striking in any dark study or boutique gallery.</p>
        </article>
        <article className="feature-card">
          <h3>Cabinet curios</h3>
          <p>Skulls, preserved specimens, and cabinet curios designed to feel collectible and otherworldly.</p>
        </article>
        <article className="feature-card">
          <h3>Event props</h3>
          <p>One-of-a-kind props and set dressing for activations, photo shoots, and immersive events.</p>
        </article>
      </section>

      <footer id="contact" className="site-footer">
        <p>For commissions, collaborations, or custom orders, reach out and let's bring your curiosity cabinet to life.</p>
        <a href="mailto:hello@skinnbone.com" className="button button-outline">Contact Skin n Bone</a>
      </footer>
    </div>
  );
}

export default App;
