import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Notificaciones() {

    const [notificaciones, setNotificaciones] = useState([]);

    async function cargarNotificaciones() {

        try {

            const token = localStorage.getItem("token");

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

            console.error(
                "Error al cargar notificaciones",
                error
            );

        }

    }


    async function marcarComoLeida(id) {

        try {

            const token = localStorage.getItem("token");

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

            console.error(
                "Error al marcar notificación",
                error
            );

        }

    }


    useEffect(() => {
        cargarNotificaciones();
    }, []);


    return (

        <main className="admin-page">

            <section className="admin-header">

                <h1>Notificaciones</h1>

                <p>
                    Historial de acciones realizadas por los vendedores.
                </p>

                <Link to="/admin">
                    Volver al panel
                </Link>

            </section>


            <section className="admin-table-section">

                {notificaciones.length === 0 ? (

                    <p>No hay notificaciones.</p>

                ) : (

                    notificaciones.map((notificacion) => (

                        <div
                            key={notificacion._id}
                            className="notificacion"
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
                                    onClick={() =>
                                        marcarComoLeida(notificacion._id)
                                    }
                                >
                                    Marcar como leída
                                </button>

                            )}

                        </div>

                    ))

                )}

            </section>

        </main>

    );
}