import "./App.css";

import { Routes, Route } from "react-router-dom";


import {
  Home,
  Productos,
  Servicios,
  Nosotros,
  Contacto,
  Login,
  Registro,

} from "./components/page";

import { Navbar, Footer } from "./components/molecules";


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
      </Routes>

      <Footer />




   
    </>
  );
}

export default App;
