import Producto from "../../modelos/productoSchema.js";

const eliminarProducto = async (id) => {
    const productoEliminado = await Producto.findByIdAndDelete(id);

    return productoEliminado;
};

export default eliminarProducto;