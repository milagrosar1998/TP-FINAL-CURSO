import crearProducto from "../servicios/crearProducto.js";
import obtenerTodosLosProductos from "../servicios/obtenerTodosLosProductos.js";
import obtenerUnProducto from "../servicios/obtenerUnProducto.js";

export const crearProductoControl = async (req, res) => { // contiene los datos que mande la herramienta de prueba, por el momento

    try {                                               // trabaja con mongoose   "Creá un producto con estos datos y guardalo en MongoDB."
        const producto = await crearProducto(req.body); //req.body contiene lo que mandamos desde Insomnia. y esos datos van a creearProducto.

        res.status(201).json(producto); // respuesta de q se creo correctamente
    } catch (error) {

        res.status(500).json({
            mensaje: "Error, el producto no se cargo",
            error: error.message
        });

    }

}

export const obtenerTodosLosProductosControl = async (req, res) => {

    try {
        const productos = await obtenerTodosLosProductos();
        res.status(200).json(productos);
    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener los productos",
            error: error.message
        });
    }

}

export const obtenerUnProductoControl = async (req, res) => {
    try {
        const id = req.params.id;
        // Obtengo el id que viene en la URL.
        // Ejemplo: GET /productos/nrodeID
        const producto = await obtenerUnProducto(id);
        // Llamo al servicio para buscar el producto con ese id en MongoDB.

        if (producto === null) { // Si MongoDB no encontró ningún producto con ese id...
            return res.status(404).json({
                mensaje: "No se Encontró el producto"
            });
        } else {
            res.status(200).json(producto);
        }

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el producto",
            error: error.message
        });
    }
};

// usamos try o catch por si MONGODB da error, entonces no cae el servidor y
// dá el mensaje de error