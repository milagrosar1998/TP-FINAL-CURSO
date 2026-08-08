import { registerFields } from "../../data/registerFields";
import Form from "../organisms/Form";

export default function RegisterForm() {
  function manejarRegistro(evento) {
    evento.preventDefault();

    alert("Formulario de registro enviado");
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
