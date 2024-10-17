const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },  // Marca (ej. Koenigsegg)
  model: { type: String, required: true }, // Modelo
  price: { type: Number, required: true },
  capacity: { type: Number }, // Capacidad (ej. 2 personas)
  fuelType: { type: String }, // Tipo de combustible (ej. Gasolina)
  transmission: { type: String }, // Manual o Automático
  engine: { type: String },  // Tipo de motor
  inventoryCount: { type: Number, default: 1 },  // Número de unidades disponibles
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
