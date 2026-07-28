import { Input, Label } from "../atoms";

export default function InputLabel({
  label,
  inputId,
  className = "",
  ...inputProps
}) {
  return (
    <div className={className}>
      <Label text={label} inputId={inputId} />
      <Input id={inputId} {...inputProps} />
    </div>
  );
}
