import crearPedido from "../servicios/pedido/crearPedido.js";
import obtenerTodosLosPedidos from "../servicios/pedido/obtenerTodosLosPedidos.js";
import obtenerUnPedido from "../servicios/pedido/obtenerUnPedido.js";
import actualizarPedido from "../servicios/pedido/actualizarPedido.js";
import eliminarPedido from "../servicios/pedido/eliminarPedido.js";
import obtenerMisPedidos from "../servicios/pedido/obtenerMisPedidos.js";
import cambiarEstadoPedido from "../servicios/pedido/cambiarEstadoPedido.js";


export const crearPedidoControl = async (req, res) => {

    try {
        const datosPedido = {
            ...req.body,
            usuarioId: req.usuario.id
        };

        const pedido = await crearPedido(datosPedido);

        res.status(201).json(pedido);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al crear el pedido",
            error: error.message
        });

    }

};

export const obtenerTodosLosPedidosControl = async (req, res) => {

    try {

        const pedidos = await obtenerTodosLosPedidos();

        res.status(200).json(pedidos);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener los pedidos",
            error: error.message
        });

    }

};

export const obtenerUnPedidoControl = async (req, res) => {

    try {

        const id = req.params.id;

        const pedido = await obtenerUnPedido(id);

        if (pedido === null) {

            return res.status(404).json({
                mensaje: "No se encontró el pedido"
            });

        } else {

            res.status(200).json(pedido);

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener el pedido",
            error: error.message
        });

    }

};

export const actualizarPedidoControl = async (req, res) => {

    try {

        const id = req.params.id;
        const datosActualizados = req.body;

        const pedidoActualizado = await actualizarPedido(
            id,
            datosActualizados
        );

        if (pedidoActualizado === null) {

            return res.status(404).json({
                mensaje: "No se encontró el pedido"
            });

        } else {

            res.status(200).json(pedidoActualizado);

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al actualizar el pedido",
            error: error.message
        });

    }

};

export const eliminarPedidoControl = async (req, res) => {

    try {

        const id = req.params.id;

        const pedidoEliminado = await eliminarPedido(id);

        if (pedidoEliminado === null) {

            return res.status(404).json({
                mensaje: "No se encontró el pedido"
            });

        } else {

            res.status(200).json({
                mensaje: "Pedido eliminado correctamente",
                pedido: pedidoEliminado
            });

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al eliminar el pedido",
            error: error.message
        });

    }

};
export const obtenerMisPedidosControl = async (req, res) => {

    try {

        const usuarioId = req.usuario.id;

        const pedidos = await obtenerMisPedidos(usuarioId);

        res.status(200).json(pedidos);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener tus pedidos",
            error: error.message
        });

    }

};

export const cambiarEstadoPedidoControl = async (req, res) => {

    try {

        const id = req.params.id;
        const { estado } = req.body;
         if (
            estado !== "pendiente" &&
            estado !== "en preparacion" &&
            estado !== "enviado" &&
            estado !== "entregado" &&
            estado !== "cancelado"
        ) {
            return res.status(400).json({
                mensaje: "Estado no válido"
            });
        }

        const pedido = await cambiarEstadoPedido(id, estado);

        if (pedido === null) {
            return res.status(404).json({
                mensaje: "Pedido no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Estado actualizado",
            pedido: pedido
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al cambiar el estado",
            error: error.message
        });

    }

};