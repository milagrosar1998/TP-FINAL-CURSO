const verificarPropioUsuarioOAdmin = (req, res, next) => {

    const idUsuarioToken = req.usuario.id;
    const idUsuarioUrl = req.params.id;

    if (
        req.usuario.rol !== "admin" &&
        idUsuarioToken !== idUsuarioUrl
    ) {
        return res.status(403).json({
            mensaje: "No tienes permiso para ver este usuario"
        });
    }

    next();
};

export default verificarPropioUsuarioOAdmin;