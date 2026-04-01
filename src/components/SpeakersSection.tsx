import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const nagpurSpeakers = [
  { name: "Dr. Prof. Manisha Patil", role: "Painter and Art Historian", image: "/speakers/manisha-patil.jpg" },
  { name: "Prof. Prabhakar Patil", role: "Candidate – Lalit Kala Academy, General Council Election 2013", image: "/speakers/prabhakar-patil.jpg" },
  { name: "Vikas Joshi", role: "Prominent Artist in Oil Painting Medium", image: "/speakers/Vikas Joshi.png" },
  { name: "Shashikant Rewade", role: "Contemporary Artist", image: "/speakers/Shashikant Rewade.jpeg" },
  { name: "Pankaj Itkelwar", role: "Contemporary Artist", image: "/speakers/Pankaj Itkelwar.jpeg" },
  { name: "Babar Shareef", role: "Visual Artist, Dramatist, Script Writer, Poet", image: "/speakers/Babar Shareef .jpeg" },
  { name: "Abhishekh Chaurasiya", role: "Ultra-Contemporary Artist (Conceptual Art)", image: "/speakers/Abhishekh Chaurasiya .jpeg" },
  { name: "Sachin Hazare", role: "Digital Creator", image: "/speakers/Sachin Hazare.jpeg" },
  { name: "Mrunal Johrapurkar", role: "Contemporary Artist", image: "/speakers/Mrunal Johrapurkar.jpeg" },
  { name: "Rajesh Wankhede", role: "Contemporary Artist", image: "/speakers/Rajesh Wankhede .jpeg" },
  { name: "Mangesh Kapse", role: "Senior Painter, Art Critic and Founder of Basoli Group", image: "/speakers/Mangesh Kapse .jpeg" },
  { name: "Sudhir Bagde", role: "Contemporary Artist", image: "/speakers/Sudhir Bagde .jpeg" },
  { name: "Snehal Oak Limaye", role: "Ranked among Top 1000000 on ArtFacts", image: "/speakers/Snehal Limaye .jpeg" },
  { name: "Nikhil Giri", role: "Wildlife Artist and Entrepreneur", image: "/speakers/Nikhil Giri.jpeg" },
  { name: "Mr. Anand Dabli", role: "Abstract Artist", image: "/speakers/Mr Anand Dabli .jpeg" },
];

const jaipurSpeakers = [
  { name: "Viraj Kamble", role: "Creative Painting", image: "/speakers/Viraj-Kamble_Creative_Painting.jpg" },
  { name: "Uttam Janwade", role: "Portrait", image: "/speakers/Uttam_Janwade_Potrait.JPG" },
  { name: "Tanvi Chaudhari", role: "Printmaking", image: "/speakers/Tanvi-Chaudhari_Printmaking.jpg" },
  { name: "Smita Deshpande", role: "Art Therapy", image: "/speakers/Smita-Deshpande_Art_Therapy.jpg" },
  { name: "Shilkumar Kumbhar", role: "Creative Painting", image: "/speakers/Shilkumar_Kumbhar_Creative_Painting.JPG" },
  { name: "Prof. Tushar Panke", role: "Digital Restoration", image: "/speakers/Prof.Tushar_Panke_Digital_Restoration.JPG" },
  { name: "Prasad Pawar", role: "Sculpture", image: "/speakers/Prasad_Pawar_Sculpture.JPG" },
  { name: "Kritika Joshi", role: "Folk Art (Phad Painting)", image: "/speakers/Kritika-Joshi_folk_art(Phad_Painting).jpg" },
  { name: "Kamal Srivastava", role: "3D Sculpting", image: "/speakers/Kamal-Srivastava_3D_Sculpting.jpg" },
  { name: "Dnyaneshwar Jagdale", role: "Digital Portrait", image: "/speakers/Dnyaneshvar_Jagdale_Digital_Potrait.JPG" },
];

const PAGE_SIZE = 5;

const SpeakerGrid = ({ list }: { list: typeof nagpurSpeakers }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(list.length / PAGE_SIZE);
  const pageSpeakers = list.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {pageSpeakers.map((speaker, i) => (
          <div key={speaker.name} className="speaker-card transition-all duration-500" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="w-full aspect-[3/4] bg-muted flex items-center justify-center overflow-hidden rounded-lg">
              {speaker.image
                ? <img src={speaker.image} alt={speaker.name} className="max-w-full max-h-full object-contain" />
                : <span className="text-muted-foreground text-xs text-center px-2">{speaker.name}</span>
              }
            </div>
            <div className="p-4 text-center">
              <h3 className="font-heading text-sm font-semibold text-foreground leading-tight mb-1">{speaker.name}</h3>
              <p className="text-xs text-muted-foreground">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm text-muted-foreground">{page + 1} / {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="speakers" ref={ref} className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">

        {/* Main header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Distinguished Guests</p>
          <h2 className="section-title mb-2">Speakers</h2>
          <p className="font-body text-muted-foreground mb-6">Proud to bring inspirational speakers from across the globe</p>
          <div className="gold-divider" />
        </div>

        {/* Jaipur */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Jaipur <span className="text-primary">Kaari</span> Speakers
          </h3>
          <SpeakerGrid list={jaipurSpeakers} />
        </div>

        {/* Nagpur */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Nagpur <span className="text-primary">Kaari</span> Speakers
          </h3>
          <SpeakerGrid list={nagpurSpeakers} />
        </div>

      </div>
    </section>
  );
};

export default SpeakersSection;
