export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-box__left">
            <span className="section-heading__eyebrow">Kontakt</span>
            <h2>Jetzt unverbindlich anfragen</h2>
            <p>
              Kontaktieren Sie uns für ein individuelles Angebot. Wir helfen
              Ihnen schnell, freundlich und professionell weiter.
            </p>

            <div className="contact-list">
              <a href="tel:+41794091478" className="contact-item">
                <span className="contact-item__icon">📞</span>
                <span>+41 79 409 14 78</span>
              </a>

              <a
                href="mailto:CrystalGlanz.ch@gmail.com"
                className="contact-item"
              >
                <span className="contact-item__icon">✉️</span>
                <span>CrystalGlanz.ch@gmail.com</span>
              </a>

              <a
                href="https://www.CrystalGlanz.ch"
                className="contact-item"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-item__icon">🌐</span>
                <span>www.CrystalGlanz.ch</span>
              </a>
            </div>
          </div>

          <div className="contact-box__right">
            <form className="contact-form">
              <input type="text" placeholder="Ihr Name" />
              <input type="tel" placeholder="Telefonnummer" />
              <input type="email" placeholder="E-Mail" />
              <textarea rows="5" placeholder="Ihre Nachricht" />
              <button type="button" className="btn btn--gold btn--full">
                Anfrage senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
