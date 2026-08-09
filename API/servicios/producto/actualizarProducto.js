import Producto from "../../modelos/productoSchema.js";

const actualizarProducto = async (id, datosActualizados) => { // Recibe el id del producto que querés modificar y los datos nuevos.
    const producto = await Producto.findByIdAndUpdate(// para buscar ese producto y actualizarlo en MongoDB.
        id,
        datosActualizados,
        { new: true } //hace que MongoDB te devuelva el producto ya actualizado, no la versión anterior.
    );

    return producto;
};

export default actualizarProducto;

/*¿Qué significa la opción new?

Le estamos diciendo a Mongoose:

"Cuando termines de actualizar el producto, 
devolveme el producto nuevo."  */