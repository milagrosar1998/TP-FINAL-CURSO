export default function CrudAdmin() {
  
  
  
  
    return (
    <main>
      <section>
        <h1>Panel de administración</h1>

        <p>
          Desde este panel se podrán administrar los productos,
          los usuarios y los presupuesto.
        </p>
      </section>

      <section>
        <h2>Resumen</h2>

        <div>
          <article>
            <h3>Productos</h3>
            <p>Administrar el catálogo de productos.</p>
            <button>Ver productos</button>
          </article>



          <article>
            <h3>Usuarios</h3>
            <p>Administrar clientes y vendedores.</p>
            <button>Ver usuarios</button>
          </article>


          <article>
            <h3>Presupuestos</h3>
            <p>Revisar las solicitudes recibidas.</p>
            <button>Ver presupuestos</button>
          </article>




          <article>
            <h3>Pedidos</h3>
            <p>Revisar las compras realizadas.</p>
            <button>Ver pedidos</button>
          </article>
        </div>
      </section>

      <section>
        <h2>Administrar productos</h2>

        <button>Agregar producto</button>

        <p>
          Los productos cargados desde este panel aparecerán
          posteriormente en el catálogo.
        </p>

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
    </main>
  );
}