import { useSelector, useDispatch } from "react-redux";

import {
  eliminarProducto,
  vaciarCarrito,
} from "../../redux/carritoSlice";


export default function Carrito() {
  const carrito = useSelector(
    (state) => state.carrito.productos
  );

  const dispatch = useDispatch();


  let total = 0;


  carrito.forEach((producto) => {
    total = total + producto.precio;
    //recorremos acumulando o sumando precios
  });

  return (
    <main className="carrito-page">

      <h1>Carrito de compras</h1>

      {carrito.length === 0 ? (
        <div className="carrito-vacio">
          <i className="bi bi-cart-x"></i>

          <p>El carrito está vacío.</p>
        </div>
        //si es 0 muestra el carrito vacio
      ) : ( //si no
        <>
          <section className="carrito-productos">
            {carrito.map((producto, indice) => (
              <article className="carrito-producto" key={indice}>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  width="150"
                />
                <div className="carrito-info">
                  <h2>{producto.nombre}</h2>

                  <p>{producto.descripcion}</p>

                  <strong>
                    {"$ " + producto.precio}
                  </strong>
                </div>

                <button className="carrito-eliminar"
                  onClick={() => dispatch(eliminarProducto(indice))}
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
              Productos: {carrito.length}
            </p>

            <h3>
              {"Total: $ " + total}
            </h3>

            <div className="carrito-acciones">
              <button className="boton-vaciar"
                onClick={() => dispatch(vaciarCarrito())}
              >
                Vaciar carrito
              </button>

              <button className="boton-finalizar">
                Finalizar compra
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}