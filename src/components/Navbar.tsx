import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Site Map", href: "#sitemap" },
  { label: "Master", href: "#master" },
  { label: "Price", href: "#price" },
  { label: "Location", href: "#location" },

];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolledClass = scrolled ? "scrolled" : "";

  return (
    <header className={`navbar-header ${scrolledClass}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className={`navbar-logo-box ${scrolledClass}`}>
            GLS
          </div>
          <div>
            <h1 className={`navbar-title ${scrolledClass}`}>
              Avenue 81
            </h1>
            <p className={`navbar-subtitle ${scrolledClass}`}>
              Sector 81, Gurgaon
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar-link ${scrolledClass}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a href="tel:+919053608395" className="navbar-cta">
          <Phone size={14} /> +91 9053608395
        </a>

        {/* Mobile menu button */}
        <button
          className={`navbar-mobile-toggle ${scrolledClass}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="navbar-mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="navbar-mobile-link"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+919053608395" className="navbar-mobile-cta">
            <Phone size={14} /> +91 9053608395
          </a>
        </nav>
      </div>
    </header>
  );
}
