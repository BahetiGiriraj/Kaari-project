import { useEffect, useRef, useState } from "react";
import {
  Palette, BookOpen, Music, Film, Camera, Theater, Shapes,
  Paintbrush, Globe, Sparkles, Landmark, Mic
} from "lucide-react";

const genres = [
  { icon: Palette, label: "Arts and Crafts" },
  { icon: Landmark, label: "Heritage" },
  { icon: BookOpen, label: "Literature" },
  { icon: Sparkles, label: "Dance" },
  { icon: Paintbrush, label: "Design" },
  { icon: Music, label: "Music" },
  { icon: Shapes, label: "Folk Arts" },
  { icon: Film, label: "Film" },
  { icon: Mic, label: "Classical" },
  { icon: Globe, label: "New Media" },
  { icon: Theater, label: "Multiarts" },
  { icon: Camera, label: "Photography" },
];

const GenresSection = () => {
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
    <section id="genres" ref={ref} className="section-padding bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Explore Categories</p>
          <h2 className="section-title mb-6">Genres</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {genres.map((g, i) => (
            <div
              key={g.label}
              className={`genre-card transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <g.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-body text-xs font-medium text-foreground">{g.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenresSection;
