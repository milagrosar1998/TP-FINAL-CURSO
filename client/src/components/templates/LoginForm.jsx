import { loginFields } from "../../data/inputFields";
import Form from "../organisms/Form";


export default function LoginForm() {
  function manejarIngreso(evento) {
    evento.preventDefault();

    alert("Formulario de ingreso enviado");
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