import express from "express";
import verificarToken from "../middlewares/verificarToken.js";
import verificarVendedorOAdmin from "../middlewares/verificarVendedorOAdmin.js";

import {
    crearPresupuestoControl,
    obtenerTodosLosPresupuestosControl,
    obtenerUnPresupuestoControl,
    eliminarPresupuestoControl,
    obtenerMisPresupuestosControl,
    cambiarEstadoPresupuestoControl

} from "../controladores/presupuestoControl.js";

const router = express.Router();

router.get("/presupuestos/:id", verificarToken, obtenerUnPresupuestoControl);
router.get("/presupuestos", verificarToken, verificarVendedorOAdmin, obtenerTodosLosPresupuestosControl);
router.post("/presupuestos",  verificarToken, crearPresupuestoControl);
router.get("/mis-presupuestos", verificarToken, obtenerMisPresupuestosControl);
router.put("/presupuestos/:id/estado", verificarToken, verificarVendedorOAdmin, cambiarEstadoPresupuestoControl);
router.delete("/presupuestos/:id", verificarToken, verificarVendedorOAdmin, eliminarPresupuestoControl);


export default router;