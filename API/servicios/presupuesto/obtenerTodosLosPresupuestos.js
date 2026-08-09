import Presupuesto from "../../modelos/presupuesto.js";

const obtenerTodosLosPresupuestos = async () => {

    const presupuestos = await Presupuesto.find();

    return presupuestos;
};

export default obtenerTodosLosPresupuestos;