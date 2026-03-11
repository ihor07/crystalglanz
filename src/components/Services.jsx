const services = [
  "Büroreinigung",
  "Private Haushalte",
  "Umzugsreinigung",
  "Geruchsbeseitigung",
  "Wohnungsreinigung",
  "Solarpanel-Reinigung",
  "Gartenpflege",
  "Fensterreinigung",
];

export default function Services() {
  return (
    <section className="section section--light" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Leistungen</span>
          <h2>Unsere Reinigungsservices</h2>
          <p>
            Wir bieten gründliche und zuverlässige Reinigungslösungen für
            Wohnungen, Häuser, Büros und gewerbliche Objekte.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <div className="service-card__icon">✦</div>
              <h3>{service}</h3>
              <p>
                Professioneller Service mit hoher Sorgfalt, flexibler Planung
                und transparenter Kommunikation.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
