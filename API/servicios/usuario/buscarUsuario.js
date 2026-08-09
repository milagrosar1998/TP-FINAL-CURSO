import Usuario from "../../modelos/usuario.js";

const buscarUsuario = async (email) => {

    const usuario = await Usuario.findOne({ email: email }); //buscá un solo usuario cuyo email sea igual al email que recibí.

    return usuario;
};

export default buscarUsuario;

