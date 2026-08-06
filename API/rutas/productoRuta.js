import express from "express";
import {
    crearProductoControl,
    obtenerTodosLosProductosControl,
    obtenerUnProductoControl
} from "../controladores/productoControl.js";


const router = express.Router();

router.post("/productos", crearProductoControl); // si alguien hace un POST a /productos, ejecutá crearProductoControl.
router.get("/productos", obtenerTodosLosProductosControl); // cuando llegue una peticion GET a /productos,
//  ejecutá el controlador que obtiiene todos los productos
router.get("/productos/:id", obtenerUnProductoControl);

export default router;