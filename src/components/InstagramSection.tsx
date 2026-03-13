import { Instagram } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--gradient-accent)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <Instagram className="w-12 h-12 text-gold mx-auto mb-6" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Follow Us on Instagram
        </h2>
        <p className="font-body text-accent-foreground/70 mb-8">
          Stay connected with the latest updates, artworks, and behind-the-scenes moments.
        </p>
        <a
          href="https://www.instagram.com/i.am.kaari"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-primary/90 transition-all duration-300"
        >
          <Instagram size={18} />
          @i.am.kaari
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
