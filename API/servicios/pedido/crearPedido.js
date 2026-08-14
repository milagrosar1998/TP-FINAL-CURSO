import Pedido from "../../modelos/pedido.js";
import Producto from "../../modelos/ProductoSchema.js";

const crearPedido = async (datosPedido) => {

    // Primero verificamos stock de todos los productos
    for (const item of datosPedido.productos) {

        const producto = await Producto.findById(item.productoId);

        if (!producto) {
            throw new Error(
                `Producto no encontrado: ${item.nombre}`
            );
        }

        if (producto.stock < item.cantidad) {
            throw new Error(
                `Stock insuficiente para ${producto.nombre}. Disponible: ${producto.stock}`
            );
        }
    }


    // Si todos tienen stock, descontamos
    for (const item of datosPedido.productos) {

        await Producto.findByIdAndUpdate(
            item.productoId,
            {
                $inc: {
                    stock: -item.cantidad
                }
            }
        );
    }


    // Recién después creamos el pedido
    const pedido = await Pedido.create(datosPedido);

    return pedido;
};

export default crearPedido;