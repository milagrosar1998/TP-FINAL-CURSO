import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const cantidadCarrito = useSelector(
    (state) => state.carrito.productos.length
  );

  const usuarioGuardado = localStorage.getItem("usuario");


  const usuario = usuarioGuardado
    ? JSON.parse(usuarioGuardado)
    : null;



  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    window.location.href = "/";
    //manda al usuario al inicio cuando cierra sesion
  }


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
        {usuario ? (
          <>
            <li>
              <Link
                to={
                  usuario.rol === "admin"
                    ? "/admin"
                    : usuario.rol === "vendedor"
                      ? "/vendor"
                      : "/usuario"
                }
              >
                <i className="bi bi-person-circle"></i>
                {" "}Mi perfil
              </Link>
            </li>

            <li>
              <button
                type="button"
                className="btn-cerrar-sesion"
                onClick={cerrarSesion}
              >
                Cerrar sesión
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Ingresar</Link></li>
            <li><Link to="/registro">Registrarse</Link></li>
          </>
        )}

        <li>
          <Link to="/carrito" className="carrito-link">
            <i className="bi bi-cart3"></i>
            <span>{cantidadCarrito}</span>
          </Link>
        </li>


      </ul>
    </nav>
  )

}
