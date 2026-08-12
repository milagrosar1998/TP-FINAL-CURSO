import Notificacion from "../../modelos/notificacion.js";

const obtenerNotificaciones = async () => {

  const notificaciones = await Notificacion.find()
    .sort({ _id: -1 });

  return notificaciones;
};

export default obtenerNotificaciones;