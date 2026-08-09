import Pedido from "../../modelos/pedido.js";

const obtenerMisPedidos = async (usuarioId) => {

    const pedidos = await Pedido.find({
        usuarioId: usuarioId
    });

    return pedidos;
};

export default obtenerMisPedidos;