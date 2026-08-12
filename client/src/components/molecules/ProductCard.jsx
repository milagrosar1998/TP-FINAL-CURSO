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

const dispatch = useDispatch();

  const producto = {
    id,
    nombre,
    descripcion,
    imagen,
    precio,
  };//producto


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



      <button
        onClick={() => {
          dispatch(agregarProducto(producto));
          alert("Producto agregado al carrito");
        }}
      >{/*dispatch manda la informacion a redux */}

        Agregar al carrito
      </button>


      <Link to={"/producto/" + id}>
        Ver detalle
      </Link>


    </article >
  );
}
