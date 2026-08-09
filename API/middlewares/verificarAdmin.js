const verificarAdmin = (req, res, next) => {

    if (req.usuario.rol !== "admin") {

        return res.status(403).json({
            mensaje: "No tienes permiso"
        });

    }

    next();
};

export default verificarAdmin;