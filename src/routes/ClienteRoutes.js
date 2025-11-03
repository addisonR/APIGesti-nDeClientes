import express from "express";
import ClienteController from "../controllers/ClienteController.js";

const router = express.Router();

router.post("/clientes", ClienteController.crearCliente);
router.get("/clientes", ClienteController.obtenerClientes);
router.get("/cliente/:id", ClienteController.obtenerClientePorId);

export default router;
