import Presupuesto from "../../modelos/presupuesto.js";

const obtenerMisPresupuestos = async (usuarioId) => {

    const presupuestos = await Presupuesto.find({
        usuario: usuarioId
    });

    return presupuestos;
};

export default obtenerMisPresupuestos;