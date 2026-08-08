import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/molecules";

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
        <Route path="/admin" element={<Admin />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/presupuesto" element={<Presupuesto />} />

      </Routes>

      <Footer />

    </>
  );
}

export default App;
