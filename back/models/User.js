const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'mechanic', 'admin'], required: true },
  phone: { type: String },
  address: { 
    street: String, 
    city: String, 
    postalCode: String 
  },
  repairRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Repair' }], // Si es cliente
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
