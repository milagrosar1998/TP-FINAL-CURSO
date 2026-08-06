import Producto from "../modelos/productoSchema.js";

const obtenerUnProducto = async (id) => { // recibe un id, 
    const producto = await Producto.findById(id);// busca en mongoDb un producto que tenga ese id

    return producto; // y aca devuelve el producto que se encontro
};

export default obtenerUnProducto;