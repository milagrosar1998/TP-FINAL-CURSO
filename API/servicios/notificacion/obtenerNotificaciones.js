import Notificacion from "../../modelos/notificacion.js";

const obtenerNotificaciones = async () => {

    const notificaciones = await Notificacion.find();

    return notificaciones;
};

export default obtenerNotificaciones;