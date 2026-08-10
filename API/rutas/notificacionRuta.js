import express from "express";
import verificarToken from "../middlewares/verificarToken.js";
import verificarAdmin from "../middlewares/verificarAdmin.js";

import {
    obtenerNotificacionesControl
} from "../controladores/notificacionControl.js";

const router = express.Router();

router.get(
    "/notificaciones",
    verificarToken,
    verificarAdmin,
    obtenerNotificacionesControl
);

export default router;