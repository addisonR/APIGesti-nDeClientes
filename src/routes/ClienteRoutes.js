import express from "express";
import ClienteController from "../controllers/ClienteController.js";
import validarRequest from "../helpers/validardatosrequest.js";

const router = express.Router();

router.post("/clientes", validarRequest, ClienteController.crearCliente);
router.get("/clientes", ClienteController.obtenerClientes);
router.get("/cliente/:id", ClienteController.obtenerClientePorId);
router.put("/cliente/:id", validarRequest, ClienteController.actualizarCliente);

export default router;
