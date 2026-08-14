import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";


export default function CrudAdmin() {


  const [productos, setProductos] = useState([]);
  //guarda los productos que se muestran en la tabla

  const [productoActual, setProductoActual] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    stock: "",
    categoria: "",
    imagen: null,
  });
  //guarda lo que el admin escribe en cada campo

  const [editandoId, setEditandoId] = useState(null);
  //diferencia con el numero de id si esta creando o editando

  const [usuarios, setUsuarios] = useState([]);

  const [presupuestos, setPresupuestos] = useState([]);

  const [presupuestoSeleccionado, setPresupuestoSeleccionado] = useState(null);

  const [pedidos, setPedidos] = useState([]);

  const [notificaciones, setNotificaciones] = useState([]);

  async function cargarProductos() {

    try {
      const respuesta = await api.get("/productos");

      setProductos(respuesta.data);

    } catch (error) {

      console.log("Error al cargar productos", error);

    }

  }

  async function cargarUsuarios() {

    const token = localStorage.getItem("token");

    try {

      const respuesta = await api.get(
        "/usuarios",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setUsuarios(respuesta.data);

    } catch (error) {

      console.log("Error al cargar usuarios", error);

    }

  }
  async function cargarNotificaciones() {

    const token = localStorage.getItem("token");

    try {

      const respuesta = await api.get(
        "/notificaciones",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setNotificaciones(respuesta.data);

    } catch (error) {

      console.log("Error al cargar notificaciones", error);

    }

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
          "/productos/" + editandoId,
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

  useEffect(() => {

    cargarProductos();
    cargarUsuarios();
    cargarPresupuestos();
    cargarPedidos();
    cargarNotificaciones();

  }, []);

  const usuariosComunes = usuarios.filter(
    (usuario) => usuario.rol === "usuario"
  ); //usuarios solo con rol de usuarios

  const vendedores = usuarios.filter(
    (usuario) => usuario.rol === "vendedor"
  ); //usuarios con rol de vendedores

  function manejarCambio(evento) {
    const { name, value, files } = evento.target;

    setProductoActual({
      ...productoActual,
      [name]: name === "imagen" ? files[0] : value,
    });
  } //actualiza los productos con la nueva informacion 
  //ademas conservando la informacion que tenia


  function prepararEdicion(producto) {
    //recibe el productr sobre el que precione editar
    setProductoActual({
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      stock: producto.stock || "",
      categoria: producto.categoria || "",
      imagen: null,
    });//carga los datos que tiene dentro del formulario

    setEditandoId(producto._id);
    //al enviar sabe coon el id que producto modificar

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });//hace que la pag suba aut. cuando presiono editar
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
        "Error al eliminar el producto"
      );

    }

  }

  async function cambiarRol(id, rol) {

    const token = localStorage.getItem("token");

    try {

      await api.put(
        `/usuarios/${id}/rol`,
        { rol: rol },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      await cargarUsuarios();

    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "Error al cambiar el rol"
      );

    }

  }

  async function eliminarUsuario(id) {

    const token = localStorage.getItem("token");

    try {

      await api.delete(
        `/usuarios/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      await cargarUsuarios();

    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "Error al eliminar el usuario"
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
        "Error al cambiar el estado"
      );

    }

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
  async function marcarComoLeida(id) {

    const token = localStorage.getItem("token");

    try {

      await api.put(
        `/notificaciones/${id}/leida`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      await cargarNotificaciones();

    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "Error al marcar la notificación como leída"
      );

    }

  }
  return (
    <main className="admin-page">
      <section className="admin-header">
        <h1>Panel de administración</h1>

        <p>
          Desde este panel se podrán administrar los productos,
          los usuarios y los presupuesto.
        </p>
      </section>

      <section className="admin-table-section">

        <h2>Notificaciones</h2>

        <button
          type="button"
          className="btn-actualizar-notificaciones"
          onClick={cargarNotificaciones}
        >
          Actualizar notificaciones
        </button>

        {notificaciones.length === 0 ? (

          <p>No hay notificaciones.</p>

        ) : (

          <div>

            {notificaciones.slice(0, 5).map((notificacion) => (

              <div
                key={notificacion._id}
                className={`notificacion ${notificacion.leida ? "leida" : "no-leida"
                  }`}
              >
                <p>{notificacion.mensaje}</p>

                <span>
                  {notificacion.leida
                    ? "Leída"
                    : "No leída"}
                </span>

                {!notificacion.leida && (
                  <button
                    type="button"
                    onClick={() => marcarComoLeida(notificacion._id)}
                  >
                    Marcar como leída
                  </button>
                )}
              </div>

            ))}

            <Link
              to="/admin/notificaciones"
              className="ver-notificaciones"
            >
              Ver todas las notificaciones
            </Link>

          </div>

        )}


      </section>


      <section className="admin-form-section">
        <h2>
          {editandoId !== null
            ? "Editar producto"
            : "Agregar producto"}
        </h2>


        <form className="admin-form"
          onSubmit={guardarProducto}>
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
          {/*si hay un producto en edicion muestra editar si no agregar*/}
          <button type="submit">
            {editandoId !== null
              ? "Guardar cambios"
              : "Agregar producto"}
          </button>
        </form>
      </section>

      <section className="admin-table-section">
        <h2>Productos</h2>

        {productos.length === 0 ? (
          <p>No hay productos cargados.</p>
        ) : (
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

            {/*recorre los productos creando una fila por cada uno*/}
            <tbody>
              {productos.map((producto) => (
                <tr key={producto._id}>
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
                      onClick={() => eliminarProducto(producto._id)}
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

      <section className="admin-table-section">
        <h2>Usuarios</h2>

        <div className="tabla-contenedor">
          <table className="admin-table">

            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {usuariosComunes.map((usuario) => (
                <tr key={usuario._id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>

                  <td>
                    <button
                      type="button"
                      onClick={() => cambiarRol(usuario._id, "vendedor")}>
                      Hacer vendedor
                    </button>

                    <button
                      type="button"
                      onClick={() => eliminarUsuario(usuario._id)}>
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
        <h2>Vendedores</h2>

        <div className="tabla-contenedor">
          <table className="admin-table">

            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {vendedores.map((vendedor) => (
                <tr key={vendedor._id}>
                  <td>{vendedor.nombre}</td>
                  <td>{vendedor.email}</td>

                  <td>
                    <button
                      type="button"
                      onClick={() => cambiarRol(vendedor._id, "usuario")}>
                      Quitar vendedor
                    </button>

                    <button
                      type="button"
                      onClick={() => eliminarUsuario(vendedor._id)}>
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
        <h2>Presupuestos solicitados</h2>

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
                    {presupuesto.usuario?.nombre} {presupuesto.usuario?.apellido}
                  </td>
                  <td>{presupuesto.servicio}</td>

                  <td>
                    {presupuesto.metrosCuadrados > 0
                      ? presupuesto.metrosCuadrados
                      : "No corresponde"}
                  </td>

                  <td>{presupuesto.estado}</td>

                  <td>
                    <button
                      type="button"
                      onClick={() => setPresupuestoSeleccionado(presupuesto)}>
                      Ver
                    </button>

                    <select value={presupuesto.estado} onChange={(evento) => cambiarEstadoPresupuesto(
                      presupuesto._id,
                      evento.target.value
                    )}>
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
        {presupuestoSeleccionado && (
          <div className="detalle-presupuesto">

            <h3>Detalle del presupuesto</h3>

            <p>
              <strong>Cliente:</strong>{" "}
              {presupuestoSeleccionado.usuario?.nombre}{" "}
              {presupuestoSeleccionado.usuario?.apellido}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {presupuestoSeleccionado.usuario?.email}
            </p>

            <p>
              <strong>Teléfono:</strong>{" "}
              {presupuestoSeleccionado.usuario?.telefono || "No registrado"}
            </p>

            <p>
              <strong>Dirección de obra:</strong>{" "}
              {presupuestoSeleccionado.direccionObra}
            </p>

            <p>
              <strong>Servicio:</strong>{" "}
              {presupuestoSeleccionado.servicio}
            </p>

            <p>
              <strong>Metros cuadrados:</strong>{" "}
              {presupuestoSeleccionado.metrosCuadrados || "No corresponde"}
            </p>

            <p>
              <strong>Descripción:</strong>{" "}
              {presupuestoSeleccionado.descripcion}
            </p>

            <p>
              <strong>Estado:</strong>{" "}
              {presupuestoSeleccionado.estado}
            </p>

            <button
              type="button"
              onClick={() => setPresupuestoSeleccionado(null)}>
              Cerrar
            </button>

          </div>
        )}
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

                  <td>
                    {pedido.usuarioId?.nombre} {pedido.usuarioId?.apellido}
                  </td>

                  <td>
                    {pedido.productos.map((producto, index) => (
                      <div key={index}>
                        {producto.nombre} x {producto.cantidad}
                      </div>
                    ))}
                  </td>

                  <td>
                    $ {pedido.total}
                  </td>

                  <td>
                    {pedido.estado}
                  </td>

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


    </main>
  );
}
