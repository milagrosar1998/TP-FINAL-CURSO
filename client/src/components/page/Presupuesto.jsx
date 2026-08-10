import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";


export default function Presupuesto() {

  const navigate = useNavigate();

  const [presupuesto, setPresupuesto] = useState({
    servicio: "",
    direccion: "",
    metrosCuadrados: "",
    descripcion: "",
  });//guarda lo q usuario escribe

  function manejarCambio(evento) {
    const { name, value } = evento.target;

    setPresupuesto({
      ...presupuesto,
      [name]: value,
    });
  }

  async function enviarPresupuesto(evento) {

    evento.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debes iniciar sesión para solicitar un presupuesto");
      navigate("/login");
      return;
    }

    try {

      await api.post(
        "/presupuestos",
        {
          servicio: presupuesto.servicio,
          direccionObra: presupuesto.direccion,
          metrosCuadrados: Number(presupuesto.metrosCuadrados) || 0,
          descripcion: presupuesto.descripcion
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Solicitud de presupuesto enviada");

      setPresupuesto({
        servicio: "",
        direccion: "",
        metrosCuadrados: "",
        descripcion: "",
      });

    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "Error al enviar el presupuesto"
      );

    }
  }

  return (

    <main className="presupuesto-page">

      <section className="presupuesto-contenedor">
        <h1>Solicitar presupuesto</h1>

        <p className="presupuesto-intro">
          Contanos sobre tu proyecto y nos comunicaremos con vos
          para brindarte una propuesta personalizada.
        </p>

        <form className="presupuesto-form"
          onSubmit={enviarPresupuesto}>

          <div>
            <label htmlFor="servicio">Servicio</label>

            <select
              id="servicio"
              name="servicio"
              value={presupuesto.servicio}
              onChange={manejarCambio}
              required
            >
              <option value="">Seleccioná un servicio</option>
              <option value="Construcción en seco">
                Construcción en seco
              </option>
              <option value="Remodelación">
                Remodelación
              </option>
              <option value="Electricidad">
                Electricidad
              </option>
              <option value="Pintura">
                Pintura
              </option>
              <option value="Soldaduras">
                Soldaduras
              </option>
              <option value="Reparaciones">
                Reparaciones y mantenimiento
              </option>
              <option value="Otro">
                Otro trabajo
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="direccion">
              Dirección de la obra
            </label>

            <input
              id="direccion"
              name="direccion"
              type="text"
              value={presupuesto.direccion}
              onChange={manejarCambio}
              required
            />
          </div>

          <div>
            <label htmlFor="metrosCuadrados">
              Metros cuadrados
            </label>

            <input
              id="metrosCuadrados"
              name="metrosCuadrados"
              type="number"
              min="0"
              value={presupuesto.metrosCuadrados}
              onChange={manejarCambio}
            />
          </div>

          <div>
            <label htmlFor="descripcion">
              Descripción del trabajo
            </label>

            <textarea
              id="descripcion"
              name="descripcion"
              value={presupuesto.descripcion}
              onChange={manejarCambio}
              required
            />
          </div>

          <button type="submit">
            Enviar solicitud
          </button>
        </form>
      </section>
    </main>
  );
}