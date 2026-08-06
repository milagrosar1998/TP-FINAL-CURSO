import { Heading } from "../atoms";
import { InputLabel } from "../molecules";

export default function Form({
  formTitle = "Formulario",
  inputs = [],
  className = "",
  formSubmit = () => { },
}) {
  return (
    <form className={className} onSubmit={formSubmit}>
      <Heading size="h1" text={formTitle} />



      {inputs.length ? (inputs.map((input) => (
        <InputLabel
          key={input.inputId}
          className={input.className}
          label={input.label}
          inputId={input.inputId}
          {...input}
        />
      ))
      ) : (
           <p>No hay campos disponibles.</p>
      )}
      
      <button type="submit">{formTitle}</button>
    </form>
  );
}
