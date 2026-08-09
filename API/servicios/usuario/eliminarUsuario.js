import Usuario from "../../modelos/usuario.js";

const eliminarUsuario = async (id) => {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);

    return usuarioEliminado;
};

export default eliminarUsuario;