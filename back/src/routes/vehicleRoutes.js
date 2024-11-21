const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// Crear un vehículo
router.post('/', async (req, res) => {
  const newVehicle = new Vehicle(req.body);
  try {
    const savedVehicle = await newVehicle.save();
    res.status(201).json(savedVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener todos los vehículos
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find(); // Devuelve todos los documentos
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Obtener un vehículo por ID
router.get('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: 'Vehículo no encontrado' });
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar un vehículo
router.put('/:id', async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un vehículo
router.delete('/:id', async (req, res) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vehículo eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
