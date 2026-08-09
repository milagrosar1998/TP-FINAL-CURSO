import Presupuesto from "../../modelos/presupuesto.js";

const crearPresupuesto = async (datosPresupuesto) => {

    const presupuesto = await Presupuesto.create(datosPresupuesto);

    return presupuesto;
};

export default crearPresupuesto;