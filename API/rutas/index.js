// este archivo es el que centraliza as rutas
import express from "express";
import productoRuta from "./productoRuta.js";
import autRuta from "./autRuta.js"
import usuarioRuta from "./usuarioRuta.js";
import pedidoRuta from "./pedidoRuta.js";
import presupuestoRuta from "./presupuestoRuta.js";
import servicioObraRuta from "./servicioObraRuta.js";

const router = express.Router();

router.use("/", productoRuta);
router.use("/", autRuta);
router.use("/", usuarioRuta);
router.use("/", pedidoRuta);
router.use("/", presupuestoRuta);
router.use("/", servicioObraRuta);

export default router;

