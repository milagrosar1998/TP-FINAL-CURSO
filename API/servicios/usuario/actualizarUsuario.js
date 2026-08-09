import Usuario from "../../modelos/usuario.js";

const actualizarUsuario = async (id, datosActualizados) => {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
        id,
        datosActualizados,
        { new: true }
    );

    return usuarioActualizado;
};

export default actualizarUsuario;