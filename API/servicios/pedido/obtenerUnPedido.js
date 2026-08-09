import Pedido from "../../modelos/pedido.js";

const obtenerUnPedido = async (id) => {
    const pedido = await Pedido.findById(id);

    return pedido;
};

export default obtenerUnPedido;