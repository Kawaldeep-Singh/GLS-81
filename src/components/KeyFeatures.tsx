import {
  ShieldCheck,
  Building,
  Store,
  Car,
  BatteryCharging,
  Trees,
  BadgeCheck,
  IndianRupee,
  Hammer,
} from "lucide-react";
import "./KeyFeatures.css";

const features = [
  { icon: <Car size={22} />, text: "Dedicated car parking in affordable category." },
  { icon: <Trees size={22} />, text: "Balanced planning with 50% open and 30% green area." },
  { icon: <Building size={22} />, text: "Functional clubhouse with community-focused spaces." },
  { icon: <ShieldCheck size={22} />, text: "Gated setup with CCTV network and 24/7 security." },
  { icon: <BatteryCharging size={22} />, text: "100% power backup, high-speed lifts and utility comfort." },
  { icon: <Store size={22} />, text: "In-campus retail convenience for daily needs." },
];

const usps = [
  {
    icon: <BadgeCheck size={24} />,
    title: "Zero Maintenance",
    text: "No maintenance charges for the first 5 years after possession (as per the shared government policy context).",
  },
  {
    icon: <IndianRupee size={24} />,
    title: "Affordable with PMAY",
    text: "Value-driven pricing with PMAY-linked affordability benefits for end-users.",
  },
  {
    icon: <Hammer size={24} />,
    title: "Quality & Safety Focus",
    text: "Planned build quality with an earthquake-resistant structure and modern fire-fighting systems.",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="features-section">
      <div className="features-bg-decor" />

      <div className="container relative">
        <div className="features-header">
          <span className="features-subtitle">Why choose this project</span>
          <h2 className="section-heading features-title">
            USPs and Project Strengths
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

        <div className="usp-grid">
          {usps.map((usp) => (
            <div key={usp.title} className="usp-card">
              <div className="usp-icon">{usp.icon}</div>
              <h3 className="usp-title">{usp.title}</h3>
              <p className="usp-text">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
