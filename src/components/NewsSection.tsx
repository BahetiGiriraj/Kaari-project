import { useState } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    image: "/news/one.jpeg",
    title: "KAARI 26 — Nagpur Artists Shine at the 7th Edition",
    source: "Nagpur Times",
    date: "April 2026",
  },
  {
    image: "/news/two.jpeg",
    title: "MIT School of Fine Arts Hosts Grand Art Exhibition in Nagpur",
    source: "Lokmat",
    date: "April 2026",
  },
  {
    image: "/news/three.jpeg",
    title: "Emerging Artists from Nagpur Make Their Mark at KAARI",
    source: "Hitavada",
    date: "April 2026",
  },
  {
    image: "/news/four.jpeg",
    title: "KAARI 26: A Celebration of Contemporary Art and Culture",
    source: "Maharashtra Times",
    date: "April 2026",
  },
  {
    image: "/news/five.jpeg",
    title: "Nagpur's Art Scene Flourishes with KAARI's 7th Edition",
    source: "Sakal",
    date: "April 2026",
  },
];

const futureCities = [
  { city: "Pune", dates: "May 21 – 27, 2026", icon: "🏛️" },
  { city: "Goa", dates: "May 26 – 31, 2026", icon: "🌊" },
];

const PAGE_SIZE = 3;

const NewsSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(articles.length / PAGE_SIZE);
  const visible = articles.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="news" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Press & Media</p>
          <h2 className="section-title mb-6">In the News</h2>
          <div className="gold-divider" />
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visible.map((article, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-body text-xs text-primary tracking-wide uppercase">{article.source}</span>
                  <span className="text-muted-foreground text-xs">·</span>
                  <span className="font-body text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground leading-snug">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-body text-sm text-muted-foreground">{page + 1} / {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Future Cities */}
        <div className="text-center mb-10">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">What's Next</p>
          <h2 className="section-title mb-6">Upcoming Cities</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {futureCities.map((item) => (
            <div
              key={item.city}
              className="flex items-center gap-5 p-6 rounded-xl border border-border bg-card shadow-sm"
            >
              <span className="text-4xl">{item.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-primary" />
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.city}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-muted-foreground" />
                  <p className="font-body text-sm text-muted-foreground">{item.dates}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
