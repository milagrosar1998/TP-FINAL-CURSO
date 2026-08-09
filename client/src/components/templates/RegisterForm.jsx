import { registerFields } from "../../data/registerFields";
import Form from "../organisms/Form";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {

  const navigate = useNavigate();

  async function manejarRegistro(evento) {

    evento.preventDefault();

    const formulario = new FormData(evento.target);

    const nombre = formulario.get("nombre");
    const apellido = formulario.get("apellido");
    const email = formulario.get("email");
    const password = formulario.get("password");
    const telefono = formulario.get("telefono");
    const direccion = formulario.get("direccion");
    const ciudad = formulario.get("ciudad");
    const provincia = formulario.get("provincia");

    try {

      await api.post("/registro", {
        nombre,
        apellido,
        email,
        password,
        telefono,
        direccion,
        ciudad,
        provincia
      });

      alert("Usuario registrado correctamente");

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.mensaje ||
        "Error al registrar el usuario"
      );

    }

  }

  return (
    <Form
      formTitle="Registrarse"
      inputs={registerFields}
      className="register-form"
      formSubmit={manejarRegistro}
    />
  );
}