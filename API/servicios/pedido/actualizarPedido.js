import Pedido from "../../modelos/pedido.js";

const actualizarPedido = async (id, datosActualizados) => {

    const pedidoActualizado = await Pedido.findByIdAndUpdate(
        id,
        datosActualizados,
        { new: true }
    );

    return pedidoActualizado;
};

export default actualizarPedido;