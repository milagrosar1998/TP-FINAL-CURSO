export default function Heading({ text, size, className = "" }) {
  const headings = {
    h1: <h1 className={className}>{text}</h1>,
    h2: <h2 className={className}>{text}</h2>,
    h3: <h3 className={className}>{text}</h3>,
    h4: <h4 className={className}>{text}</h4>,
    h5: <h5 className={className}>{text}</h5>,
    h6: <h6 className={className}>{text}</h6>,
  };
  return headings[size];
}

// <Heading text="Hola" size="h1" Classname="blabla" /> = <h1 className="blabl">Hola</h1>
