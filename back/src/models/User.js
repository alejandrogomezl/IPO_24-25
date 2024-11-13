// userModel.js
const mongoose = require('mongoose');
const Counter = require('./counterModel'); // Importar el modelo del contador

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true }, // Campo secuencial
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
  repairRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Repair' }],
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
  createdAt: { type: Date, default: Date.now }
});

// Middleware para incrementar el contador secuencial
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isNew) return next(); // Solo aplicar en nuevos documentos

  try {
    // Encuentra y actualiza el contador de usuarios
    const counter = await Counter.findOneAndUpdate(
      { name: 'user' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    // Asigna el valor secuencial al campo `userId`
    user.userId = counter.seq;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('User', userSchema);
