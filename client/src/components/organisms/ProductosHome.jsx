import { Link } from "react-router-dom";

export default function ProductosHome() {
  return (
    <section className="home-section productos-home">
      <h2>Productos destacados</h2>

      <p className="home-intro">
        Encontrá materiales e insumos para construcción en seco,
        remodelaciones y terminaciones, seleccionados por calidad
        y rendimiento.
      </p>

      <Link to="/productos" className="home-boton">
        Ver catálogo completo
      </Link>

    </section>
  );
}