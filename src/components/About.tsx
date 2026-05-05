import { CheckCircle } from "lucide-react";
import "./About.css";

export default function About() {
  const details = [
    ["License No.", "34 OF 2020"],
    ["HARERA No.", "10 of 2021"],
    ["Project Area", "5.6625 Acres"],
    ["Total Apartments", "820 Units"],
    ["No. of Towers", "5"],
    ["Status", "Ready to Move Resale"],
    ["Property Age", "Newly Delivered"],
  ];

  return (
    <section id="about" className="about-section">
      {/* Subtle background pattern */}
      <div className="about-bg-decor" />

      <div className="container relative">
        {/* Section Header */}
        <div className="about-header">
          <span className="about-subtitle">About the project</span>
          <h2 className="section-heading about-title">
            GLS Avenue 81
          </h2>
        </div>

        <div className="about-grid">
          {/* Left - Description with Image */}
          <div className="about-content-left">
            <div className="about-img-wrapper">
              <img
                src="/Home.webp"
                alt="GLS Avenue 81 Project View"
                className="about-img"
              />
            </div>
            <div className="about-text">
              <p>
                GLS Avenue 81 is one of the most well-planned residential societies in
                <strong> Sector 81, New Gurgaon</strong>. It's fully delivered and families are already enjoying the lifestyle here. Spread across 5.66 acres, this IGBC-certified green building is known for its open spaces and community feel.
              </p>
              <p>
                We have a few premium, ready-to-move 2BHK and 2BHK+Study apartments available for resale. These units range from 559 to 629 sq.ft. and are perfect for families looking to shift immediately without the hassle of construction delays.
              </p>
            </div>
          </div>

          {/* Right - Project Details */}
          <div className="about-content-right">
            <h3 className="about-highlights-title">
              <CheckCircle className="about-highlights-icon" size={22} />
              Project Highlights
            </h3>
            <div className="about-details-list">
              {details.map(([key, val]) => (
                <div key={key} className="about-detail-item">
                  <span className="about-detail-key">{key}</span>
                  <span className="about-detail-val">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
