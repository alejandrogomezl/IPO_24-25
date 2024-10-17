const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema({
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mechanic: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Mecánico asignado
  status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' },
  description: { type: String, required: true },  // Descripción del problema
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

module.exports = mongoose.model('Repair', repairSchema);
