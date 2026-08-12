import crearNotificacion from "../servicios/notificacion/crearNotificacion.js";
import Usuario from "../modelos/usuario.js";
import crearProducto from "../servicios/producto/crearProducto.js";
import obtenerTodosLosProductos from "../servicios/producto/obtenerTodosLosProductos.js";
import obtenerUnProducto from "../servicios/producto/obtenerUnProducto.js";
import actualizarProducto from "../servicios/producto/actualizarProducto.js";
import eliminarProducto from "../servicios/producto/eliminarProducto.js";

export const crearProductoControl = async (req, res) => {

    try {
        const datosProducto = {
            ...req.body,
            imagen: req.file //info de imagen subida
                ? "/imagenes/productos/" + req.file.filename
                : "",

            vendedorId: req.usuario.id
        };

        const producto = await crearProducto(datosProducto);

        if (req.usuario.rol === "vendedor") {

            const vendedor = await Usuario.findById(req.usuario.id);

            await crearNotificacion({
                mensaje: `${vendedor.nombre} ${vendedor.apellido} agregó el producto ${producto.nombre}`,
                tipo: "producto"
            });

        }

        res.status(201).json(producto);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al crear el producto",
            error: error.message
        });

    }

};

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
                mensaje: "No se encontró el producto"
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

export const actualizarProductoControl = async (req, res) => {

    try {

        const id = req.params.id;

        const datosActualizados = {
            ...req.body
        };

        if (req.file) {
            datosActualizados.imagen =
                "/imagenes/productos/" + req.file.filename;
        }

        const productoActualizado = await actualizarProducto(
            id,
            datosActualizados
        );

        if (productoActualizado === null) {

            return res.status(404).json({
                mensaje: "No se encontró el producto"
            });

        } else {

            if (req.usuario.rol === "vendedor") {

                const vendedor = await Usuario.findById(req.usuario.id);

                await crearNotificacion({
                    mensaje: `${vendedor.nombre} ${vendedor.apellido} editó el producto ${productoActualizado.nombre}`,
                    tipo: "producto"
                });

            }

            res.status(200).json(productoActualizado);

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al actualizar el producto",
            error: error.message
        });

    }

};

export const eliminarProductoControl = async (req, res) => {
    try {
        const id = req.params.id;

        const productoEliminado = await eliminarProducto(id);

        if (productoEliminado === null) {
            return res.status(404).json({
                mensaje: "No se encontró el producto"
            });
        } else {

            if (req.usuario.rol === "vendedor") {

                const vendedor = await Usuario.findById(req.usuario.id);

                await crearNotificacion({
                    mensaje: `${vendedor.nombre} ${vendedor.apellido} eliminó el producto ${productoEliminado.nombre}`,
                    tipo: "producto"
                });

            }

            res.status(200).json({
                mensaje: "Producto eliminado correctamente",
                producto: productoEliminado
            });

        }

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el producto",
            error: error.message
        });
    }
};

// usamos try o catch por si MONGODB da error, entonces no cae el servidor y
// dá el mensaje de error