import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, Clock } from "lucide-react";

const FestivalSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="festival" ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">The Event</p>
          <h2 className="section-title mb-6">Festival</h2>
          <div className="gold-divider mb-8" />
          <p className="section-subtitle mx-auto">
            KAARI is a three-day art exhibition showcasing the finest works by students of MIT School of Fine Arts and Applied Arts.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
          <div className="stat-card">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Venue</h3>
            <p className="font-body text-sm text-muted-foreground">Balgandharva Art Gallery<br />Shivajinagar, Pune</p>
          </div>
          <div className="stat-card">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Duration</h3>
            <p className="font-body text-sm text-muted-foreground">Three Days of<br />Art & Culture</p>
          </div>
          <div className="stat-card">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Experience</h3>
            <p className="font-body text-sm text-muted-foreground">Explore artworks &<br />interact with artists</p>
          </div>
        </div>

        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "400ms" }}>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Visitors can explore artworks across various mediums including painting, sculpture, printmaking, 
            and applied arts. The festival provides a unique opportunity to interact directly with the artists 
            and distinguished speakers from the art community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
