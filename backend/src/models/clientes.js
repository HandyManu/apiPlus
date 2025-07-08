import { Schema, model } from "mongoose";

const clientesSchema = new Schema({
  Name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
    minlength: [2, "El nombre debe tener al menos 2 caracteres"]
  },
  Email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    trim: true,
    lowercase: true,
    unique: true,
    match: [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Formato de correo inválido" ]
  },
  Password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
    minlength: [6, "La contraseña debe tener al menos 6 caracteres"]
  },
  Phone: {
    type: String,
    required: [true, "El teléfono es obligatorio"],
    match: [ /^[0-9\-+\s()]{7,15}$/, "Formato de teléfono no válido" ]
  },
  Age: {
    type: Number,
    required: [true, "La edad es obligatoria"],
    min: [18, "Debe ser mayor de edad"],
    max: [120, "Edad fuera de rango razonable"]
  }
}, {
  timestamps: true,
  strict: true
});

export default model("Clientes", clientesSchema);
