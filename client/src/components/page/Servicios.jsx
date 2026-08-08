import { Link } from "react-router-dom";

export default function Servicios() {
  return (
    <main className="servicios-page">
      <section className="servicios-contenedor">
        <h1>Nuestros servicios</h1>

        <p>
          Brindamos soluciones para hogares, comercios, empresas
          y obras de diferentes escalas.
        </p>

        <article className="servicio-card">
          <h2>Construcción en seco</h2>

          <p>
            Realizamos cielorrasos, tabiques, revestimientos
            y trabajos en Durlock, PVC y WPC.
          </p>

          <Link to="/presupuesto">
            Solicitar presupuesto
          </Link>
        </article>

        <article className="servicio-card">
          <h2>Remodelaciones y ampliaciones</h2>

          <p>
            Reformamos y adaptamos espacios de acuerdo
            a las necesidades de cada proyecto.
          </p>

          <Link to="/presupuesto">
            Solicitar presupuesto
          </Link>
        </article>

        <article className="servicio-card">
          <h2>Electricidad</h2>

          <p>
            Instalaciones eléctricas, reparaciones
            y mantenimiento.
          </p>

          <Link to="/presupuesto">
            Solicitar presupuesto
          </Link>
        </article>

        <article className="servicio-card">
          <h2>Pintura</h2>

          <p>
            Trabajos de pintura interior y exterior.
          </p>

          <Link to="/presupuesto">
            Solicitar presupuesto
          </Link>
        </article>
        <article className="servicio-card">
          <h2>Soldaduras en general</h2>

          <p>
            Realizamos trabajos de soldadura, reparaciones y estructuras
            metálicas para proyectos pequeños y de mayor escala.
          </p>

          <Link to="/presupuesto">
            Solicitar presupuesto
          </Link>
        </article>

        <article className="servicio-card">
          <h2>Reparaciones y mantenimiento</h2>

          <p>
            Soluciones para diferentes problemas
            y necesidades de mantenimiento.
          </p>

          <Link to="/presupuesto">
            Solicitar presupuesto
          </Link>
        </article>

        <article className="servicio-card">
          <h2>¿Necesitás otro tipo de trabajo?</h2>

          <p>
            Si el servicio que necesitás no aparece en la lista,
            contanos tu idea o problema y evaluaremos la mejor solución
            para tu proyecto.
          </p>

          <Link to="/presupuesto">
            Consultar
          </Link>
        </article>

      </section>
    </main>
  );
}