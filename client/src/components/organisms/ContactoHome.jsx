import { Link } from "react-router-dom";

export default function ContactoHome() {
  return (
    <section className="home-section contacto-home">

      <h2>¿Tenés un proyecto?</h2>

      <p>
        Contanos tu proyecto y nos pondremos en contacto para
        asesorarte y ayudarte a encontrar
        la mejor solución.
      </p>

      <Link to="/presupuesto"  className="home-boton">
        Solicitar presupuesto
      </Link>



    </section>
  );
}