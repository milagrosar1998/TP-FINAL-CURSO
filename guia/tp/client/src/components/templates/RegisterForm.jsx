import { registerFields } from "../../data/registerFields";
import Form from "../organisms/Form";

export default function RegisterForm() {
  return <Form formTitle="Registro" inputs={registerFields} className="" />;
}
