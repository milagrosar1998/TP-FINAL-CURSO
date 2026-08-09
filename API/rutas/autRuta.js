import express from "express";

import { 
    registrarUsuarioControl,
    loginControl
 } from "../controladores/autControl.js";

const router = express.Router();

router.post("/registro", registrarUsuarioControl);
router.post("/login", loginControl);

export default router;