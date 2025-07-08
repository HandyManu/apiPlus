import reservaciones from '../models/reservaciones.js';

const reservacionesController = {};

reservacionesController.getReservaciones = async (req, res) => {
    try {
        const allReservaciones = await reservaciones.find().populate('ClientId');
        res.json(allReservaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

reservacionesController.getReservacionebyId = async (req, res) => {
    try {
        const reservacion = await reservaciones.findById(req.params.id);
        if (!reservacion) {
            return res.status(404).json({ message: "Reservacion not found" });
        }
        res.json(reservacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
reservacionesController.createReservacion = async (req, res) => {
    const newReservacion = new reservaciones(req.body);
    try {
        const savedReservacion = await newReservacion.save();
        res.status(201).json(savedReservacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
reservacionesController.updateReservacion = async (req, res) => {
    const { ClientId, Vehicle, Service, Status } = req.body;
    const updatedReservacion = await reservaciones.findByIdAndUpdate(
        req.params.id,
        { ClientId, Vehicle, Service, Status },
        { new: true }
    );
    res.json(updatedReservacion);
}
reservacionesController.deleteReservacion = async (req, res) => {
    try {
        const deletedReservacion = await reservaciones.findByIdAndDelete(req.params.id);
        if (!deletedReservacion) {
            return res.status(404).json({ message: "Reservacion not found" });
        }
        res.json({ message: "Reservacion deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export default reservacionesController;