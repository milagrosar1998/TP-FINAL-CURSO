import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, rolesPermitidos }) {

  const usuarioGuardado = localStorage.getItem("usuario");

  if (!usuarioGuardado) {
    return <Navigate to="/login" />;
  }

  const usuario = JSON.parse(usuarioGuardado);

  if (!rolesPermitidos.includes(usuario.rol)) {
    return <Navigate to="/" />;
  }

  return children;
}