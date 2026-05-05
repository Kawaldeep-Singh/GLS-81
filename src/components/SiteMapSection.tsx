import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import "./PlanSection.css";

export default function SiteMapSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="sitemap" className="plan-section plan-section-light">
      <div className="container">
        <div className="plan-header">
          <span className="plan-subtitle">Project Layout</span>
          <h2 className="section-heading plan-title plan-title-light">Site Map</h2>
          <p className="plan-description plan-description-light">
            Explore the complete site map to understand the tower placement,
            internal roads, entry points, and open green pockets of GLS Avenue 81.
          </p>
        </div>

        <div className="plan-image-card">
          <button
            type="button"
            className="plan-image-btn"
            onClick={() => setOpen(true)}
            aria-label="Open site map image"
          >
            <img src="/Site.webp" alt="GLS Avenue 81 Site Map" />
            <div className="plan-image-overlay">
              <div>
                <p className="plan-overlay-title">GLS Avenue 81 Site Map</p>
                <p className="plan-overlay-hint">Click to open full image</p>
              </div>
              <div className="plan-overlay-icon">
                <ZoomIn size={18} />
              </div>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="plan-lightbox" onClick={() => setOpen(false)}>
          <button
            type="button"
            className="plan-lightbox-close"
            onClick={() => setOpen(false)}
            aria-label="Close site map"
          >
            <X size={20} />
          </button>
          <img
            src="/Site.webp"
            alt="GLS Avenue 81 Site Map Expanded"
            className="plan-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
