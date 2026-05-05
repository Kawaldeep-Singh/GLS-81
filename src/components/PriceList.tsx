import { Phone } from "lucide-react";
import "./PriceList.css";

const configurations = [
  {
    type: "2BHK",
    carpet: "581.487",
    balcony: "114.539",
    popular: false,
  },
  {
    type: "2BHK+Study Type A",
    carpet: "629.753",
    balcony: "104.625",
    popular: true,
  },
  {
    type: "2BHK+Study Type A1",
    carpet: "570.035",
    balcony: "79.599",
    popular: false,
  },
  {
    type: "2BHK+Study Type B",
    carpet: "611.153",
    balcony: "118.672",
    popular: false,
  },
  {
    type: "2BHK+Study Type C",
    carpet: "607.116",
    balcony: "89.373",
    popular: false,
  },
];

export default function PriceList() {
  return (
    <section id="price" className="price-section">
      <div className="price-bg-decor" />

      <div className="container relative">
        {/* Section Header */}
        <div className="price-header">
          <span className="price-subtitle">Available Configurations</span>
          <h2 className="section-heading price-title">
            Unit Sizes & Resale Options
          </h2>
        </div>

        {/* Price Cards - Mobile */}
        <div className="price-cards-mobile" style={{ marginTop: "2rem" }}>
          {configurations.map((row) => (
            <div
              key={row.type}
              className={`price-card ${row.popular ? "popular" : ""}`}
            >
              {row.popular && (
                <span className="price-card-badge">
                  Most Spacious
                </span>
              )}
              <h3 className="price-card-title">{row.type}</h3>
              <div className="price-card-grid">
                <div>
                  <p className="price-card-label">Carpet Area</p>
                  <p className="price-card-val">{row.carpet} sq.ft.</p>
                </div>
                <div>
                  <p className="price-card-label">Balcony</p>
                  <p className="price-card-val">{row.balcony} sq.ft.</p>
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <p className="price-card-label">Resale Price</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                    <p className="price-card-total" style={{ fontSize: "1rem" }}>On Request</p>
                    <a href="tel:+919053608395" style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--color-orange-600)", fontWeight: 600, fontSize: "0.875rem", backgroundColor: "var(--color-orange-50)", padding: "0.25rem 0.5rem", borderRadius: "9999px" }}>
                      <Phone size={12} /> Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price Table - Desktop */}
        <div className="price-table-desktop" style={{ marginTop: "2rem" }}>
          <table className="price-table">
            <thead>
              <tr>
                {["Configuration Type", "Carpet Area (sq.ft.)", "Balcony Area (sq.ft.)", "Resale Price"].map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {configurations.map((row) => (
                <tr
                  key={row.type}
                  className={row.popular ? "popular-row" : ""}
                >
                  <td className="price-table-type">
                    {row.type}
                    {row.popular && (
                      <span className="price-table-popular-badge">
                        Popular
                      </span>
                    )}
                  </td>
                  <td className="price-table-val">{row.carpet}</td>
                  <td className="price-table-val">{row.balcony}</td>
                  <td className="price-table-total">
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span>On Request</span>
                      <a href="tel:+919053608395" style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--color-orange-600)", fontWeight: 600, fontSize: "0.875rem", backgroundColor: "var(--color-orange-50)", padding: "0.25rem 0.75rem", borderRadius: "9999px" }}>
                        <Phone size={14} /> Call to Enquire
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
