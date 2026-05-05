import {
  Waves,
  PersonStanding,
  ParkingCircle,
  ArrowUpFromDot,
  Cctv,
  Trees,
  Building2,
  Baby,
  Target,
  ShoppingBag,
  ShieldCheck,
  BatteryCharging,
} from "lucide-react";
import { useEnquiryModal } from "./EnquiryModalContext";
import "./Amenities.css";

const amenities = [
  {
    icon: <ParkingCircle size={28} />,
    label: "Dedicated Car Parking",
    detail: "A standout differentiator in Gurgaon's affordable housing segment.",
    colorClass: "grad-gray",
  },
  {
    icon: <Trees size={28} />,
    label: "50% Open + 30% Green Area",
    detail: "Large breathing spaces with planned greenery.",
    colorClass: "grad-lime",
  },
  {
    icon: <Building2 size={28} />,
    label: "Functional Clubhouse",
    detail: "A fully functional clubhouse with an active community hall.",
    colorClass: "grad-teal",
  },
  {
    icon: <Waves size={28} />,
    label: "Sports & Fitness Zone",
    detail: "Swimming pool, jogging track, yoga lawn and court.",
    colorClass: "grad-blue",
  },
  {
    icon: <Baby size={28} />,
    label: "Kids Zone + Daycare",
    detail: "Children play area with creche/daycare support.",
    colorClass: "grad-pink",
  },
  {
    icon: <ShieldCheck size={28} />,
    label: "24/7 Gated Security",
    detail: "CCTV surveillance and round-the-clock guards.",
    colorClass: "grad-orange",
  },
  {
    icon: <BatteryCharging size={28} />,
    label: "100% Power Backup",
    detail: "High-speed lifts and air purification plants included.",
    colorClass: "grad-indigo",
  },
  {
    icon: <ShoppingBag size={28} />,
    label: "Daily Needs Convenience",
    detail: "In-campus retail shops and commercial provision.",
    colorClass: "grad-violet",
  },
  {
    icon: <ArrowUpFromDot size={28} />,
    label: "High-Speed Lifts",
    detail: "Smooth vertical connectivity across towers.",
    colorClass: "grad-red",
  },
  {
    icon: <Cctv size={28} />,
    label: "Digital Surveillance",
    detail: "24x7 monitored CCTV network in common areas.",
    colorClass: "grad-green",
  },
  {
    icon: <Target size={28} />,
    label: "Multipurpose Court",
    detail: "Designed for tennis and badminton activities.",
    colorClass: "grad-yellow",
  },
  {
    icon: <PersonStanding size={28} />,
    label: "Yoga Lawn & Jogging Track",
    detail: "Wellness-focused open movement spaces.",
    colorClass: "grad-purple",
  },
];

export default function Amenities() {
  const { openModal } = useEnquiryModal();

  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        <div className="amenities-header">
          <span className="amenities-subtitle">Lifestyle Infrastructure</span>
          <h2 className="section-heading amenities-title">
            Actual Amenities
          </h2>
          <p className="amenities-desc">
            GLS Avenue 81 is designed for modern family living, bringing daily
            comfort, security, greenery, and convenience into one integrated campus.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <button
              type="button"
              className="enquiry-trigger-btn"
              onClick={() => openModal("Amenities Section CTA")}
            >
              Enquire for Amenities
            </button>
          </div>
        </div>

        <div className="amenities-grid">
          {amenities.map((a) => (
            <div key={a.label} className="amenity-card group">
              <div className={`amenity-icon-wrapper ${a.colorClass}`}>
                {a.icon}
              </div>
              <p className="amenity-label">{a.label}</p>
              <p className="amenity-detail">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
