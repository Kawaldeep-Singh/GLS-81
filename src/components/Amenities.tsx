import {
  Waves,
  Dumbbell,
  HeartPulse,
  ParkingCircle,
  ArrowUpFromDot,
  Cctv,
  Flower2,
  Landmark,
  Baby,
  Target,
  ShoppingBag,
  TreePine,
} from "lucide-react";
import "./Amenities.css";

const amenities = [
  { icon: <Waves size={28} />, label: "Swimming Pool", colorClass: "grad-blue" },
  { icon: <Dumbbell size={28} />, label: "Gymnasium", colorClass: "grad-red" },
  { icon: <HeartPulse size={28} />, label: "Yoga & Meditation", colorClass: "grad-purple" },
  { icon: <ParkingCircle size={28} />, label: "Car Parking", colorClass: "grad-gray" },
  { icon: <ArrowUpFromDot size={28} />, label: "High Speed Lifts", colorClass: "grad-indigo" },
  { icon: <Cctv size={28} />, label: "24×7 CCTV Security", colorClass: "grad-orange" },
  { icon: <Flower2 size={28} />, label: "Themed Gardens", colorClass: "grad-green" },
  { icon: <Landmark size={28} />, label: "ATM on Premises", colorClass: "grad-teal" },
  { icon: <Baby size={28} />, label: "Children Play Area", colorClass: "grad-pink" },
  { icon: <Target size={28} />, label: "Multipurpose Hall", colorClass: "grad-yellow" },
  { icon: <ShoppingBag size={28} />, label: "Retail Shops", colorClass: "grad-violet" },
  { icon: <TreePine size={28} />, label: "30% Green Area", colorClass: "grad-lime" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        {/* Section Header */}
        <div className="amenities-header">
          <span className="amenities-subtitle">World-class living</span>
          <h2 className="section-heading amenities-title">
            Premium Amenities
          </h2>
        </div>

        <div className="amenities-grid">
          {amenities.map((a) => (
            <div key={a.label} className="amenity-card group">
              <div className={`amenity-icon-wrapper ${a.colorClass}`}>
                {a.icon}
              </div>
              <p className="amenity-label">
                {a.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
