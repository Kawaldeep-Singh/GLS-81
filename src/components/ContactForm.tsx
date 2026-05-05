import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle2, Clock } from "lucide-react";
import "./ContactForm.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container relative">
        {/* Section Header */}
        <div className="contact-header">
          <span className="contact-subtitle">Get in touch</span>
          <h2 className="section-heading contact-title">
            Book Your Dream Home
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left - Contact Info */}
          <div className="contact-info-col">
            {/* Primary Info Card */}
            <div className="contact-info-card-primary">
              <h3 className="contact-info-title">Ambar Estates and Consultant</h3>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <MapPin size={20} className="contact-info-icon" />
                  <p className="contact-info-text">
                    Managed by Kawaldeep Singh
                    <br />
                    GLS Avenue 81, Sector 81,
                    <br />
                    New Gurgaon, Haryana
                  </p>
                </div>
                <div className="contact-info-item">
                  <Phone size={20} className="contact-info-icon" />
                  <div className="contact-info-text">
                    <a href="tel:+919053608395" className="contact-info-link">
                      +91 9053608395
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <Mail size={20} className="contact-info-icon" />
                  <div className="contact-info-text">
                    <a href="mailto:info@glsavenue.in" className="contact-info-link">
                      info@glsavenue.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Info Card */}
            <div className="contact-info-card-secondary">
              <h3 className="contact-info-subtitle">Why Contact Us?</h3>
              <div className="contact-benefits-list">
                {[
                  "Free site visit assistance",
                  "Detailed floor plan walkthroughs",
                  "Home loan & financing guidance",
                  "PMAY subsidy consultation",
                ].map((item, i) => (
                  <div key={i} className="contact-benefit-item">
                    <CheckCircle2 size={16} className="contact-benefit-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-col">
            {status === "success" ? (
              <div className="contact-success">
                <div className="contact-success-icon-wrapper">
                  <CheckCircle2 size={32} className="contact-success-icon" />
                </div>
                <h3 className="contact-success-title">Message Sent Successfully!</h3>
                <p className="contact-success-desc">
                  Thank you for your interest in GLS Avenue 81. Our real estate expert will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Send a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-form-label" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="contact-form-input"
                        placeholder="Kawaldeep Singh"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label className="contact-form-label" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className="contact-form-input"
                        placeholder="+91 9053608395"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="contact-form-input"
                      placeholder="kawaldeep@gmail.com"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="contact-form-input contact-form-textarea"
                      placeholder="I am interested in a 2BHK+Study apartment..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="contact-form-submit"
                  >
                    {status === "loading" ? (
                      <>
                        <Clock className="animate-spin" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
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
