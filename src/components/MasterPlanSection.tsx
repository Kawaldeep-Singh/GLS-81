import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useEnquiryModal } from "./EnquiryModalContext";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import "./PlanSection.css";

export default function MasterPlanSection() {
  const { openModal } = useEnquiryModal();
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  return (
    <section id="master" className="plan-section plan-section-dark">
      <div className="container">
        <div className="plan-header">
          <span className="plan-subtitle">Complete Overview</span>
          <h2 className="section-heading plan-title plan-title-dark">Master Plan</h2>
          <p className="plan-description plan-description-dark">
            Master plan se project ka full zoning, circulation aur amenity
            placement clearly samajh aata hai. Is image ko click karke zoom me dekhen.
          </p>
        </div>

        <div className="plan-image-card">
          <button
            type="button"
            className="plan-image-btn"
            onClick={() => setOpen(true)}
            aria-label="Open master plan image"
          >
            <img src="/Site map.webp" alt="GLS Avenue 81 Master Plan" />
            <div className="plan-image-overlay">
              <div>
                <p className="plan-overlay-title">GLS Avenue 81 Master Plan</p>
                <p className="plan-overlay-hint">Click to open full image</p>
              </div>
              <div className="plan-overlay-icon">
                <ZoomIn size={18} />
              </div>
            </div>
          </button>
        </div>
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <button
            type="button"
            className="enquiry-trigger-btn"
            onClick={() => openModal("Master Plan Section CTA")}
          >
            Request Master Plan Callback
          </button>
        </div>
      </div>

      {open && (
        <div className="plan-lightbox" onClick={() => setOpen(false)}>
          <button
            type="button"
            className="plan-lightbox-close"
            onClick={() => setOpen(false)}
            aria-label="Close master plan"
          >
            <X size={20} />
          </button>
          <img
            src="/Site map.webp"
            alt="GLS Avenue 81 Master Plan Expanded"
            className="plan-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
