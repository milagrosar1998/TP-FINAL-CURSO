import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, rolesPermitidos }) {

  const usuarioGuardado = localStorage.getItem("usuario");
  const token = localStorage.getItem("token");


  if (!usuarioGuardado || !token) {
    return <Navigate to="/login" replace />;
  }

  const usuario = JSON.parse(usuarioGuardado);

  
  if (!rolesPermitidos.includes(usuario.rol)) {
    return <Navigate to="/" replace />;
  }

  return children;
}