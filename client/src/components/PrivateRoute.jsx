import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, rolesPermitidos }) {

  const usuarioGuardado = localStorage.getItem("usuario");
  const token = localStorage.getItem("token");

  if (!usuarioGuardado || !token) {
    return <Navigate to="/login" />;
  }

  try {

    const usuario = JSON.parse(usuarioGuardado);

    const payload = JSON.parse(
      atob(token.split(".")[1])
    );

    const ahora = Date.now() / 1000;

    
    if (payload.exp && payload.exp < ahora) {

      localStorage.removeItem("token");
      localStorage.removeItem("usuario");

      return <Navigate to="/login" />;
    }

    
    if (!rolesPermitidos.includes(usuario.rol)) {
      return <Navigate to="/" />;
    }

    return children;

  } catch (error) {

    
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    return <Navigate to="/login" />;
  }
}