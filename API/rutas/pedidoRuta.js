import express from "express";
import verificarToken from "../middlewares/verificarToken.js";
import verificarVendedorOAdmin from "../middlewares/verificarVendedorOAdmin.js";

import {
    crearPedidoControl,
    obtenerTodosLosPedidosControl,
    obtenerUnPedidoControl,
    actualizarPedidoControl,
    eliminarPedidoControl,
    obtenerMisPedidosControl,
    cambiarEstadoPedidoControl

} from "../controladores/pedidoControl.js";

const router = express.Router();

router.post("/pedidos", verificarToken, crearPedidoControl);
router.get("/pedidos", verificarToken, verificarVendedorOAdmin, obtenerTodosLosPedidosControl);
router.get("/mis-pedidos", verificarToken, obtenerMisPedidosControl);
router.get("/pedidos/:id", obtenerUnPedidoControl);
router.put("/pedidos/:id", actualizarPedidoControl);
router.put("/pedidos/:id/estado", verificarToken, verificarVendedorOAdmin, cambiarEstadoPedidoControl);
router.delete("/pedidos/:id", eliminarPedidoControl);

export default router;