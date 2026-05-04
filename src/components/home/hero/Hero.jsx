import Button from "../../ui/Button/Button";
import "./hero.css";

import heroImage from "assets/hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero-info">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <div className="hero-text">
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <Button cls="hero-button" variant="primary" to="bookings">
            Reserve a table
          </Button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Little Lemon" className="hero-image__img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
