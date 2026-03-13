import { useEffect, useRef, useState } from "react";
import { Palette, Shapes, Printer, Brush, Theater } from "lucide-react";

const disciplines = [
  { icon: Palette, label: "Painting" },
  { icon: Shapes, label: "Sculpture" },
  { icon: Printer, label: "Printmaking" },
  { icon: Brush, label: "Applied Arts" },
  { icon: Theater, label: "Theatre" },
];

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE CONTENT */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              About the Exhibition
            </p>

            <h2 className="section-title mb-6">KAARI</h2>

            <div className="gold-divider mb-8" />

            <p className="section-subtitle mb-6">
              <span className="font-heading italic text-primary">"Kaari"</span>{" "}
              means <span className="font-heading italic">"Artist"</span> in
              Sanskrit. The exhibition showcases creative works of Master of
              Fine Arts students from MIT School of Fine Arts and Applied Arts.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Artists express their passion and reflect society through their
              art. Through this platform, emerging artists connect with the
              world, presenting their vision across multiple disciplines.
            </p>

            {/* Disciplines */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {disciplines.map((d, i) => (
                <div
                  key={d.label}
                  className={`genre-card transition-all duration-500 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <d.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-body text-sm font-medium text-foreground">
                    {d.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <img
              src="/kaari-exhibition.png"
              alt="Kaari Exhibition"
              className="rounded-xl shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;