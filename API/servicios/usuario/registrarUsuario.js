import Usuario from "../../modelos/usuario.js";

const registrarUsuario = async (datosUsuario) => {

    const nuevoUsuario = await Usuario.create({
        nombre: datosUsuario.nombre,
        apellido: datosUsuario.apellido,
        email: datosUsuario.email,
        password: datosUsuario.password,
        telefono: datosUsuario.telefono,
        direccion: datosUsuario.direccion,
        ciudad: datosUsuario.ciudad,
        provincia: datosUsuario.provincia,
        
        rol: "usuario"
    });

    return nuevoUsuario;
};

export default registrarUsuario;