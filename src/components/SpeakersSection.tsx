import { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";

const speakers = [
  {
    name: "Dr. Prof. Manisha Patil",
    role: "Painter and Art Historian",
    image: "/speakers/manisha-patil.png",
  },
  {
    name: "Prof. Prabhakar Patil",
    role: "Candidate – Lalit Kala Academy (General Council Election 2013)",
    image: "/speakers/prabhakar-patil.jpg",
  },
  {
    name: "Vikas Joshi",
    role: "Prominent Artist in Oil Painting Medium",
    image: "/speakers/vikas-joshi.jpg",
  },
  {
    name: "Shashikant Rewade",
    role: "Contemporary Artist",
    image: "/speakers/shashikant-rewade.jpg",
  },
  {
    name: "Pankaj Itkelwar",
    role: "Contemporary Artist",
    image: "/speakers/pankaj-itkelwar.jpg",
  },
  {
    name: "Babar Shareef",
    role: "Visual Artist, Dramatist, Script Writer, Poet",
    image: "/speakers/babar-shareef.jpg",
  },
  {
    name: "Abhishekh Chaurasiya",
    role: "Ultra-Contemporary Artist (Conceptual Art)",
    image: "/speakers/abhishekh-chaurasiya.jpg",
  },
  {
    name: "Sachin Hazare",
    role: "Digital Creator",
    image: "/speakers/sachin-hazare.jpg",
  },
  {
    name: "Mrunal Johrapurkar",
    role: "Contemporary Artist",
    image: "/speakers/mrunal-johrapurkar.jpg",
  },
  {
    name: "Rajesh Wankhede",
    role: "Contemporary Artist",
    image: "/speakers/rajesh-wankhede.jpg",
  },
  {
    name: "Mangesh Kapse",
    role: "Senior Painter, Art Critic and Founder of Basoli Group",
    image: "/speakers/mangesh-kapse.jpg",
  },
  {
    name: "Sudhir Bagde",
    role: "Contemporary Artist",
    image: "/speakers/sudhir-bagde.jpg",
  },
  {
    name: "Snehal Oak Limaye",
    role: "Contemporary Artist – Ranked on ArtFacts",
    image: "/speakers/snehal-limaye.jpg",
  },
  {
    name: "Nikhil Giri",
    role: "Wildlife Artist and Entrepreneur",
    image: "/speakers/nikhil-giri.jpg",
  },
  {
    name: "Mr. Anand Dabli",
    role: "Abstract Artist",
    image: "/speakers/anand-dabli.jpg",
  },
];

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
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Distinguished Guests</p>
          <h2 className="section-title mb-6">Speakers</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {speakers.map((speaker, i) => (
           <div
  key={speaker.name}
  className={`speaker-card transition-all duration-500 ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
  style={{ transitionDelay: `${Math.min(i * 60, 600)}ms` }}
>
  <div className="aspect-square bg-secondary/60 overflow-hidden">
    <img
      src={speaker.image}
      alt={speaker.name}
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-4">
    <h3 className="font-heading text-sm font-semibold text-foreground leading-tight mb-1">
      {speaker.name}
    </h3>
    <p className="font-body text-xs text-muted-foreground">
      {speaker.role}
    </p>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
