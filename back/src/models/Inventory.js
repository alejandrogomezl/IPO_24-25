const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  partName: { type: String, required: true },
  quantity: { type: Number, required: true },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },  // Piezas específicas para un vehículo
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', inventorySchema);
