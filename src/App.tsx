import { useEffect, useMemo, useState } from 'react';
import logo from '../images/skin n bone logo.png';
import metallicLogo from '../images/skin n bone metalic logo.png';

const productImages = import.meta.glob('../images/product_images/*.{png,jpg,jpeg,gif,webp}', { eager: true, import: 'default' });

const upcomingEvents = [
  { title: 'Big Sky Ren Faire', location: 'Big Sky, MT', date: 'May 23 - 25' },
  { title: 'Billings Ren Fest', location: 'Billings, MT', date: 'June 6 - 7' },
  { title: 'Wonderwood', location: 'Sheridan, WY', date: 'July 24 - 26' },
  { title: 'Artist in residence', location: 'Ednis K Wilkins State Park, WY', date: 'July 29 - August 1' },
  { title: 'Red Lodge Ren Faire', location: 'Red Lodge, MT', date: 'August 1 - 2' },
  { title: 'Forget-Me-Knot Music Festival', location: 'Cooke City, MT', date: 'August 14 - 15' },
  { title: 'Bozeman Ren Fest', location: 'Bozeman, MT', date: 'August 22 - 23' },
  { title: 'All-Hallows', location: 'Billings, MT', date: 'October 3 - 4' },
  { title: 'Spokane Ren Faire', location: 'Spokane, WA', date: 'October 3 - 4' },
  { title: 'Yule-Aissance', location: 'Billings, MT', date: 'December 13 - 14' },
];

function App() {
  const images = useMemo(
    () => Object.values(productImages).filter(Boolean) as string[],
    []
  );
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return undefined;
    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <img src={logo} alt="Skin n Bone logo" className="brand-logo" />
        <div className="social-links">
          <a href="https://www.facebook.com/skinnboneoddities" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/skin_n_bone__/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@skinnboneoddities" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Oddities & Faux Taxidermy</span>
            <h1>Curios for collectors, crafted with uncanny care.</h1>
            <p>
              Skin n Bone creates handcrafted faux taxidermy, oddities, bats, beetles, custom guitars, jackalopes, earrings and custom props.
              The product carousel shows recent work and new drops.
            </p>
          </div>
          <div className="hero-image">
            <img src={metallicLogo} alt="Skin n Bone metallic logo" className="metallic-logo" />
          </div>
        </div>
      </main>

      <section className="carousel-section">
        <div className="slider-container">
          <button
            className="slider-button slider-button-prev"
            onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
            aria-label="Previous image"
          >
            ←
          </button>
          <div className="slider-frame">
            {images.length ? (
              <img src={images[current]} alt={`Product ${current + 1}`} className="slide-image" />
            ) : (
              <div className="slide-placeholder">No product images found</div>
            )}
          </div>
          <button
            className="slider-button slider-button-next"
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </section>

      <section className="upcoming-section">
        <div className="section-heading">
          <p className="section-label">Upcoming Events</p>
          <h2>Where Skin n Bone will be showing next</h2>
        </div>
        <div className="event-grid">
          {upcomingEvents.map((event) => (
            <article key={event.title} className="event-card">
              <h3>{event.title}</h3>
              <p className="event-location">{event.location}</p>
              <p className="event-date">{event.date}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>Follow us for new drops, commissions, and rare oddities.</p>
        <div className="social-links footer-links">
          <a href="https://www.facebook.com/skinnboneoddities" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/skin_n_bone__/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@skinnboneoddities" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
