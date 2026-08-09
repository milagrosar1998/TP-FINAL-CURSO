import obtenerTodosLosUsuarios from "../servicios/usuario/obtenerTodosLosUsuarios.js";
import obtenerUnUsuario from "../servicios/usuario/obtenerUnUsuario.js";
import actualizarUsuario from "../servicios/usuario/actualizarUsuario.js";
import eliminarUsuario from "../servicios/usuario/eliminarUsuario.js";
import obtenerVendedores from "../servicios/usuario/obtenerVendedores.js";
import cambiarRolUsuario from "../servicios/usuario/cambiarRolUsuario.js";

export const obtenerTodosLosUsuariosControl = async (req, res) => {

    try {
        const usuarios = await obtenerTodosLosUsuarios();

        res.status(200).json(usuarios);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener los usuarios",
            error: error.message
        });

    }

};

export const obtenerUnUsuarioControl = async (req, res) => {

    try {
        const id = req.params.id;

        const usuario = await obtenerUnUsuario(id);

        if (usuario === null) {

            return res.status(404).json({
                mensaje: "No se encontró el usuario"
            });

        } else {

            res.status(200).json(usuario);

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener el usuario",
            error: error.message
        });

    }

};
export const actualizarUsuarioControl = async (req, res) => {

    try {
        const id = req.params.id;
        const datosActualizados = req.body;

        const usuarioActualizado = await actualizarUsuario(
            id,
            datosActualizados
        );

        if (usuarioActualizado === null) {

            return res.status(404).json({
                mensaje: "No se encontró el usuario"
            });

        } else {

            res.status(200).json(usuarioActualizado);

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al actualizar el usuario",
            error: error.message
        });

    }

};
export const eliminarUsuarioControl = async (req, res) => {

    try {
        const id = req.params.id;

        const usuarioEliminado = await eliminarUsuario(id);

        if (usuarioEliminado === null) {

            return res.status(404).json({
                mensaje: "No se encontró el usuario"
            });

        } else {

            res.status(200).json({
                mensaje: "Usuario eliminado correctamente",
                usuario: usuarioEliminado
            });

        }

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al eliminar el usuario",
            error: error.message
        });

    }

};

export const obtenerVendedoresControl = async (req, res) => {

    try {
        const vendedores = await obtenerVendedores();

        res.status(200).json(vendedores);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener los vendedores",
            error: error.message
        });

    }

};
export const cambiarRolUsuarioControl = async (req, res) => {

    try {
        const id = req.params.id;
        const { rol } = req.body;

        if (
            rol !== "admin" &&
            rol !== "vendedor" &&
            rol !== "usuario"
        ) {
            return res.status(400).json({
                mensaje: "Rol no válido"
            });
        }

        const usuario = await cambiarRolUsuario(id, rol);

        if (usuario === null) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Rol actualizado",
            usuario: usuario
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al cambiar el rol",
            error: error.message
        });

    }

};