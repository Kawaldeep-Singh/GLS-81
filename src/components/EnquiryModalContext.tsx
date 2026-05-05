import { createContext, useContext, useMemo, useState } from "react";
import { X, MapPin, Building2, ShieldCheck, CheckCircle2, Phone, Mail } from "lucide-react";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import "./EnquiryModalContext.css";

type EnquiryModalContextType = {
  openModal: (source?: string) => void;
  closeModal: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextType | null>(null);

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [source, setSource] = useState<string>("");
  useLockBodyScroll(open);

  const openModal = (from?: string) => {
    setSource(from || "");
    setStatus("idle");
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setStatus("idle");
  };

  const contextValue = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <EnquiryModalContext.Provider value={contextValue}>
      {children}

      {open && (
        <div className="enquiry-modal-backdrop" onClick={closeModal}>
          <div className="enquiry-modal-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="enquiry-modal-close" onClick={closeModal} aria-label="Close enquiry form">
              <X size={20} />
            </button>

            <div className="enquiry-modal-grid">
              <div className="enquiry-modal-left">
                <p className="enquiry-modal-kicker">Project Snapshot</p>
                <h3 className="enquiry-modal-title">GLS Avenue 81, Sector 81 Gurgaon</h3>

                <div className="enquiry-modal-points">
                  <div className="enquiry-modal-point">
                    <Building2 size={16} />
                    <span>Ready-to-move 2BHK and 2BHK+Study options</span>
                  </div>
                  <div className="enquiry-modal-point">
                    <ShieldCheck size={16} />
                    <span>Dedicated parking, clubhouse and security setup</span>
                  </div>
                  <div className="enquiry-modal-point">
                    <MapPin size={16} />
                    <span>Near NH-48 and Dwarka Expressway</span>
                  </div>
                </div>

                <div className="enquiry-modal-contact">
                  <p><Phone size={14} /> +91 9053608395</p>
                  <p><Mail size={14} /> info@glsavenue.in</p>
                </div>
              </div>

              <div className="enquiry-modal-right">
                {status === "success" ? (
                  <div className="enquiry-success">
                    <CheckCircle2 size={34} />
                    <h4>Request Submitted</h4>
                    <p>Our team will contact you shortly with project details.</p>
                  </div>
                ) : (
                  <>
                    <h4 className="enquiry-form-title">Get a Callback</h4>
                    <form className="enquiry-form" onSubmit={handleSubmit}>
                      <div className="enquiry-form-group">
                        <label htmlFor="enq-name">Name</label>
                        <input id="enq-name" type="text" required placeholder="Your full name" />
                      </div>
                      <div className="enquiry-form-group">
                        <label htmlFor="enq-phone">Phone</label>
                        <input id="enq-phone" type="tel" required placeholder="+91" />
                      </div>
                      <div className="enquiry-form-group">
                        <label htmlFor="enq-email">Email</label>
                        <input id="enq-email" type="email" required placeholder="you@example.com" />
                      </div>
                      <input type="hidden" value={source} name="lead_source" />
                      <button type="submit" className="enquiry-submit" disabled={status === "loading"}>
                        {status === "loading" ? "Submitting..." : "Submit"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  }
  return ctx;
}
