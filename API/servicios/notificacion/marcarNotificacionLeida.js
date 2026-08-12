import Notificacion from "../../modelos/notificacion.js";

const marcarNotificacionLeida = async (id) => {

  const notificacion = await Notificacion.findByIdAndUpdate(
    id,
    { leida: true },
    { new: true }
  );

  return notificacion;
};

export default marcarNotificacionLeida;