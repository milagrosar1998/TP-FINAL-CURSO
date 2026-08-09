import Presupuesto from "../../modelos/presupuesto.js";

const obtenerUnPresupuesto = async (id) => {

    const presupuesto = await Presupuesto.findById(id);

    return presupuesto;
};

export default obtenerUnPresupuesto;