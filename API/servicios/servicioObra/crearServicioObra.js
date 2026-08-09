import ServicioObra from "../../modelos/servicioObra.js";

const crearServicioObra = async (datosServicio) => {

    const servicio = await ServicioObra.create(datosServicio);

    return servicio;
};

export default crearServicioObra;