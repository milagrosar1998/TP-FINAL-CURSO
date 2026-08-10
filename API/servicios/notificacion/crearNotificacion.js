import Notificacion from "../../modelos/notificacion.js";

const crearNotificacion = async (datosNotificacion) => {

    const notificacion = await Notificacion.create(datosNotificacion);

    return notificacion;
};

export default crearNotificacion;