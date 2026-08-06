export default function CrudVendor() {
  return (
    <main>
      <section>
        <h1>Panel del vendedor</h1>

        <p>
          Desde este panel se podrán gestionar productos,
          pedidos y solicitudes de presupuesto.
        </p>
      </section>

      <section>
        <h2>Gestión de productos</h2>

        <button>Agregar producto</button>

        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Producto de ejemplo</td>
              <td>$ 10.000</td>
              <td>10</td>
              <td>Placas</td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Pedidos</h2>

        <p>
          compras realizadas por los clientes.
        </p>
      </section>

      <section>
        <h2>Presupuestos</h2>

        <p>
          Acá se mostrarán las solicitudes de presupuesto recibidas.
        </p>
      </section>
    </main>
  );
}