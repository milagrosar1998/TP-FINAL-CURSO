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
    <section>
      <h1>Carrito de compras</h1>

      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
        //si es 0 muestra el carrito vacio
      ) : ( //si no
        <>
          {carrito.map((producto, indice) => (
            <article key={indice}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                width="150"
              />

              <h2>{producto.nombre}</h2>

              <p>{producto.descripcion}</p>

              <p>{"$ " + producto.precio}</p>

              <button
                onClick={() => dispatch(eliminarProducto(indice))}
              >
                Eliminar
              </button>


            </article>
          ))}

          <h2>{"Total: $ " + total}</h2>

          <button
            onClick={() => dispatch(vaciarCarrito())}
          >
            Vaciar carrito
          </button>

          <button>
            Finalizar compra
          </button>
        </>
      )}
    </section>
  );
}