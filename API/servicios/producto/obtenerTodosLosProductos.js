import Producto from "../../modelos/productoSchema.js";

const obtenerTodosLosProductos = async () => {
    const productos = await Producto.find(); // buscá todos los documentos guardados en la colección de productos

    return productos; // devuelve estos productos al controlador 
};

export default obtenerTodosLosProductos;

// este archivo se encarga de consultar a mongoDB