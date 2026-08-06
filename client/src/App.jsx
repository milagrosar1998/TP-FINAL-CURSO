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
  ProductoDetalle,
  Carrito,
  Admin,
  Vendor,
  Usuario,

} from "./components/page";



function App() {

  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
  }
  function eliminarDelCarrito(indiceProducto) {
    const nuevoCarrito = carrito.filter(
      (producto, indice) => indice !== indiceProducto
    );

    setCarrito(nuevoCarrito);
  }

  function vaciarCarrito() {
    setCarrito([]);
  }


  return (
    <>
      <Navbar cantidadCarrito={carrito.length} />



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
        <Route path="/carrito" element={
          <Carrito
            carrito={carrito}
            eliminarDelCarrito={eliminarDelCarrito}
            vaciarCarrito={vaciarCarrito}
          />} />

        <Route path="/producto/:id" element={
          <ProductoDetalle
            agregarAlCarrito={agregarAlCarrito}
          />
        }
        />

        <Route path="/admin" element={<Admin />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/usuario" element={<Usuario />} />



      </Routes>

      <Footer />





    </>
  );
}

export default App;
