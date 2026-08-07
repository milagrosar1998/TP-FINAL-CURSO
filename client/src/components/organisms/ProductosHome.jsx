import { Link } from "react-router-dom";

export default function ProductosHome() {
  return (
    <section>
      <h2>Productos destacados</h2>

      <p>
        Encontrá materiales e insumos para construcción en seco,
        remodelaciones y terminaciones, seleccionados por calidad
        y rendimiento.
      </p>

      <Link to="/productos">
        Ver catálogo completo
      </Link>

    </section>
  );
}