import { Link } from "react-router-dom";



export default function Navbar() {

  return (
    <nav className="navbar">

      <div className="logo">

        <h2>
          S MULTIPRO
        </h2>
      </div>

      <ul className="menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/login">Ingresar</Link></li>
        <li><Link to="/registro">Registrarse</Link></li>
      </ul>


    </nav>
  )

}
