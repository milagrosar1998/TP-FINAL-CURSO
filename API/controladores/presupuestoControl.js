import crearPresupuesto from "../servicios/presupuesto/crearPresupuesto.js";
import obtenerTodosLosPresupuestos from "../servicios/presupuesto/obtenerTodosLosPresupuestos.js";
import obtenerUnPresupuesto from "../servicios/presupuesto/obtenerUnPresupuesto.js";
import eliminarPresupuesto from "../servicios/presupuesto/eliminarPresupuesto.js";
import obtenerMisPresupuestos from "../servicios/presupuesto/obtenerMisPresupuestos.js";
import cambiarEstadoPresupuesto from "../servicios/presupuesto/cambiarEstadoPresupuesto.js";
import crearNotificacion from "../servicios/notificacion/crearNotificacion.js";

export const crearPresupuestoControl = async (req, res) => {

    try {
        const datosPresupuesto = {
            ...req.body,
            usuario: req.usuario.id
        };
        const presupuesto = await crearPresupuesto(datosPresupuesto);

        res.status(201).json(presupuesto);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear el presupuesto",
            error: error.message
        });

    }

};

export const obtenerTodosLosPresupuestosControl = async (req, res) => {

    try {

        const presupuestos = await obtenerTodosLosPresupuestos();

        res.status(200).json(presupuestos);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener los presupuestos",
            error: error.message
        });

    }

};

export const obtenerUnPresupuestoControl = async (req, res) => {

    try {
        const id = req.params.id;

        const presupuesto = await obtenerUnPresupuesto(id);

        if (presupuesto === null) {

            return res.status(404).json({
                mensaje: "No se encontró el presupuesto"
            });

        } else {

            res.status(200).json(presupuesto);

        }

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el presupuesto",
            error: error.message
        });

    }

};
export const eliminarPresupuestoControl = async (req, res) => {

    try {

        const id = req.params.id;

        const presupuestoEliminado = await eliminarPresupuesto(id);

        if (presupuestoEliminado === null) {

            return res.status(404).json({
                mensaje: "No se encontró el presupuesto"
            });

        } else {

            res.status(200).json({
                mensaje: "Presupuesto eliminado correctamente",
                presupuesto: presupuestoEliminado
            });

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al eliminar el presupuesto",
            error: error.message
        });

    }

};

export const obtenerMisPresupuestosControl = async (req, res) => {

    try {
        const usuarioId = req.usuario.id;

        const presupuestos = await obtenerMisPresupuestos(usuarioId);

        res.status(200).json(presupuestos);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener tus presupuestos",
            error: error.message
        });

    }

};

export const cambiarEstadoPresupuestoControl = async (req, res) => {

    try {

        const id = req.params.id;
        const { estado } = req.body;
        if (
            estado !== "pendiente" &&
            estado !== "en revision" &&
            estado !== "enviado" &&
            estado !== "aceptado" &&
            estado !== "en ejecucion" &&
            estado !== "finalizado"
        ) {
            return res.status(400).json({
                mensaje: "Estado no válido"
            });
        }

        const presupuesto = await cambiarEstadoPresupuesto(id, estado);

        if (presupuesto === null) {
            return res.status(404).json({
                mensaje: "Presupuesto no encontrado"
            });
        }

        if (req.usuario.rol === "vendedor") {

            await crearNotificacion({
                mensaje: `Un vendedor cambió el estado del presupuesto de ${presupuesto.nombre} ${presupuesto.apellido} a ${estado}`,
                tipo: "presupuesto"
            });

        }
        res.status(200).json({
            mensaje: "Estado actualizado",
            presupuesto: presupuesto
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al cambiar el estado",
            error: error.message
        });

    }

};