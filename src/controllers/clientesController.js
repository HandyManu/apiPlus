import clientes from "../models/clientes.js";

const clientesController = {};

clientesController.getClientes = async (req, res) => {
    try {
        const allClientes = await clientes.find();
        res.json(allClientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

clientesController.getClientebyId = async (req, res) => {
    try {
        const cliente = await clientes.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente not found" });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

clientesController.createCliente = async (req, res) => {
    const newCliente = new clientes(req.body);
    try {
        const savedCliente = await newCliente.save();
        res.status(201).json(savedCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

clientesController.updateCliente = async (req, res) => {
const {Name,Email,Password,Phone,Age} = req.body;
const updatedCliente = await clientes.findByIdAndUpdate(
    req.params.id,
    { Name, Email, Password, Phone, Age },
    { new: true }
);
res.json(updatedCliente);
}

clientesController.deleteCliente = async (req, res) => {
    try {
        const deletedCliente = await clientes.findByIdAndDelete(req.params.id);
        if (!deletedCliente) {
            return res.status(404).json({ message: "Cliente not found" });
        }
        res.json({ message: "Cliente deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default clientesController;