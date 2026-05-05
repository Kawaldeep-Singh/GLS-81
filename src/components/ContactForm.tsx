import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import "./ContactForm.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container relative">
        <div className="contact-header">
          <span className="contact-subtitle">Get in touch</span>
          <h2 className="section-heading contact-title">Book Your Dream Home</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-col">
            <div className="contact-info-card-primary">
              <h3 className="contact-info-title">Ambar Estates and Consultant</h3>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <MapPin size={20} className="contact-info-icon" />
                  <p className="contact-info-text">
                    GLS Avenue 81, Sector 81,
                    <br />
                    New Gurgaon, Haryana
                  </p>
                </div>
                <div className="contact-info-item">
                  <Phone size={20} className="contact-info-icon" />
                  <a href="tel:+919053608395" className="contact-info-link">+91 9053608395</a>
                </div>
                <div className="contact-info-item">
                  <Mail size={20} className="contact-info-icon" />
                  <a href="mailto:info@glsavenue.in" className="contact-info-link">info@glsavenue.in</a>
                </div>
              </div>
            </div>

            <div className="contact-info-card-secondary">
              <h3 className="contact-info-subtitle">Why Contact Us?</h3>
              <div className="contact-benefits-list">
                {[
                  "Free site visit assistance",
                  "Latest inventory and best-fit unit guidance",
                  "Home-loan and PMAY support",
                ].map((item) => (
                  <div key={item} className="contact-benefit-item">
                    <CheckCircle2 size={16} className="contact-benefit-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            {status === "success" ? (
              <div className="contact-success">
                <div className="contact-success-icon-wrapper">
                  <CheckCircle2 size={32} className="contact-success-icon" />
                </div>
                <h3 className="contact-success-title">Request Sent Successfully</h3>
                <p className="contact-success-desc">
                  Thank you. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Enquiry Form</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-form-label" htmlFor="name">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="contact-form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label className="contact-form-label" htmlFor="phone">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className="contact-form-input"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="contact-form-input"
                      placeholder="you@example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="contact-form-submit"
                  >
                    {status === "loading" ? "Submitting..." : "Request Callback"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
