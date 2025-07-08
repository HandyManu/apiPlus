import express from "express";

import reservacionesController from "../controllers/reservacionesController.js";

const router = express.Router();

router.route('/')
    .get(reservacionesController.getReservaciones)
    .post(reservacionesController.createReservacion);

router.route('/:id')
    .get(reservacionesController.getReservacionebyId)
    .put(reservacionesController.updateReservacion)
    .delete(reservacionesController.deleteReservacion);

export default router;