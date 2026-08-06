import "./App.css";

import { Routes, Route } from "react-router-dom";


import { useState } from "react";





import { Navbar, Footer } from "./components/molecules";

import {
  Home,
  Productos,
  Servicios,
  Nosotros,
  Contacto,
  Login,
  Registro,
  ProductoDetalle

} from "./components/page";



function App() {

  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productos"
          element={
            <Productos
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
      </Routes>

      <Footer />





    </>
  );
}

export default App;
