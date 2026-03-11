import { useEffect } from "react";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 820) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [setMobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <div className="brand__logo" aria-hidden="true">
            <div className="drop-shape">
              <div className="drop-diamond" />
            </div>
          </div>

          <div className="brand__text">
            <span className="brand__title">CrystalGlanz</span>
            <span className="brand__subtitle">Reinigungsfirma</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#services">Leistungen</a>
          <a href="#why-us">Warum wir</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <div className="header__actions">
          <a href="tel:+41794091478" className="btn btn--small header__call">
            Jetzt anrufen
          </a>

          <button
            type="button"
            className={`burger ${mobileMenuOpen ? "burger--active" : ""}`}
            aria-label="Menü öffnen"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "mobile-menu--open" : ""}`}>
        <div className="container mobile-menu__inner">
          <a href="#services" onClick={closeMenu}>
            Leistungen
          </a>
          <a href="#why-us" onClick={closeMenu}>
            Warum wir
          </a>
          <a href="#contact" onClick={closeMenu}>
            Kontakt
          </a>

          <a
            href="tel:+41794091478"
            className="btn btn--small mobile-menu__cta"
            onClick={closeMenu}
          >
            Jetzt anrufen
          </a>
        </div>
      </div>
    </header>
  );
}
