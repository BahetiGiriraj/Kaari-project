import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
const editions = [
  {
    year: "Highlights",
    images: [
      { src: gallery1, title: "Artist Interaction", span: "row-span-2" },
      { src: gallery2, title: "Live Painting Session", span: "row-span-2" },
      { src: gallery3, title: "Student Artwork Display", span: "row-span-2" },
      { src: gallery4, title: "Exhibition Hall", span: "row-span-2" },
      { src: gallery5, title: "Creative Workshop", span: "row-span-2" },
    ],
  },
  {
    year: "KAARI 2018",
    images: [
      { src: gallery6, title: "Terracotta Dreams", span: "span-2" },
      { src: gallery7, title: "Bronze Elegance", span: "span-2" },
      { src: gallery8, title: "Folk Traditions", span: "span-2" },
      { src: gallery9, title: "Blue Momentum", span: "span-2" },
    ],
  },
  {
    year: "KAARI 2023",
    images: [
      { src: gallery10, title: "Moonlit Court", span: "span-2" },
      { src: gallery11, title: "Bronze Elegance", span: "span-2" },
      { src: gallery12, title: "Folk Traditions", span: "span-2" },
    ],
  },
  
];

const GallerySection = () => {
  const [activeEdition, setActiveEdition] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const currentImages = editions[activeEdition].images;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
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

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const goToPrev = () =>
    setActiveEdition((p) => (p === 0 ? editions.length - 1 : p - 1));

  const goToNext = () =>
    setActiveEdition((p) => (p === editions.length - 1 ? 0 : p + 1));

  return (
    <section id="gallery" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Curated Collection
          </p>

          <h2 className="section-title mb-6">Gallery</h2>

          <div className="gold-divider" />
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2 flex-wrap justify-center">
            {editions.map((ed, i) => (
              <button
                key={ed.year}
                onClick={() => setActiveEdition(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                  activeEdition === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {ed.year}
              </button>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">

          {currentImages.map((img, i) => (
            <div
              key={`${activeEdition}-${i}`}
              className={`relative overflow-hidden rounded-lg cursor-pointer ${
                img.span
              } ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"} transition duration-500`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition flex items-end p-4">
                <p className="text-white text-sm opacity-0 hover:opacity-100 transition">
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white">
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