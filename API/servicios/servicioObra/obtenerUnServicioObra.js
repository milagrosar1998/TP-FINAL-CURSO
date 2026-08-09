import ServicioObra from "../../modelos/servicioObra.js";

const obtenerUnServicioObra = async (id) => {

    const servicio = await ServicioObra.findById(id);

    return servicio;
};

export default obtenerUnServicioObra;