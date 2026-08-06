


export default function Carrito({
  carrito,
  eliminarDelCarrito,
  vaciarCarrito,


}) 



{
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
                onClick={() => eliminarDelCarrito(indice)}
              >
                Eliminar
              </button>
            </article>
          ))}

          <h2>{"Total: $ " + total}</h2>

          <button onClick={vaciarCarrito}>
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