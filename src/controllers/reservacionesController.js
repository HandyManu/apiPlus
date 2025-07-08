import reservaciones from '../models/reservaciones.js';
import clientes from '../models/clientes.js';

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
  const { ClientId, Vehicle, Service, Status } = req.body;

  if (!ClientId || !Vehicle || !Service || !Status) {
    return res.status(400).json({ message: "Todos los campos son requeridos" });
  }

  const clienteExiste = await clientes.findById(ClientId);
  if (!clienteExiste) {
    return res.status(404).json({ message: "El cliente no existe" });
  }

  const vehiculoValido = /^[A-Za-z0-9\s\-]{3,}$/;
if (!vehiculoValido.test(Vehicle)) {
  return res.status(400).json({ message: "Formato de vehículo inválido" });
}


  const nuevaReservacion = new reservaciones({ ClientId, Vehicle, Service, Status });

  try {
    const saved = await nuevaReservacion.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

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