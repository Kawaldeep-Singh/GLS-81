import { CheckCircle2, Landmark, ShieldCheck, Banknote } from "lucide-react";
import { useEnquiryModal } from "./EnquiryModalContext";
import "./PaymentPlan.css";

const benefits = [
  { icon: <Landmark size={24} />, title: "Approved by Leading Banks", desc: "Easy loan approvals from major nationalized and private banks." },
  { icon: <ShieldCheck size={24} />, title: "Hassle-Free Processing", desc: "Our team assists you with all documentation and bank coordination." },
  { icon: <Banknote size={24} />, title: "High Loan-to-Value (LTV)", desc: "Get up to 80-90% home loan funding based on your eligibility." },
];

export default function PaymentPlan() {
  const { openModal } = useEnquiryModal();

  return (
    <section id="payment" className="payment-section">
      <div className="container">
        {/* Section Header */}
        <div className="payment-header">
          <span className="payment-subtitle">Financial Assistance</span>
          <h2 className="section-heading payment-title">
            Home Loan Facilities
          </h2>
        </div>

        {/* Loan Benefits */}
        <div className="loan-benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="loan-benefit-card group">
              <div className="loan-icon-wrapper">
                {b.icon}
              </div>
              <h3 className="loan-title">{b.title}</h3>
              <p className="loan-desc">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="payment-summary">
          <p className="payment-summary-label">Need help with financing?</p>
          <p className="payment-summary-value">We make buying a home easy.</p>
          <p className="payment-summary-note">Contact our experts today to calculate your EMI and check your loan eligibility.</p>
          
          <div style={{ marginTop: "1.5rem" }}>
            <button
              type="button"
              onClick={() => openModal("Payment Plan CTA")}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "var(--color-white)", color: "var(--color-orange-600)", padding: "0.75rem 1.5rem", borderRadius: "9999px", fontWeight: 700, fontSize: "0.875rem" }}
            >
               Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
