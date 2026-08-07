import { Link } from "react-router-dom";

export default function ContactoHome() {
  return (
    <section>

      <h2>¿Tenés un proyecto?</h2>

      <p>
        Contanos tu proyecto y nos pondremos en contacto para
        asesorarte y ayudarte a encontrar
        la mejor solución.
      </p>

      <Link to="/presupuesto">
        Solicitar presupuesto
      </Link>



    </section>
  );
}