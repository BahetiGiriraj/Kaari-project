import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "152,200+", label: "Impressions" },
  { value: "200+", label: "Artworks Displayed" },
  { value: "100+", label: "Speakers" },
  { value: "40+", label: "Live Sessions" },
  { value: "5+", label: "Locations Across India" },
];

const StatsSection = () => {
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
    <section ref={ref} className="section-padding" style={{ background: 'var(--gradient-accent)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-xl border border-accent-foreground/10 bg-accent-foreground/5 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</p>
              <p className="font-body text-sm text-accent-foreground/70 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
