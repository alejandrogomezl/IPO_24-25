const express = require('express');
const router = express.Router();
const Repair = require('../models/Repair');

// Crear una reparación
router.post('/', async (req, res) => {
  const newRepair = new Repair(req.body);
  try {
    const savedRepair = await newRepair.save();
    res.status(201).json(savedRepair);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener todas las reparaciones
router.get('/', async (req, res) => {
  try {
    const repairs = await Repair.find().populate('vehicle').populate('customer').populate('mechanic');
    res.json(repairs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener una reparación por ID
router.get('/:id', async (req, res) => {
  try {
    const repair = await Repair.findById(req.params.id).populate('vehicle').populate('customer').populate('mechanic');
    if (!repair) return res.status(404).json({ message: 'Reparación no encontrada' });
    res.json(repair);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar una reparación
router.put('/:id', async (req, res) => {
  try {
    const updatedRepair = await Repair.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRepair);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una reparación
router.delete('/:id', async (req, res) => {
  try {
    await Repair.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reparación eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
