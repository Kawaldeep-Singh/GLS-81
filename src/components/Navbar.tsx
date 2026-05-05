import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useEnquiryModal } from "./EnquiryModalContext";
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
  { label: "Contact", href: "#contact" },

];

export default function Navbar() {
  const { openModal } = useEnquiryModal();
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
        <button type="button" className="navbar-cta" onClick={() => openModal("Navbar CTA")}>
          <Phone size={14} /> +91 9053608395
        </button>

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
          <button type="button" className="navbar-mobile-cta" onClick={() => { setMenuOpen(false); openModal("Navbar Mobile CTA"); }}>
            <Phone size={14} /> +91 9053608395
          </button>
        </nav>
      </div>
    </header>
  );
}
