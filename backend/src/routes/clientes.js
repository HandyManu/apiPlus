import express from "express";

import clientesController from "../controllers/clientesController.js";

const router = express.Router ()

router.route('/')
    .get(clientesController.getClientes)
    .post(clientesController.createCliente);

router.route('/:id')
    .get(clientesController.getClientebyId)
    .put(clientesController.updateCliente)
    .delete(clientesController.deleteCliente);

export default router;