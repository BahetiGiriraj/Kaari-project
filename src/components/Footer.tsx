const Footer = () => {
  const navLinks = ["Home", "About", "Speakers", "Gallery", "Genres", "Festival"];

  return (
    <footer id="contact" className="text-accent-foreground" style={{ background: 'var(--gradient-accent)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">KAARI</h3>
            <p className="font-body text-sm text-accent-foreground/70 leading-relaxed">
              MIT School of Fine Arts and Applied Arts<br />
              MIT University
            </p>
            <a
              href="http://www.mituniversity.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm mt-2 inline-block"
              style={{ color: '#fdb92e' }}
            >
              www.mituniversity.ac.in
            </a>
            <br />
            <a
              href="https://mitsofa.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm mt-1 inline-block"
              style={{ color: '#fdb92e' }}
            >
              mitsofa.edu.in
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-accent-foreground mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm text-accent-foreground/70"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-accent-foreground mb-4">Connect</h4>
            <a
              href="https://www.instagram.com/i.am.kaari"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-accent-foreground/70"
            >
              Instagram — @i.am.kaari
            </a>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-accent-foreground/50">
            © 2026 KAARI — MIT School of Fine Arts and Applied Arts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
