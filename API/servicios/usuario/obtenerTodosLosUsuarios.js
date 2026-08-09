import Usuario from "../../modelos/usuario.js";

const obtenerTodosLosUsuarios = async () => {
    const usuarios = await Usuario.find();

    return usuarios;
};

export default obtenerTodosLosUsuarios;