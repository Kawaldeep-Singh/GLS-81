import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import "./Gallery.css";

const galleryImages = [
  { src: "/Home.webp", title: "Project Overview", category: "exterior" },
  { src: "/Site.webp", title: "Site View", category: "exterior" },
  { src: "/GLS-South-Avenue-Gurgaon.jpg", title: "GLS South Avenue", category: "exterior" },
  { src: "/Site map.webp", title: "Site Map / Master Plan", category: "plan" },
  { src: "/2BHK.webp", title: "2BHK Floor Plan", category: "plan" },
  { src: "/2BHKStudy-Type-A.webp", title: "2BHK+Study Type A", category: "plan" },
  { src: "/2BHKStudy-Type-A1.webp", title: "2BHK+Study Type A1", category: "plan" },
  { src: "/2BHKStudy-Type-B.webp", title: "2BHK+Study Type B", category: "plan" },
  { src: "/2BHKStudy-Type-C.webp", title: "2BHK+Study Type C", category: "plan" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "exterior", label: "Exterior" },
  { key: "plan", label: "Floor Plans" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };
  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      {/* Background glow */}
      <div className="gallery-bg-glow" />

      <div className="container relative">
        {/* Section Header */}
        <div className="gallery-header">
          <span className="gallery-subtitle">Visual tour</span>
          <h2 className="gallery-title">
            Project Gallery
          </h2>
          <div className="gallery-title-underline" />
        </div>

        {/* Category Filter */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`gallery-filter-btn ${activeCategory === cat.key ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {filtered.map((img, index) => (
            <div
              key={img.src}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="gallery-item-img"
              />
              {/* Overlay */}
              <div className="gallery-item-overlay">
                <div className="gallery-item-content">
                  <p className="gallery-item-title">{img.title}</p>
                </div>
                <div className="gallery-item-icon">
                  <ZoomIn size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="gallery-lightbox-close"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          {/* Nav Prev */}
          <button
            className="gallery-lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].title}
            className="gallery-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Nav Next */}
          <button
            className="gallery-lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Caption */}
          <div className="gallery-lightbox-caption">
            <p>
              {filtered[lightboxIndex].title} — {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
