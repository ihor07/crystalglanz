const items = [
  {
    title: "Zuverlässig",
    text: "Pünktliche Termine, klare Kommunikation und sorgfältige Ausführung.",
  },
  {
    title: "Flexibel",
    text: "Individuelle Lösungen für Privatkunden, Büros und Spezialreinigungen.",
  },
  {
    title: "Gründlich",
    text: "Sauberkeit bis ins Detail mit professionellem Anspruch.",
  },
  {
    title: "Fair",
    text: "Transparente Angebote und ein gutes Preis-Leistungs-Verhältnis.",
  },
];

export default function WhyUs() {
  return (
    <section className="section section--blue" id="why-us">
      <div className="container">
        <div className="section-heading section-heading--white">
          <span className="section-heading__eyebrow">Warum wir</span>
          <h2>CrystalGlanz steht für Qualität</h2>
          <p>
            Unser Anspruch ist es, nicht nur sauber zu reinigen, sondern einen
            Service zu bieten, auf den Sie sich verlassen können.
          </p>
        </div>

        <div className="why-grid">
          {items.map((item) => (
            <div className="why-card" key={item.title}>
              <div className="why-card__bullet" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
