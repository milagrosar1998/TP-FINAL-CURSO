import { Heading, Paragraph } from "../atoms";
import { Link } from "react-router-dom";



export default function ProductCard({
  id,
  nombre,
  descripcion,
  imagen,
  precio,
  agregarAlCarrito,
}) {
  return (

    <article className="producto-card">
      <img src={imagen} alt={nombre} />

      <Heading
        size="h3"
        text={nombre}

      />

      <Paragraph
        text={descripcion}
      />


      <Heading
        size="h5"
        text={"$ " + precio}

      />



      <button onClick={() => agregarAlCarrito({
        id,
        nombre,
        descripcion,
        imagen,
        precio,
      })}>
        Agregar al carrito
      </button>

      <Link to={"/producto/" + id}>
        Ver detalle
      </Link>


    </article>
  );
}
