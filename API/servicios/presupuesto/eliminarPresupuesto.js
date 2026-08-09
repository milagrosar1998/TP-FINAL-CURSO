import Presupuesto from "../../modelos/presupuesto.js";

const eliminarPresupuesto = async (id) => {

    const presupuestoEliminado = await Presupuesto.findByIdAndDelete(id);

    return presupuestoEliminado;
};

export default eliminarPresupuesto;