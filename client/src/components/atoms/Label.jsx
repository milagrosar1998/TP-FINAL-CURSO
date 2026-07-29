export default function Label({ text, inputId, className = "" }) {
  return (
    <label htmlFor={inputId} className={className}>
      {text}
    </label>
  );
}
