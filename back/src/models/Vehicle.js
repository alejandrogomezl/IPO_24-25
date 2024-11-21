const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  capacity: { type: Number },
  fuelType: { type: String },
  transmission: { type: String },
  engine: { type: String },
  inventoryCount: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
  image: { type: String },
  available: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
