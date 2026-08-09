import Usuario from "../../modelos/usuario.js";

const obtenerVendedores = async () => {

    const vendedores = await Usuario.find({
        rol: "vendedor"
    });

    return vendedores;
};

export default obtenerVendedores;