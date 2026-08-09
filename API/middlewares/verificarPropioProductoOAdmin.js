import Producto from "../modelos/productoSchema.js";

const verificarPropioProductoOAdmin = async (req, res, next) => {

    const producto = await Producto.findById(req.params.id);

    if (producto === null) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    if (req.usuario.rol === "admin") {
        return next();
    }

    if (
        req.usuario.rol === "vendedor" &&
        producto.vendedorId?.toString() === req.usuario.id
    ) {
        return next();
    }

    return res.status(403).json({
        mensaje: "No tienes permiso para editar este producto"
    });

};

export default verificarPropioProductoOAdmin;