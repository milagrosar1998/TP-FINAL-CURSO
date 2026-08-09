import express from "express";
import verificarToken from "../middlewares/verificarToken.js";
import verificarAdmin from "../middlewares/verificarAdmin.js";

import {
    crearServicioObraControl,
    obtenerTodosLosServiciosObraControl,
    obtenerUnServicioObraControl,
    eliminarServicioObraControl
    
} from "../controladores/servicioObraControl.js";

const router = express.Router();

router.post("/servicios-obras", verificarToken, verificarAdmin, crearServicioObraControl);
router.get("/servicios-obras", obtenerTodosLosServiciosObraControl);
router.get("/servicios-obras/:id", verificarToken, verificarAdmin, obtenerUnServicioObraControl);
router.delete("/servicios-obras/:id", eliminarServicioObraControl);

export default router;