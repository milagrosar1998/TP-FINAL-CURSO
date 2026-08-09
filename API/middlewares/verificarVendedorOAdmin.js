const verificarVendedorOAdmin = (req, res, next) => {

    if (
        req.usuario.rol !== "admin" &&
        req.usuario.rol !== "vendedor"
    ) {

        return res.status(403).json({
            mensaje: "No tienes permiso"
        });

    }

    next();
};

export default verificarVendedorOAdmin;