import Pedido from "../../modelos/pedido.js";

const obtenerTodosLosPedidos = async () => {

    const pedidos = await Pedido.find();

    return pedidos;
};

export default obtenerTodosLosPedidos;
