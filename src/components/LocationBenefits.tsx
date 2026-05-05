import { useState } from "react";
import {
  Bus,
  School,
  Hospital,
  ShoppingBag,
  Factory,
  X,
  ZoomIn,
} from "lucide-react";
import "./LocationBenefits.css";

const locationGroups = [
  {
    title: "Connectivity and Metro",
    icon: <Bus size={18} />,
    colorClass: "transport",
    items: [
      { place: "Dwarka Expressway", distance: "2-3 km", note: "Fast access to Delhi and IGI Airport." },
      { place: "NH-48 (Delhi-Jaipur Highway)", distance: "3-5 km", note: "Approx. 5 minutes drive." },
      { place: "Huda City Centre Metro (Yellow Line)", distance: "14-15 km", note: "Sector side proposed metro site nearby." },
      { place: "Pataudi Road", distance: "Approx. 1 km", note: "Quick internal city linkage." },
    ],
  },
  {
    title: "Schools and Education Hub",
    icon: <School size={18} />,
    colorClass: "civic",
    items: [
      { place: "St. Xavier's High School", distance: "Approx. 1.4 km", note: "Around 3 minutes." },
      { place: "Delhi Public School, Sector 84", distance: "Approx. 3.6 km", note: "" },
      { place: "MatriKiran High School", distance: "Approx. 2.5 km", note: "" },
      { place: "Dronacharya Public School", distance: "Approx. 2 km", note: "" },
    ],
  },
  {
    title: "Healthcare and Hospitals",
    icon: <Hospital size={18} />,
    colorClass: "work",
    items: [
      { place: "Miracles Apollo Spectra Hospital, Sector 82", distance: "Approx. 2.3 km", note: "Around 5 minutes." },
      { place: "Silver Streak Hospital", distance: "Approx. 3 km", note: "" },
      { place: "Medeor Hospital, Manesar", distance: "Approx. 5.5 km", note: "" },
    ],
  },
  {
    title: "Malls and Entertainment",
    icon: <ShoppingBag size={18} />,
    colorClass: "road",
    items: [
      { place: "Vatika Town Square-INXT", distance: "Approx. 2.5 km", note: "" },
      { place: "Sapphire 83 Mall", distance: "Approx. 3 km", note: "" },
      { place: "Iris Broadway, Sector 85", distance: "Approx. 4 km", note: "" },
      { place: "Hyatt Regency Gurgaon", distance: "Approx. 5.6 km", note: "" },
    ],
  },
  {
    title: "Industrial and Employment Hub",
    icon: <Factory size={18} />,
    colorClass: "transport",
    items: [
      { place: "IMT Manesar", distance: "5-7 minutes drive", note: "Excellent for working professionals." },
    ],
  },
];

interface DistanceItem {
  place: string;
  distance: string;
  note: string;
}

function DistanceGrid({ items, colorClass }: { items: DistanceItem[]; colorClass: string }) {
  return (
    <div className="location-benefits-grid">
      {items.map((item) => (
        <div key={item.place} className="location-benefit-card">
          <div className={`location-benefit-icon ${colorClass}`}>
            <span>{item.distance}</span>
          </div>
          <div className="location-benefit-info">
            <p className="location-benefit-text">{item.place}</p>
            {item.note ? <p className="location-benefit-note">{item.note}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LocationBenefits() {
  const [open, setOpen] = useState(false);

  return (
    <section id="location" className="location-section">
      <div className="location-bg-glow-1" />
      <div className="location-bg-glow-2" />

      <div className="container relative">
        <div className="location-header">
          <span className="location-subtitle">Location and Connectivity</span>
          <h2 className="section-heading location-title" style={{ color: "white" }}>
            Nearby Distances and Access
          </h2>
          <div className="location-title-underline" />
          <p className="location-header-desc">
            Sector 81 gives this project direct access to a strong ecosystem of
            connectivity, education, healthcare, retail, and employment hubs.
          </p>
        </div>

        <div className="location-hero-banner">
          <button
            type="button"
            className="location-hero-button"
            onClick={() => setOpen(true)}
            aria-label="Open location map image"
          >
            <img
              src="/Site.webp"
              alt="GLS Avenue 81 Location Map"
              className="location-hero-img"
            />
            <div className="location-hero-overlay" />
            <div className="location-hero-content">
              <div className="location-hero-address">
                <span className="location-hero-pin">Sector 81, New Gurgaon</span>
                <span className="location-hero-sub">Near NH-48, Dwarka Expressway and Pataudi Road</span>
              </div>
              <div className="location-hero-tags">
                <span className="location-hero-tag">2-3 km to Dwarka Expressway</span>
                <span className="location-hero-tag">5-7 min to IMT Manesar</span>
                <span className="location-hero-tag">Strong social infrastructure</span>
              </div>
            </div>
            <div className="location-zoom-icon" aria-hidden="true">
              <ZoomIn size={18} />
            </div>
          </button>
        </div>

        {locationGroups.map((group) => (
          <div key={group.title} className="location-category-group">
            <div className="location-category-label">
              <span className={`location-category-icon ${group.colorClass}`}>{group.icon}</span>
              {group.title}
            </div>
            <DistanceGrid items={group.items} colorClass={group.colorClass} />
          </div>
        ))}
      </div>

      {open && (
        <div className="location-lightbox" onClick={() => setOpen(false)}>
          <button
            type="button"
            className="location-lightbox-close"
            onClick={() => setOpen(false)}
            aria-label="Close location map"
          >
            <X size={20} />
          </button>
          <img
            src="/Site.webp"
            alt="GLS Avenue 81 Location Map Expanded"
            className="location-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
