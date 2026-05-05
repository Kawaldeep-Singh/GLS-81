import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top-gradient" />

      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Brand Col */}
            <div className="footer-col">
              <a href="#home" className="footer-logo">
                GLS Avenue <span className="footer-logo-highlight">81</span>
              </a>
              <p className="footer-desc">
                Premium affordable housing in the heart of New Gurgaon. Designed for modern living with world-class amenities and unparalleled connectivity.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-links">
                <a href="#home" className="footer-link">Home</a>
                <a href="#about" className="footer-link">About Project</a>
                <a href="#features" className="footer-link">Key Features</a>
                <a href="#gallery" className="footer-link">Gallery</a>
                <a href="#price" className="footer-link">Price List</a>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-title">Contact Us</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <MapPin size={18} className="footer-contact-icon" />
                  <span>Sector 81, New Gurgaon, Haryana</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={18} className="footer-contact-icon" />
                  <a href="tel:+919053608395" className="footer-link">+91 9053608395</a>
                </div>
                <div className="footer-contact-item">
                  <Mail size={18} className="footer-contact-icon" />
                  <a href="mailto:info@glsavenue.in" className="footer-link">info@glsavenue.in</a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="footer-col">
              <h4 className="footer-title">Ready to Visit?</h4>
              <p className="footer-cta-text">
                Schedule a free site visit today and get complete details about the project.
              </p>
              <a href="tel:+919053608395" className="footer-cta-btn">
                Call Now
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} GLS Avenue 81. All rights reserved. RERA Reg No: 10 OF 2021.
            <br />
            Marketed by  - <b>Ambar Estates and Consultant </b>
          </p>
          <p className="footer-copyright" style={{ marginTop: "0.5rem" }}>
            Website managed by{" "}
            <a
              href="https://www.turbandigitalstudio.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-orange-400)", textDecoration: "underline" }}
            >
              Turban Digital Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
