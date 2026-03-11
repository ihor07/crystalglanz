export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__spark hero__spark--1" />
      <div className="hero__spark hero__spark--2" />
      <div className="hero__spark hero__spark--3" />
      <div className="hero__bubble hero__bubble--1" />
      <div className="hero__bubble hero__bubble--2" />
      <div className="hero__bubble hero__bubble--3" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__logo">
            <div className="hero-drop">
              <div className="hero-drop__diamond" />
            </div>
          </div>

          <p className="hero__eyebrow">Professionelle Reinigung in der Schweiz</p>

          <h1>CrystalGlanz</h1>

          <p className="hero__subtitle">
            Zuverlässige Reinigungsdienstleistungen für Privatkunden und
            Unternehmen — sauber, flexibel und professionell.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--gold">
              Angebot anfragen
            </a>
            <a href="tel:+41794091478" className="btn btn--ghost">
              +41 79 409 14 78
            </a>
          </div>

          <ul className="hero__highlights">
            <li>Büroreinigung</li>
            <li>Umzugsreinigung</li>
            <li>Wohnungsreinigung</li>
            <li>Solarpanel-Reinigung</li>
          </ul>
        </div>

        <div className="hero__card">
          <div className="hero__card-glow" />
          <div className="hero__card-top">
            <h3>Sauberkeit mit Glanz</h3>
            <p>
              Moderne Reinigungslösungen mit Liebe zum Detail, fairen Preisen
              und persönlichem Service.
            </p>
          </div>

          <div className="hero__stats">
            <div className="stat-box">
              <span className="stat-box__number">100%</span>
              <span className="stat-box__label">Sorgfalt</span>
            </div>
            <div className="stat-box">
              <span className="stat-box__number">7+</span>
              <span className="stat-box__label">Leistungen</span>
            </div>
            <div className="stat-box">
              <span className="stat-box__number">24/7</span>
              <span className="stat-box__label">Anfrage</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__wave hero__wave--gold" />
      <div className="hero__wave hero__wave--blue" />
    </section>
  );
}
