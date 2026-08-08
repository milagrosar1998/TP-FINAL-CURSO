import { Link } from "react-router-dom";

export default function Contacto() {
  return (
    <main className="contacto-page">
      <section className="contacto-contenedor">
        <h1>Contacto</h1>

        <p className="contacto-intro">
          ¿Tenés alguna consulta o un proyecto en mente?
          </p>
          <p className="contacto-intro">
            Comunicate con S MULTIPRO.
        </p>

        <div className="contacto-datos">
          <article className="contacto-card">
            <i className="bi bi-whatsapp"></i>
            <h2>WhatsApp</h2>
            <p>38400000</p>
          </article>

          <article className="contacto-card">
            <i className="bi bi-envelope-fill"></i>

            <h2>Email</h2>
            <p>sergio0000@smultipro.com</p>
          </article>

          <article className="contacto-card">
            <i className="bi bi-geo-alt-fill"></i>

            <h2>Ubicación</h2>
            <p>Loreto - Santiago del Estero</p>
          </article>
        </div>


        <div className="contacto-presupuesto">
          <h2>¿Querés solicitar un presupuesto?</h2>

          <p>
            Contanos sobre el trabajo que necesitás y te
            responderemos con una propuesta personalizada.
          </p>

          <Link to="/presupuesto">
            Solicitar presupuesto
          </Link>
        </div>

      </section>
    </main>
  );
}