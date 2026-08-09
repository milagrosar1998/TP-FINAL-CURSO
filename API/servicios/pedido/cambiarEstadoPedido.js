import Pedido from "../../modelos/pedido.js";

const cambiarEstadoPedido = async (id, estado) => {

    const pedido = await Pedido.findByIdAndUpdate(
        id,
        { estado: estado },
        { new: true }
    );

    return pedido;
};

export default cambiarEstadoPedido;