import { useState } from "react";
import { Heading, Paragraph } from "../atoms";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../../redux/carritoSlice";


export default function ProductCard({
  id,
  nombre,
  descripcion,
  imagen,
  precio,
}) {

  const [cantidad, setCantidad] = useState(1);

  const dispatch = useDispatch();


  const producto = {
    id,
    nombre,
    descripcion,
    imagen,
    precio,
    cantidad,
  };


  return (

    <article className="producto-card">

      <img
        src={"http://localhost:3000" + imagen}
        alt={nombre}
      />


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


      <div className="contador-producto">

        <button
          type="button"
          onClick={() => {

            if (cantidad > 1) {
              setCantidad(cantidad - 1);
            }

          }}
        >
          -
        </button>


        <span>{cantidad}</span>


        <button
          type="button"
          onClick={() => setCantidad(cantidad + 1)}
        >
          +
        </button>

      </div>


      <button
        type="button"
        onClick={() => {

          dispatch(agregarProducto(producto));

          alert(
            `${cantidad} producto${cantidad > 1 ? "s" : ""} agregado${cantidad > 1 ? "s" : ""} al carrito`
          );

          setCantidad(1);

        }}
      >
        Agregar al carrito
      </button>


      <Link to={"/producto/" + id}>
        Ver detalle
      </Link>

    </article>

  );
}