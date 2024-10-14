// back/src/routes/users.js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

module.exports = router;
