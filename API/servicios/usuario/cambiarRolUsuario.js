import Usuario from "../../modelos/usuario.js";

const cambiarRolUsuario = async (id, rol) => {

    const usuario = await Usuario.findByIdAndUpdate(
        id,
        { rol: rol },
        { new: true }
    );

    return usuario;
};

export default cambiarRolUsuario;