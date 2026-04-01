import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="KAARI Art Exhibition" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          MIT School of Fine Arts and Applied Arts
        </p>

        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-secondary mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          KAARI
        </h1>

        <p
          className="font-heading text-xl md:text-2xl lg:text-3xl text-secondary/90 italic mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          The 7th Edition
        </p>

        <p
          className="font-body text-secondary/70 text-base md:text-lg mb-10 max-w-xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          Experience the vivid colours of Rajasthan
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="https://secure.paytmpayments.com/link/paymentForm/74759/LL_904874431"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-primary-foreground font-body text-sm font-medium tracking-wider uppercase rounded-sm hover:opacity-90 transition-all duration-300"
            style={{ background: 'var(--gradient-primary)' }}
          >
           Register for Pune
          </a>
          <a
            href="#gallery"
            className="px-8 py-3.5 border border-secondary/40 text-secondary font-body text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-secondary/10 transition-all duration-300"
          >
             Explore Gallery
             
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-gold/0 via-gold to-gold/0 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
