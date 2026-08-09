import Usuario from "../../modelos/usuario.js";

const obtenerUnUsuario = async (id) => {
    const usuario = await Usuario.findById(id);

    return usuario;
};

export default obtenerUnUsuario;