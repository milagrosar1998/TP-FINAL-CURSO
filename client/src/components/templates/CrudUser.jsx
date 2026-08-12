import { useEffect, useState } from "react";
import api from "../../services/api";

export default function CrudUser() {
  const [pedidos, setPedidos] = useState([]);

  const [presupuestos, setPresupuestos] = useState([]);

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const [datosUsuario, setDatosUsuario] = useState({
    nombre: usuario?.nombre || "",
    apellido: usuario?.apellido || "",
    email: usuario?.email || "",
    telefono: usuario?.telefono || "",
    direccion: usuario?.direccion || "",
    ciudad: usuario?.ciudad || "",
    provincia: usuario?.provincia || ""
  });

  const [editandoDatos, setEditandoDatos] = useState(false);


  async function cargarMisPedidos() {

    const token = localStorage.getItem("token");

    try {

      const respuesta = await api.get(
        "/mis-pedidos",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setPedidos(respuesta.data);

    } catch (error) {

      console.log(
        "Error al cargar mis pedidos",
        error
      );

    }

  }
  async function cargarMisPresupuestos() {

    const token = localStorage.getItem("token");

    try {

      const respuesta = await api.get(
        "/mis-presupuestos",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setPresupuestos(respuesta.data);

    } catch (error) {

      console.log(
        "Error al cargar mis presupuestos",
        error
      );

    }

  }

  useEffect(() => {
    cargarMisPedidos();
    cargarMisPresupuestos();
  }, []);
  function manejarCambioUsuario(evento) {

    const { name, value } = evento.target;

    setDatosUsuario({
      ...datosUsuario,
      [name]: value
    });

  }

  async function guardarDatosUsuario(evento) {

    evento.preventDefault();

    const token = localStorage.getItem("token");

    try {

      const respuesta = await api.put(
        `/usuarios/${usuario._id}`,
        datosUsuario,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      localStorage.setItem(
        "usuario",
        JSON.stringify(respuesta.data)
      );

      setEditandoDatos(false);

      alert("Datos actualizados correctamente");

    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "Error al actualizar los datos"
      );

    }

  }


  return (
    <main>
      <section>
        <h1>Mi cuenta</h1>

        <p>
          Desde acá podrás consultar tus compras,
          presupuestos y datos personales.
        </p>
      </section>

      <section className="user-section">

        <h2>Mis datos</h2>

        <div className="pedido-card">

          {!editandoDatos ? (
            <>
              <p>
                <strong>Nombre:</strong>{" "}
                {datosUsuario.nombre} {datosUsuario.apellido}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {datosUsuario.email}
              </p>

              <p>
                <strong>Teléfono:</strong>{" "}
                {datosUsuario.telefono || "No registrado"}
              </p>

              <p>
                <strong>Dirección:</strong>{" "}
                {datosUsuario.direccion || "No registrada"}
              </p>

              <p>
                <strong>Ciudad:</strong>{" "}
                {datosUsuario.ciudad || "No registrada"}
              </p>

              <p>
                <strong>Provincia:</strong>{" "}
                {datosUsuario.provincia || "No registrada"}
              </p>

              <button
                type="button"
                onClick={() => setEditandoDatos(true)}
              >
                Editar mis datos
              </button>
            </>
          ) : (

            <form
              className="datos-form"
              onSubmit={guardarDatosUsuario}
            >
              <div className="datos-campo">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={datosUsuario.email}
                  onChange={manejarCambioUsuario}
                />
              </div>

              <div className="datos-campo">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="text"
                  value={datosUsuario.telefono}
                  onChange={manejarCambioUsuario}
                />
              </div>

              <div className="datos-campo">
                <label htmlFor="direccion">Dirección</label>
                <input
                  id="direccion"
                  name="direccion"
                  type="text"
                  value={datosUsuario.direccion}
                  onChange={manejarCambioUsuario}
                />
              </div>

              <div className="datos-campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input
                  id="ciudad"
                  name="ciudad"
                  type="text"
                  value={datosUsuario.ciudad}
                  onChange={manejarCambioUsuario}
                />
              </div>

              <div className="datos-campo">
                <label htmlFor="provincia">Provincia</label>
                <input
                  id="provincia"
                  name="provincia"
                  type="text"
                  value={datosUsuario.provincia}
                  onChange={manejarCambioUsuario}
                />
              </div>

              <div className="datos-botones">
                <button
                  type="submit"
                  className="boton-guardar"
                >
                  Guardar cambios
                </button>

                <button
                  type="button"
                  className="boton-cancelar"
                  onClick={() => setEditandoDatos(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>

          )}

        </div>

      </section>

      <section className="user-section">
        <h2>Mis compras</h2>

        {pedidos.length === 0 ? (
          <p>Todavía no tenés compras realizadas.</p>
        ) : (
          <div className="pedidos-grid">

            {pedidos.map((pedido) => (

              <article
                key={pedido._id}
                className="pedido-card"
              >

                <div className="pedido-card-header">
                  <h3>Pedido</h3>

                  <span
                    className={`estado estado-${pedido.estado.replaceAll(" ", "-")}`}
                  >
                    {pedido.estado}
                  </span>
                </div>

                <p>
                  <strong>Total:</strong> $ {pedido.total}
                </p>

                <div className="pedido-productos">

                  {pedido.productos.map((producto, indice) => (

                    <p key={indice}>
                      {producto.nombre} x {producto.cantidad}
                    </p>

                  ))}

                </div>

              </article>

            ))}

          </div>
        )}
      </section>

      <section className="user-section">

        <h2>Mis presupuestos</h2>

        {presupuestos.length === 0 ? (

          <p>
            Todavía no tenés presupuestos solicitados.
          </p>

        ) : (

          <div className="pedidos-grid">

            {presupuestos.map((presupuesto) => (

              <article
                key={presupuesto._id}
                className="pedido-card"
              >

                <div className="pedido-card-header">

                  <h3>
                    {presupuesto.servicio}
                  </h3>

                  <span
                    className={`estado estado-${presupuesto.estado.replaceAll(" ", "-")}`}
                  >
                    {presupuesto.estado}
                  </span>

                </div>

                <p>
                  <strong>Dirección:</strong>{" "}
                  {presupuesto.direccion}
                </p>

                {presupuesto.metrosCuadrados && (
                  <p>
                    <strong>Metros cuadrados:</strong>{" "}
                    {presupuesto.metrosCuadrados}
                  </p>
                )}

                <p>
                  <strong>Descripción:</strong>{" "}
                  {presupuesto.descripcion}
                </p>

              </article>

            ))}

          </div>

        )}

      </section>
    </main>
  );
}