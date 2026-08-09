import jwt from "jsonwebtoken";

const verificarToken = (req, res, next) => {

    const autHeader = req.headers.authorization;

    if (autHeader == null) {
        return res.status(401).json({
            mensaje: "Token no enviado"
        });
    }

    const token = autHeader.split(" ")[1];

    try {

        const datos = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.usuario = datos;

        next();

    } catch (error) {

        res.status(401).json({
            mensaje: "Token inválido"
        });

    }

};

export default verificarToken;