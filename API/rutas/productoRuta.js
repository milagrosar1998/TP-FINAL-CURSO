import express from "express";
import verificarToken from "../middlewares/verificarToken.js";
import verificarVendedorOAdmin from "../middlewares/verificarVendedorOAdmin.js";
import verificarAdmin from "../middlewares/verificarAdmin.js";
import verificarPropioProductoOAdmin from "../middlewares/verificarPropioProductoOAdmin.js";
import subirImagenProducto from "../middlewares/subirImagenProducto.js";

import {
    crearProductoControl,
    obtenerTodosLosProductosControl,
    obtenerUnProductoControl,
    actualizarProductoControl,
    eliminarProductoControl
} from "../controladores/productoControl.js";


const router = express.Router();

router.post("/productos", verificarToken, verificarVendedorOAdmin, subirImagenProducto.single("imagen"), crearProductoControl); // si alguien hace un POST a /productos, ejecutá crearProductoControl.
router.get("/productos", obtenerTodosLosProductosControl); // cuando llegue una peticion GET a /productos,
//  ejecutá el controlador que obtiiene todos los productos
router.get("/productos/:id", obtenerUnProductoControl);
// Si llega una petición GET a /productos/:id, obtené un solo producto.
router.put("/productos/:id", verificarToken, verificarPropioProductoOAdmin, subirImagenProducto.single("imagen"), actualizarProductoControl);
// Si llega una petición PUT a /productos/:id, actualizá ese producto.
router.delete("/productos/:id", verificarToken, verificarPropioProductoOAdmin, eliminarProductoControl);

export default router;