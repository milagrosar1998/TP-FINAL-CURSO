import obtenerNotificaciones from "../servicios/notificacion/obtenerNotificaciones.js";

export const obtenerNotificacionesControl = async (req, res) => {

    try {

        const notificaciones = await obtenerNotificaciones();

        res.status(200).json(notificaciones);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener las notificaciones",
            error: error.message
        });

    }

};
