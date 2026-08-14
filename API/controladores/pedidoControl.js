import crearNotificacion from "../servicios/notificacion/crearNotificacion.js";
import Usuario from "../modelos/usuario.js";
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

        res.status(400).json({
            mensaje: error.message
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

        // Validamos que el estado sea válido
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


        // Buscamos el pedido ANTES de modificarlo
        const pedidoAnterior = await obtenerUnPedido(id);

        if (pedidoAnterior === null) {
            return res.status(404).json({
                mensaje: "Pedido no encontrado"
            });
        }


        // Si ya tiene ese estado, no modificamos ni notificamos
        if (pedidoAnterior.estado === estado) {
            return res.status(200).json({
                mensaje: "El pedido ya tiene ese estado",
                pedido: pedidoAnterior
            });
        }


        // Guardamos el estado anterior
        const estadoAnterior = pedidoAnterior.estado;


        // Actualizamos el pedido
        const pedido = await cambiarEstadoPedido(
            id,
            estado
        );


        // Solo notificamos si el cambio lo hizo un vendedor
        if (req.usuario.rol === "vendedor") {

            // Buscamos al vendedor
            const vendedor = await Usuario.findById(
                req.usuario.id
            );

            // Buscamos al cliente dueño del pedido
            const cliente = await Usuario.findById(
                pedidoAnterior.usuarioId
            );


            // Si existen vendedor y cliente, creamos la notificación
            if (vendedor && cliente) {

                await crearNotificacion({

                    mensaje: `${vendedor.nombre} ${vendedor.apellido} cambió el pedido de ${cliente.nombre} ${cliente.apellido} de ${estadoAnterior} a ${estado}`,

                    tipo: "pedido"

                });

            }

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