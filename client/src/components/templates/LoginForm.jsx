import { loginFields } from "../../data/inputFields";
import Form from "../organisms/Form";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const navigate = useNavigate();

    async function manejarIngreso(evento) {

        evento.preventDefault();

        const formulario = new FormData(evento.target);

        const email = formulario.get("email");
        const password = formulario.get("password");

        try {

            const respuesta = await api.post("/login", {
                email,
                password
            });

            const token = respuesta.data.token;
            const usuario = respuesta.data.usuario;

            const usuarioSeguro = {
                _id: usuario._id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                telefono: usuario.telefono,
                direccion: usuario.direccion,
                ciudad: usuario.ciudad,
                provincia: usuario.provincia,
                rol: usuario.rol
            };

            localStorage.setItem("token", token);

            localStorage.setItem(
                "usuario",
                JSON.stringify(usuarioSeguro)
            );

            if (usuario.rol === "admin") {
                window.location.href = "/admin";
            } else if (usuario.rol === "vendedor") {
                window.location.href = "/vendor";
            } else {
                window.location.href = "/usuario";
            }

        } catch (error) {

            alert(
                error.response?.data?.mensaje ||
                "Error al iniciar sesión"
            );

        }

    }

    return (
        <Form
            formTitle="Ingresar"
            inputs={loginFields}
            className="login-form"
            formSubmit={manejarIngreso}
        />
    );
}