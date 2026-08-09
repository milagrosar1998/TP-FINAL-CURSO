import registrarUsuario from "../servicios/usuario/registrarUsuario.js";
import buscarUsuario from "../servicios/usuario/buscarUsuario.js";
import jwt from "jsonwebtoken";


export const registrarUsuarioControl = async (req, res) => {

    try {

        const usuario = await registrarUsuario(req.body);

        res.status(201).json(usuario);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al registrar el usuario",
            error: error.message
        });

    }

};

export const loginControl = async (req, res) => {

    try {

        const { email, password } = req.body;

        const usuario = await buscarUsuario(email);

        if (usuario === null) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        if (usuario.password !== password) {

            return res.status(401).json({
                mensaje: "Contraseña incorrecta"
            });

        } 
        const token = jwt.sign(
            {
                id: usuario._id,
                rol: usuario.rol
            },
            process.env.JWT_SECRET
        );

        res.status(200).json({
            mensaje: "Login correcto",
            usuario: usuario,
            token: token
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al iniciar sesión",
            error: error.message
        });

    }

};