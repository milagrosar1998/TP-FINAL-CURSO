import Pedido from "../../modelos/pedido.js";

const crearPedido = async (datosPedido) => {
    const pedido = await Pedido.create(datosPedido);

    return pedido;
};

export default crearPedido;