import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const cantidadCarrito = useSelector(
    (state) => state.carrito.productos.length
  );

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo S MULTIPRO" />

        <span>S MULTIPRO</span>
      </Link>


      <ul className="menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/login">Ingresar</Link></li>
        <li><Link to="/registro">Registrarse</Link></li>
        <li><Link to="/carrito" className="carrito-link">
          <i className="bi bi-cart3"></i>
          <span>{cantidadCarrito}</span>
        </Link></li>

      </ul>
    </nav>
  )

}
