import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const speakers = [
  {
    name: "Viraj Kamble",
    role: "Creative Painting",
    image: "/speakers/Viraj-Kamble_Creative_Painting.jpg",
  },
  {
    name: "Uttam Janwade",
    role: "Portrait",
    image: "/speakers/Uttam_Janwade_Potrait.JPG",
  },
  {
    name: "Tanvi Chaudhari",
    role: "Printmaking",
    image: "/speakers/Tanvi-Chaudhari_Printmaking.jpg",
  },
  {
    name: "Smita Deshpande",
    role: "Art Therapy",
    image: "/speakers/Smita-Deshpande_Art_Therapy.jpg",
  },
  {
    name: "Shilkumar Kumbhar",
    role: "Creative Painting",
    image: "/speakers/Shilkumar_Kumbhar_Creative_Painting.JPG",
  },
  {
    name: "Prof. Tushar Panke",
    role: "Digital Restoration",
    image: "/speakers/Prof.Tushar_Panke_Digital_Restoration.JPG",
  },
  {
    name: "Prasad Pawar",
    role: "Sculpture",
    image: "/speakers/Prasad_Pawar_Sculpture.JPG",
  },
  {
    name: "Kritika Joshi",
    role: "Folk Art (Phad Painting)",
    image: "/speakers/Kritika-Joshi_folk_art(Phad_Painting).jpg",
  },
  {
    name: "Kamal Srivastava",
    role: "3D Sculpting",
    image: "/speakers/Kamal-Srivastava_3D_Sculpting.jpg",
  },
  {
    name: "Dnyaneshwar Jagdale",
    role: "Digital Portrait",
    image: "/speakers/Dnyaneshvar_Jagdale_Digital_Potrait.JPG",
  },
];

const PAGE_SIZE = 5;

const SpeakersSection = () => {
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(speakers.length / PAGE_SIZE);
  const pageSpeakers = speakers.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

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

  return (
    <section id="speakers" ref={ref} className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Distinguished Guests
          </p>

          <h2 className="section-title mb-6">Speakers</h2>

          <div className="gold-divider" />
        </div>

        {/* Speakers Grid */}
        <div className="relative">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

            {pageSpeakers.map((speaker, i) => (
              <div
                key={speaker.name}
                className="speaker-card transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >

                {/* Image container */}
                <div className="w-full aspect-[3/4] bg-muted flex items-center justify-center overflow-hidden rounded-lg">
  <img
    src={speaker.image}
    alt={speaker.name}
    className="max-w-full max-h-full object-contain"
  />
</div>

                {/* Text */}
                <div className="p-4 text-center">

                  <h3 className="font-heading text-sm font-semibold text-foreground leading-tight mb-1">
                    {speaker.name}
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    {speaker.role}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">

            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-sm text-muted-foreground">
              {page + 1} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;