import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import api from "../../services/api";
import { agregarProducto } from "../../redux/carritoSlice";

export default function ProductoDetalle() {

    //agarra el id de la url
  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  const dispatch = useDispatch();


  async function cargarProducto() {

    try {

      const respuesta = await api.get(
        "/productos/" + id
      );

      setProducto(respuesta.data);

    } catch (error) {

      console.log(
        "Error al cargar el producto",
        error
      );

    }

  }


  useEffect(() => {

    cargarProducto();

  }, [id]);


  if (!producto) {

    return (
      <main className="producto-detalle-page">
        <p>Cargando producto...</p>
      </main>
    );

  }


  return (
    <main className="producto-detalle-page">

      <section className="producto-detalle">

        <div className="producto-detalle-imagen">

          <img
            src={
              "http://localhost:3000" +
              producto.imagen
            }
            alt={producto.nombre}
          />

        </div>


        <div className="producto-detalle-info">

          <h1>{producto.nombre}</h1>

          <p className="producto-detalle-descripcion">
            {producto.descripcion}
          </p>

          <h2>
            {"$ " + producto.precio}
          </h2>


          <p>
            <strong>Stock:</strong>{" "}
            {producto.stock || 0}
          </p>


          <p>
            <strong>Categoría:</strong>{" "}
            {producto.categoria ||
              "Sin categoría"}
          </p>


          <button
            type="button"
            onClick={() => {

              dispatch(
                agregarProducto({
                  id: producto._id,
                  nombre: producto.nombre,
                  descripcion:
                    producto.descripcion,
                  precio: producto.precio,
                  imagen: producto.imagen
                })
              );

              alert(
                "Producto agregado al carrito"
              );

            }}
          >
            Agregar al carrito
          </button>

        </div>

      </section>

    </main>
  );
}