export default function Input({
  type = "text",
  value,
  onChange,
  placeholder = "",
  name,
  id,
  disabled = false,
  required = false,
  className = "",
  ...inputProps
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={id}
      disabled={disabled}
      required={required}
      className={className}
      {...inputProps}
    />
  );
}
