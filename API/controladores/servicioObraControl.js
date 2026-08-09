import crearServicioObra from "../servicios/servicioObra/crearServicioObra.js";
import obtenerTodosLosServiciosObra from "../servicios/servicioObra/obtenerTodosLosServiciosObra.js";
import obtenerUnServicioObra from "../servicios/servicioObra/obtenerUnServicioObra.js";
import eliminarServicioObra from "../servicios/servicioObra/eliminarServicioObra.js";

export const crearServicioObraControl = async (req, res) => {

    try {

        const servicio = await crearServicioObra(req.body);

        res.status(201).json(servicio);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al crear el servicio",
            error: error.message
        });

    }

};
export const obtenerTodosLosServiciosObraControl = async (req, res) => {

    try {

        const servicios = await obtenerTodosLosServiciosObra();

        res.status(200).json(servicios);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener los servicios",
            error: error.message
        });

    }

};
export const obtenerUnServicioObraControl = async (req, res) => {

    try {

        const id = req.params.id;

        const servicio = await obtenerUnServicioObra(id);

        if (servicio === null) {

            return res.status(404).json({
                mensaje: "No se encontró el servicio"
            });

        } else {

            res.status(200).json(servicio);

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener el servicio",
            error: error.message
        });

    }

};
export const eliminarServicioObraControl = async (req, res) => {

    try {

        const id = req.params.id;

        const servicioEliminado = await eliminarServicioObra(id);

        if (servicioEliminado === null) {

            return res.status(404).json({
                mensaje: "No se encontró el servicio"
            });

        } else {

            res.status(200).json({
                mensaje: "Servicio eliminado correctamente",
                servicio: servicioEliminado
            });

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al eliminar el servicio",
            error: error.message
        });

    }

};