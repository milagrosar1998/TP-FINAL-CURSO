import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/molecules";
import PrivateRoute from "./components/PrivateRoute";

import {
  Home,
  Productos,
  Servicios,
  Nosotros,
  Contacto,
  Login,
  Registro,
  ProductoDetalle,
  Carrito,
  Admin,
  Vendor,
  Usuario,
  Presupuesto,
} from "./components/page";

import "./styles/home.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/footer.css";
import "./styles/productos.css";
import "./styles/carrito.css";
import "./styles/formularios.css";
import "./styles/admin.css";
import "./styles/servicios.css";
import "./styles/nosotros.css";
import "./styles/contacto.css";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute rolesPermitidos={["admin"]}>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path="/vendor"
          element={
            <PrivateRoute rolesPermitidos={["vendedor"]}>
              <Vendor />
            </PrivateRoute>
          }
        />

        <Route
          path="/usuario"
          element={
            <PrivateRoute rolesPermitidos={["usuario"]}>
              <Usuario />
            </PrivateRoute>
          }
        />
        <Route path="/presupuesto" element={<Presupuesto />} />

      </Routes>

      <Footer />

    </>
  );
}

export default App;
