import express from "express";
import verificarToken from "../middlewares/verificarToken.js";
import verificarAdmin from "../middlewares/verificarAdmin.js";
import verificarPropioUsuarioOAdmin from "../middlewares/verificarPropioUsuarioOAdmin.js";

import {
    obtenerTodosLosUsuariosControl,
    obtenerUnUsuarioControl,
    actualizarUsuarioControl,
    eliminarUsuarioControl,
    obtenerVendedoresControl,
    cambiarRolUsuarioControl
    
} from "../controladores/usuarioControl.js";

const router = express.Router();

router.get("/usuarios", verificarToken, verificarAdmin, obtenerTodosLosUsuariosControl);
router.get("/vendedores", verificarToken, verificarAdmin, obtenerVendedoresControl);
router.get("/usuarios/:id", verificarToken, verificarPropioUsuarioOAdmin, obtenerUnUsuarioControl);
router.put("/usuarios/:id", verificarToken, verificarAdmin, actualizarUsuarioControl);
router.put("/usuarios/:id/rol", verificarToken, verificarAdmin, cambiarRolUsuarioControl);
router.delete("/usuarios/:id", verificarToken, verificarAdmin, eliminarUsuarioControl);

export default router;