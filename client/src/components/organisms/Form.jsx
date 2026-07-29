import { Heading } from "../atoms";
import { InputLabel } from "../molecules";

export default function Form({
  formTitle = "Form",
  inputs = [],
  className = "",
  formSubmit = () => {},
}) {
  return (
    <form className={className}>
      <Heading size="h1" text={formTitle} onSubmit={formSubmit} />
      {inputs.length
        ? inputs.map((input) => (
            <InputLabel
              className={input.className}
              label={input.label}
              inputId={input.inputId}
              {...input}
            />
          ))
        : null}
      <button type="submit">{formTitle}</button>
    </form>
  );
}
