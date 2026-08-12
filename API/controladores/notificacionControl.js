import obtenerNotificaciones from "../servicios/notificacion/obtenerNotificaciones.js";
import marcarNotificacionLeida from "../servicios/notificacion/marcarNotificacionLeida.js";

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
export const marcarNotificacionLeidaControl = async (req, res) => {

  try {

    const id = req.params.id;

    const notificacion = await marcarNotificacionLeida(id);

    if (notificacion === null) {
      return res.status(404).json({
        mensaje: "Notificación no encontrada"
      });
    }

    res.status(200).json({
      mensaje: "Notificación marcada como leída",
      notificacion: notificacion
    });

  } catch (error) {

    res.status(500).json({
      mensaje: "Error al actualizar la notificación",
      error: error.message
    });

  }

};