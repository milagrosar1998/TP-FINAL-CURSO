import Presupuesto from "../../modelos/presupuesto.js";

const obtenerTodosLosPresupuestos = async () => {

    const presupuestos = await Presupuesto.find()
        .populate("usuario", "nombre apellido email telefono");

    return presupuestos;
};

export default obtenerTodosLosPresupuestos;