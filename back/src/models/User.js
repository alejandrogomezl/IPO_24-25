// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: String,
  email: String,
});

module.exports = mongoose.model('User', UserSchema);
