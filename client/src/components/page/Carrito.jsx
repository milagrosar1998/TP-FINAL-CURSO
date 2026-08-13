import { useSelector, useDispatch } from "react-redux";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import {
  eliminarProducto,
  vaciarCarrito,
  aumentarCantidad,
  disminuirCantidad
} from "../../redux/carritoSlice";


export default function Carrito() {

  const carrito = useSelector(
    (state) => state.carrito.productos
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();


  // Calculamos el total teniendo en cuenta la cantidad
  const total = carrito.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  );


  // Cantidad TOTAL de unidades
  const cantidadProductos = carrito.reduce(
    (acumulador, producto) =>
      acumulador + producto.cantidad,
    0
  );


  async function finalizarCompra() {

    const token = localStorage.getItem("token");


    if (!token) {

      alert("Debes iniciar sesión para finalizar la compra");

      navigate("/login");

      return;

    }


    try {

      const productosPedido = carrito.map((producto) => ({

        productoId: producto.id,

        nombre: producto.nombre,

        precio: producto.precio,

        cantidad: producto.cantidad

      }));


      await api.post(
        "/pedidos",
        {
          productos: productosPedido,
          total: total
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );


      alert("Compra realizada correctamente");


      dispatch(vaciarCarrito());


      navigate("/usuario");


    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "Error al realizar la compra"
      );

    }

  }


  return (

    <main className="carrito-page">

      <h1>Carrito de compras</h1>


      {carrito.length === 0 ? (

        <div className="carrito-vacio">

          <i className="bi bi-cart-x"></i>

          <p>El carrito está vacío.</p>

        </div>

      ) : (

        <>

          <section className="carrito-productos">

            {carrito.map((producto) => (

              <article
                className="carrito-producto"
                key={producto.id}
              >

                <img
                  src={"http://localhost:3000" + producto.imagen}
                  alt={producto.nombre}
                  width="150"
                />


                <div className="carrito-info">

                  <h2>{producto.nombre}</h2>


                  <p>{producto.descripcion}</p>


                  <strong>
                    {"$ " + producto.precio + " c/u"}
                  </strong>


                  <div className="contador-carrito">

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          disminuirCantidad(producto.id)
                        )
                      }
                    >
                      -
                    </button>


                    <span>
                      {producto.cantidad}
                    </span>


                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          aumentarCantidad(producto.id)
                        )
                      }
                    >
                      +
                    </button>

                  </div>


                  <p>
                    Subtotal: ${" "}
                    {producto.precio * producto.cantidad}
                  </p>

                </div>


                <button
                  className="carrito-eliminar"
                  onClick={() =>
                    dispatch(
                      eliminarProducto(producto.id)
                    )
                  }
                >
                  <i className="bi bi-trash3"></i>

                  Eliminar
                </button>

              </article>

            ))}

          </section>


          <section className="carrito-resumen">

            <h2>Resumen de compra</h2>


            <p>
              Productos: {cantidadProductos}
            </p>


            <h3>
              {"Total: $ " + total}
            </h3>


            <div className="carrito-acciones">

              <button
                className="boton-vaciar"
                onClick={() =>
                  dispatch(vaciarCarrito())
                }
              >
                Vaciar carrito
              </button>


              <button
                className="boton-finalizar"
                onClick={finalizarCompra}
              >
                Finalizar compra
              </button>

            </div>

          </section>

        </>

      )}

    </main>

  );
}