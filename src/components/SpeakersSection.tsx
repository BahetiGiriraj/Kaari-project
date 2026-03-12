import { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";

const speakers = [
  { name: "Dr. Prof. Manisha Patil", role: "Painter and Art Historian" },
  { name: "Prof. Prabhakar Patil", role: "Candidate Lalit Kala Academy" },
  { name: "Vikas Joshi", role: "Prominent Oil Painting Artist" },
  { name: "Shashikant Rewade", role: "Cultural Analyst" },
  { name: "Pankaj Itkelwar", role: "Cultural Analyst" },
  { name: "Babar Shareef", role: "Cultural Analyst" },
  { name: "Abhishekh Chaurasiya", role: "Cultural Analyst" },
  { name: "Sachin Hazare", role: "Cultural Analyst" },
  { name: "Mrunal Johrapurkar", role: "Cultural Analyst" },
  { name: "Rajesh Wankhede", role: "Cultural Analyst" },
  { name: "Mangesh Kapse", role: "Cultural Analyst" },
  { name: "Sudhir Bagde", role: "Cultural Analyst" },
  { name: "Snehal Limaye", role: "Cultural Analyst" },
  { name: "Nikhil Giri", role: "Cultural Analyst" },
  { name: "Mr. Anand Dabli", role: "Cultural Analyst" },
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
              className={`speaker-card transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${Math.min(i * 60, 600)}ms` }}
            >
              <div className="aspect-square bg-secondary/60 flex items-center justify-center">
                <User className="w-16 h-16 text-muted-foreground/40" />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-sm font-semibold text-foreground leading-tight mb-1">{speaker.name}</h3>
                <p className="font-body text-xs text-muted-foreground">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
