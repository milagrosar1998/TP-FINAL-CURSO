import { useEffect, useState } from "react";
import api from "../../services/api";

export default function CrudVendor() {

  const [productos, setProductos] = useState([]);

  const [productoActual, setProductoActual] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    stock: "",
    categoria: "",
    imagen: null
  });

  const [pedidos, setPedidos] = useState([]);

  const [editandoId, setEditandoId] = useState(null);

  const [presupuestos, setPresupuestos] = useState([]);


  async function cargarProductos() {

    try {

      const respuesta = await api.get("/productos");

      const usuarioGuardado = localStorage.getItem("usuario");
      const usuario = JSON.parse(usuarioGuardado);

      const productosDelVendedor = respuesta.data.filter(
        (producto) =>
          producto.vendedorId === usuario._id
      );

      setProductos(productosDelVendedor);

    } catch (error) {

      console.log("Error al cargar productos", error);
    }
  }

  async function cargarPedidos() {

    const token = localStorage.getItem("token");

    try {

      const respuesta = await api.get(
        "/pedidos",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setPedidos(respuesta.data);

    } catch (error) {

      console.log("Error al cargar pedidos", error);

    }
  }

  async function cargarPresupuestos() {

    const token = localStorage.getItem("token");

    try {

      const respuesta = await api.get(
        "/presupuestos",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setPresupuestos(respuesta.data);

    } catch (error) {

      console.log("Error al cargar presupuestos", error);

    }

  }

  useEffect(() => {

    cargarProductos();
    cargarPedidos();
    cargarPresupuestos();


  }, []);


  function manejarCambio(evento) {

    const { name, value, files } = evento.target;

    setProductoActual({
      ...productoActual,
      [name]: name === "imagen"
        ? files[0]
        : value

    });

  }


  async function guardarProducto(evento) {

    evento.preventDefault();

    const datosFormulario = new FormData();

    datosFormulario.append("nombre", productoActual.nombre);
    datosFormulario.append("precio", productoActual.precio);
    datosFormulario.append("descripcion", productoActual.descripcion);
    datosFormulario.append("stock", productoActual.stock);
    datosFormulario.append("categoria", productoActual.categoria);

    if (productoActual.imagen) {
      datosFormulario.append("imagen", productoActual.imagen);
    }

    const token = localStorage.getItem("token");


    try {

      if (editandoId !== null) {

        await api.put(
          "/productos/" +  editandoId ,
          datosFormulario,
          {
            headers: {
              Authorization: "Bearer " + token
            }
          }
        );

      } else {

        await api.post(
          "/productos",
          datosFormulario,
          {
            headers: {
              Authorization: "Bearer " + token
            }
          }
        );

      }

      await cargarProductos();

      setEditandoId(null);

      setProductoActual({
        nombre: "",
        precio: "",
        descripcion: "",
        stock: "",
        categoria: "",
        imagen: null
      });
      alert(
        editandoId !== null
          ? "Producto actualizado correctamente"
          : "Producto agregado correctamente"
      );
    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.mensaje ||
        "Error al guardar el producto"
      );
    }

  }

  function prepararEdicion(producto) {

    setProductoActual({
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      stock: producto.stock || "",
      categoria: producto.categoria || "",
      imagen: null
    });

    setEditandoId(producto._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  async function cambiarEstadoPedido(id, estado) {

    const token = localStorage.getItem("token");

    try {

      await api.put(
        `/pedidos/${id}/estado`,
        { estado: estado },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      await cargarPedidos();

    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "Error al cambiar el estado del pedido"
      );

    }

  }

  async function cambiarEstadoPresupuesto(id, estado) {

    const token = localStorage.getItem("token");

    try {

      await api.put(
        `/presupuestos/${id}/estado`,
        { estado: estado },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      await cargarPresupuestos();

    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "Error al cambiar el estado del presupuesto"
      );

    }

  }

  async function eliminarProducto(id) {

    const token = localStorage.getItem("token");

    try {

      await api.delete(
        `/productos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      await cargarProductos();

    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "No tienes permiso para eliminar este producto"
      );

    }

  }

  return (

    <main className="admin-page">

      <section className="admin-header">

        <h1>Panel del vendedor</h1>

        <p>
          Desde este panel se podrán gestionar productos,
          pedidos y solicitudes de presupuesto.
        </p>

      </section>


      <section className="admin-form-section">

        <h2>
          {editandoId !== null
            ? "Editar producto"
            : "Agregar producto"}
        </h2>

        <form
          className="admin-form"
          onSubmit={guardarProducto}
        >

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
            <label htmlFor="imagen">Imagen del producto</label>
            <input
              id="imagen"
              name="imagen"
              type="file"
              accept="image/*"

              onChange={manejarCambio}
              required={editandoId === null}
            />
          </div>

          <button type="submit">
            {editandoId !== null
              ? "Guardar cambios"
              : "Agregar producto"}
          </button>

        </form>

      </section>


      <section className="admin-table-section">

        <h2>Productos</h2>

        <div className="tabla-contenedor">

          <table className="admin-table">

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

              {productos.map((producto) => (

                <tr key={producto._id}>

                  <td>{producto.nombre}</td>
                  <td>$ {producto.precio}</td>
                  <td>{producto.stock || 0}</td>
                  <td>{producto.categoria || "Sin categoría"}</td>

                  <td>

                    <button
                      type="button"
                      onClick={() => prepararEdicion(producto)}
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      onClick={() => eliminarProducto(producto._id)}
                    >
                      Eliminar
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>


      <section className="admin-table-section">

        <h2>Pedidos</h2>

        <div className="tabla-contenedor">

          <table className="admin-table">

            <thead>
              <tr>
                <th>Cliente</th>
                <th>Productos</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>

              {pedidos.map((pedido) => (

                <tr key={pedido._id}>

                  <td>{pedido.usuario}</td>

                  <td>
                    {pedido.productos.map((producto, index) => (
                      <div key={index}>
                        {producto.nombre} x {producto.cantidad}
                      </div>
                    ))}
                  </td>

                  <td>$ {pedido.total}</td>

                  <td>{pedido.estado}</td>

                  <td>

                    <select
                      value={pedido.estado}
                      onChange={(evento) =>
                        cambiarEstadoPedido(
                          pedido._id,
                          evento.target.value
                        )
                      }
                    >
                      <option value="pendiente">Pendiente</option>
                      <option value="en preparacion">En preparación</option>
                      <option value="enviado">Enviado</option>
                      <option value="entregado">Entregado</option>
                      <option value="cancelado">Cancelado</option>
                    </select>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>


      <section className="admin-table-section">

        <h2>Presupuestos</h2>

        <div className="tabla-contenedor">

          <table className="admin-table">

            <thead>
              <tr>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Metros²</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>

              {presupuestos.map((presupuesto) => (

                <tr key={presupuesto._id}>

                  <td>
                    {presupuesto.nombre} {presupuesto.apellido}
                  </td>

                  <td>{presupuesto.servicio}</td>

                  <td>
                    {presupuesto.metrosCuadrados > 0
                      ? presupuesto.metrosCuadrados
                      : "No corresponde"}
                  </td>

                  <td>{presupuesto.estado}</td>

                  <td>
                    <select
                      value={presupuesto.estado}
                      onChange={(evento) =>
                        cambiarEstadoPresupuesto(
                          presupuesto._id,
                          evento.target.value
                        )
                      }
                    >
                      <option value="pendiente">Pendiente</option>
                      <option value="en revision">En revisión</option>
                      <option value="enviado">Enviado</option>
                      <option value="aceptado">Aceptado</option>
                      <option value="en ejecucion">En ejecución</option>
                      <option value="finalizado">Finalizado</option>
                    </select>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </main>

  );
}