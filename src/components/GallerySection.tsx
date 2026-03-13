import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const editions = [
  {
    year: "KAARI 2023",
    images: [
      { src: gallery1, title: "Terracotta Dreams", span: "row-span-2" },
      { src: gallery2, title: "Bronze Elegance", span: "" },
      { src: gallery3, title: "Folk Traditions", span: "" },
      { src: gallery4, title: "Blue Momentum", span: "col-span-2" },
    ],
  },
  {
    year: "KAARI 2024",
    images: [
      { src: gallery5, title: "Moonlit Court", span: "row-span-2" },
      { src: gallery6, title: "Heritage Vessel", span: "" },
      { src: gallery7, title: "The Muse", span: "" },
      { src: gallery8, title: "Desert Sunset", span: "col-span-2" },
    ],
  },
  {
    year: "KAARI 2025",
    images: [
      { src: gallery3, title: "New Horizons", span: "" },
      { src: gallery1, title: "Roots Revisited", span: "col-span-2" },
      { src: gallery5, title: "Silent Echoes", span: "row-span-2" },
      { src: gallery8, title: "Golden Hour", span: "" },
      { src: gallery2, title: "Vibrant Souls", span: "" },
      { src: gallery6, title: "Sacred Geometry", span: "" },
    ],
  },
];

const GallerySection = () => {
  const [activeEdition, setActiveEdition] = useState(2);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentImages = editions[activeEdition].images;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const goToPrev = () => setActiveEdition((p) => (p === 0 ? editions.length - 1 : p - 1));
  const goToNext = () => setActiveEdition((p) => (p === editions.length - 1 ? 0 : p + 1));

  return (
    <section id="gallery" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Curated Collection</p>
          <h2 className="section-title mb-6">Gallery</h2>
          <div className="gold-divider" />
        </div>

        {/* Edition Tabs with Arrows */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {editions.map((ed, i) => (
              <button
                key={ed.year}
                onClick={() => setActiveEdition(i)}
                className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeEdition === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {ed.year}
              </button>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {currentImages.map((img, i) => (
            <div
              key={`${activeEdition}-${i}`}
              className={`gallery-item ${img.span} transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="absolute inset-0 bg-accent/0 hover:bg-accent/40 transition-all duration-500 flex items-end p-4">
                <p className="font-heading text-sm text-accent-foreground opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-accent/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-accent-foreground/80 hover:text-accent-foreground transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={currentImages[lightbox].src}
            alt={currentImages[lightbox].title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
