import { ArrowRight, MapPin, Building2, Shield, Home } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div className="hero-bg-wrapper">
        <img
          src="/heroe.webp"
          alt="GLS Avenue 81 Building"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* Floating decorative elements */}
      <div className="hero-decor-1" />
      <div className="hero-decor-2" />

      {/* Content */}
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Ready to Move Resale Units
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          GLS Avenue
          <span className="hero-title-highlight">
            81
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="hero-subtitle">
          Premium 2BHK & 2BHK+Study Homes in Sector 81, Gurgaon
        </h2>

        <p className="hero-desc">
          Looking for a ready-to-move apartment in New Gurgaon? GLS Avenue 81 offers an established community near NH-8 with excellent connectivity.
          <br />
          Resale starting from <span className="hero-desc-price">₹70 Lakh*</span>
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <a href="#contact" className="hero-btn-primary group">
            Get Callback
            <ArrowRight size={18} className="hero-btn-icon" />
          </a>
          <a href="#price" className="hero-btn-secondary">
            View Price List
          </a>
        </div>

        {/* Stats Row */}
        <div className="hero-stats">
          {[
            { icon: <Home size={20} />, label: "Size Range", value: "559–629 Sq.Ft." },
            { icon: <Building2 size={20} />, label: "Configuration", value: "2BHK + Study" },
            { icon: <Shield size={20} />, label: "RERA No.", value: "10 OF 2021" },
            { icon: <MapPin size={20} />, label: "Towers", value: "5 Towers" },
          ].map((item) => (
            <div key={item.label} className="hero-stat-card">
              <div className="hero-stat-icon">
                {item.icon}
              </div>
              <p className="hero-stat-value">{item.value}</p>
              <p className="hero-stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="hero-bottom-gradient" />
    </section>
  );
}
