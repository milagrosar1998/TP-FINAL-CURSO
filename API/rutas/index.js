// este archivo es el que centraliza as rutas
import express from "express";
import productoRuta from "./productoRuta.js";

const router = express.Router();

router.use("/", productoRuta);

export default router;

