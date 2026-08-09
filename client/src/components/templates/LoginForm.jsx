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

            localStorage.setItem("token", token);
            localStorage.setItem("usuario", JSON.stringify(usuario));

            if (usuario.rol === "admin") {

                navigate("/admin");

            } else if (usuario.rol === "vendedor") {

                navigate("/vendor");

            } else {

                navigate("/usuario");

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