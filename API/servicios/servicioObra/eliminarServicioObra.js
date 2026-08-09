import ServicioObra from "../../modelos/servicioObra.js";

const eliminarServicioObra = async (id) => {

    const servicioEliminado = await ServicioObra.findByIdAndDelete(id);

    return servicioEliminado;
};

export default eliminarServicioObra;