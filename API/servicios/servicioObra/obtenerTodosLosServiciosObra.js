import ServicioObra from "../../modelos/servicioObra.js";

const obtenerTodosLosServiciosObra = async () => {

    const servicios = await ServicioObra.find();

    return servicios;
};

export default obtenerTodosLosServiciosObra;