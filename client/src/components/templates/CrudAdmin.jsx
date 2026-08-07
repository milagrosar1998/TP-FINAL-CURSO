import { useState } from "react";
import { products } from "../../data/products";




export default function CrudAdmin() {


  const [productos, setProductos] = useState(products);
  //guarda los productos que se muestran en la tabla

  const [productoActual, setProductoActual] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    stock: "",
    categoria: "",
    imagen: "",
  });
  //guarda lo que el admin escribe en cada campo

  const [editandoId, setEditandoId] = useState(null);
  //diferencia con el numero de id si esta creando o editando

  function manejarCambio(evento) {
    const { name, value } = evento.target;

    setProductoActual({
      ...productoActual,
      [name]: value,
    });
  } //actualiza los productos con la nueva informacion 
  //ademas conservando la informacion que tenia


  function guardarProducto(evento) {
    evento.preventDefault();
    //no recarga la pagina 
    const productoPreparado = {
      ...productoActual,
      precio: Number(productoActual.precio),
      stock: Number(productoActual.stock),
    };//convierte precio y stock a numeros

    // si hay un id guardado lo modifica si no lo crea
    if (editandoId !== null) {
      const productosActualizados = productos.map((producto) =>
        producto.id === editandoId
          ? {
            ...productoPreparado,
            id: editandoId,
          }
          : producto
      );

      setProductos(productosActualizados);
      setEditandoId(null);
    } else {
      const nuevoProducto = {
        ...productoPreparado,
        id: Date.now(),//Date.now crea un numero temporal
      };
      //si no estamos editando crea uno nuevo 

      setProductos([...productos, nuevoProducto]);
    }
    //agrega al final el nuevo producto

    setProductoActual({
      nombre: "",
      precio: "",
      descripcion: "",
      stock: "",
      categoria: "",
      imagen: "",
    });//despues de guardar limpia el formulario
  }

  function prepararEdicion(producto) {
    //recibe el productr sobre el que precione editar
    setProductoActual({
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      stock: producto.stock || "",
      categoria: producto.categoria || "",
      imagen: producto.imagen,
    });//carga los datos que tiene dentro del formulario

    setEditandoId(producto.id);
    //al enviar sabe coon el id que producto modificar
  }


  function eliminarProducto(id) {
    const productosActualizados = productos.filter(
      (producto) => producto.id !== id
    );
    //elimina el producto con ese id

    setProductos(productosActualizados);
  }












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
        <h2>
          {editandoId !== null
            ? "Editar producto"
            : "Agregar producto"}
        </h2>


        <form onSubmit={guardarProducto}>
          <div>
            <label htmlFor="nombre">Nombre</label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              value={productoActual.nombre}
              onChange={manejarCambio}
              required
            />
          </div>

          <div>
            <label htmlFor="precio">Precio</label>

            <input
              id="precio"
              name="precio"
              type="number"
              min="0"
              value={productoActual.precio}
              onChange={manejarCambio}
              required
            />
          </div>

          <div>
            <label htmlFor="stock">Stock</label>

            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              value={productoActual.stock}
              onChange={manejarCambio}
              required
            />
          </div>

          <div>
            <label htmlFor="categoria">Categoría</label>

            <input
              id="categoria"
              name="categoria"
              type="text"
              value={productoActual.categoria}
              onChange={manejarCambio}
              required
            />
          </div>

          <div>
            <label htmlFor="descripcion">Descripción</label>

            <textarea
              id="descripcion"
              name="descripcion"
              value={productoActual.descripcion}
              onChange={manejarCambio}
              required
            />
          </div>

          <div>
            <label htmlFor="imagen">Dirección de la imagen</label>

            <input
              id="imagen"
              name="imagen"
              type="text"
              value={productoActual.imagen}
              onChange={manejarCambio}
              required
            />
          </div>
          {/*si hay un producto en edicion muestra editar si no agregar*/}
          <button type="submit">
            {editandoId !== null
              ? "Guardar cambios"
              : "Agregar producto"}
          </button>
        </form>
      </section>

      <section>
        <h2>Productos</h2>

        {productos.length === 0 ? (
          <p>No hay productos cargados.</p>
        ) : (
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

{/*recorre los productos creando una fila por cada uno*/}
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  {/*key identidica cada fila*/}
                  <td>{producto.nombre}</td>
                  <td>{"$ " + producto.precio}</td>
                  <td>{producto.stock || 0}</td>
                  <td>
                    {producto.categoria || "Sin categoría"}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => prepararEdicion(producto)}
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>




    </main>
  );
}