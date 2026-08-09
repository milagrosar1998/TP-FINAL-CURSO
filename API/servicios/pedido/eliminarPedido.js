import Pedido from "../../modelos/pedido.js";

const eliminarPedido = async (id) => {

    const pedidoEliminado = await Pedido.findByIdAndDelete(id);

    return pedidoEliminado;
};

export default eliminarPedido;