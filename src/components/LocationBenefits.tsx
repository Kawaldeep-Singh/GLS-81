import {
  Plane,
  TrainFront,
  Route,
  Briefcase,
  Factory,
  RotateCcw,
  TrafficCone,
  GraduationCap,
  Hospital,
  Bus,
} from "lucide-react";
import "./LocationBenefits.css";

// Categorized benefits for better visual grouping
const transportBenefits = [
  { icon: <Plane size={18} />, text: "IGI Airport", time: "35 min drive", colorClass: "transport" },
  { icon: <TrainFront size={18} />, text: "Upcoming Metro Station", time: "4 min walk", colorClass: "transport" },
  { icon: <Bus size={18} />, text: "ISBT & Railway Station", time: "Nearby", colorClass: "transport" },
];

const roadBenefits = [
  { icon: <Route size={18} />, text: "NH-8 Highway Access", time: "2 min drive", colorClass: "road" },
  { icon: <TrafficCone size={18} />, text: "Dwarka Expressway", time: "3 min drive", colorClass: "road" },
  { icon: <RotateCcw size={18} />, text: "Rajiv Chowk", time: "10 min drive", colorClass: "road" },
];

const workBenefits = [
  { icon: <Briefcase size={18} />, text: "DLF Cyber City", time: "15 min drive", colorClass: "work" },
  { icon: <Factory size={18} />, text: "IMT Manesar", time: "9 min drive", colorClass: "work" },
];

const civicBenefits = [
  { icon: <GraduationCap size={18} />, text: "Dronacharya & Shishu Kalyan Schools", time: "Nearby", colorClass: "civic" },
  { icon: <Hospital size={18} />, text: "Jaipur Golden Govt. Hospital", time: "Nearby", colorClass: "civic" },
];

interface Benefit {
  icon: React.ReactNode;
  text: string;
  time: string;
  colorClass: string;
}

function BenefitGrid({ items }: { items: Benefit[] }) {
  return (
    <div className="location-benefits-grid">
      {items.map((b, i) => (
        <div key={i} className="location-benefit-card">
          <div className={`location-benefit-icon ${b.colorClass}`}>
            {b.icon}
          </div>
          <div className="location-benefit-info">
            <p className="location-benefit-text">{b.text}</p>
            {b.time && <p className="location-benefit-time">{b.time}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LocationBenefits() {
  return (
    <section id="location" className="location-section">
      {/* Background glows */}
      <div className="location-bg-glow-1" />
      <div className="location-bg-glow-2" />

      <div className="container relative">
        {/* Section Header */}
        <div className="location-header">
          <span className="location-subtitle">Prime connectivity</span>
          <h2 className="section-heading location-title" style={{ color: "white" }}>
            Location Advantages
          </h2>
          <div className="location-title-underline" />
          <p className="location-header-desc">
            GLS Avenue 81 sits at the crossroads of Gurgaon's key transport hubs. Whether it's your daily commute or a weekend getaway, everything is within reach.
          </p>
        </div>

        {/* Hero Image Banner */}
        <div className="location-hero-banner">
          <img
            src="/Site.webp"
            alt="GLS Avenue 81 Location Map"
            className="location-hero-img"
          />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <div className="location-hero-address">
              <span className="location-hero-pin">📍 Sector 81, New Gurgaon</span>
              <span className="location-hero-sub">Near NH-8 & Dwarka Expressway</span>
            </div>
            <div className="location-hero-tags">
              <span className="location-hero-tag">RERA Registered</span>
              <span className="location-hero-tag">Ready to Move</span>
              <span className="location-hero-tag">5 Towers</span>
            </div>
          </div>
        </div>

        {/* Categorized Benefits */}
        <div className="location-category-group">
          <div className="location-category-label">🚌 Transport & Metro</div>
          <BenefitGrid items={transportBenefits} />
        </div>

        <div className="location-category-group">
          <div className="location-category-label">🛣️ Roads & Expressways</div>
          <BenefitGrid items={roadBenefits} />
        </div>

        <div className="location-category-group">
          <div className="location-category-label">🏢 Work & Industry Hubs</div>
          <BenefitGrid items={workBenefits} />
        </div>

        <div className="location-category-group">
          <div className="location-category-label">🏫 Schools & Hospitals</div>
          <BenefitGrid items={civicBenefits} />
        </div>
      </div>
    </section>
  );
}
