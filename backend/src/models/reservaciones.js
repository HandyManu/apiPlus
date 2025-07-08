import { Schema, model } from "mongoose";

const reservacionesSchema = new Schema({
  ClientId: {
    type: Schema.Types.ObjectId,
    ref: "Clientes",
    required: [true, "El ID del cliente es obligatorio"]
  },
  Vehicle: {
    type: String,
    required: [true, "El vehículo es obligatorio"],
    trim: true,
    minlength: [3, "El nombre del vehículo es muy corto"]
  },
  Service: {
    type: String,
    required: [true, "El tipo de servicio es obligatorio"],
  },
  Status: {
    type: String,
    required: [true, "El estado es obligatorio"],
  }
}, {
  timestamps: true,
  strict: true
});

export default model("Reservaciones", reservacionesSchema);
