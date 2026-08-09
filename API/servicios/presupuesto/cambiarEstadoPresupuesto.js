import Presupuesto from "../../modelos/presupuesto.js";

const cambiarEstadoPresupuesto = async (id, estado) => {
    const presupuesto = await Presupuesto.findByIdAndUpdate(
        id,
        { estado: estado },
        { new: true }
    );

    return presupuesto;
};

export default cambiarEstadoPresupuesto;