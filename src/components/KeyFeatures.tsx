import {
  Trees,
  Award,
  Building,
  Dock,
  ShieldCheck,
  Car,
  Trophy,
  Users,
  Store,
  Video,
  Leaf,
  Baby,
} from "lucide-react";
import "./KeyFeatures.css";

const features = [
  { icon: <Trees size={22} />, text: "75% Open Area in the Project" },
  { icon: <Award size={22} />, text: "IGBC Certified Green Building" },
  { icon: <Building size={22} />, text: "Only 5 Towers in Sector 81" },
  { icon: <Dock size={22} />, text: "3 Lifts per Tower — First in Affordable" },
  { icon: <ShieldCheck size={22} />, text: "Gated Entry with Security Checkpost" },
  { icon: <Car size={22} />, text: "Ample Covered Car Parking" },
  { icon: <Trophy size={22} />, text: "Cricket Pitch, Badminton & Basketball" },
  { icon: <Users size={22} />, text: "Community Hall & Crèche Area" },
  { icon: <Store size={22} />, text: "Retail Society Shops inside Campus" },
  { icon: <Video size={22} />, text: "CCTV Surveillance 24×7" },
  { icon: <Leaf size={22} />, text: "Landscaped Lawns & Green Areas" },
  { icon: <Baby size={22} />, text: "Dedicated Children's Play Area" },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="features-section">
      <div className="features-bg-decor" />

      <div className="container relative">
        {/* Section Header */}
        <div className="features-header">
          <span className="features-subtitle">Why choose us</span>
          <h2 className="section-heading features-title">
            Key Features
          </h2>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card group">
              <div className="feature-icon-wrapper">
                {f.icon}
              </div>
              <p className="feature-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
