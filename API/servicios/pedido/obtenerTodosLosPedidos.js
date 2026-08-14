import Pedido from "../../modelos/pedido.js";

const obtenerTodosLosPedidos = async () => {

    const pedidos = await Pedido.find()
        .populate("usuarioId", "nombre apellido email");

    return pedidos;
};

export default obtenerTodosLosPedidos;
