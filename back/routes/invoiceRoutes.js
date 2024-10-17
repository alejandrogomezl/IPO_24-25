const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

// Crear una nueva pieza en el inventario
router.post('/', async (req, res) => {
  const newInventoryItem = new Inventory(req.body);
  try {
    const savedItem = await newInventoryItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener todas las piezas en inventario
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener una pieza de inventario por ID
router.get('/:id', async (req, res) => {
  try {
    const inventoryItem = await Inventory.findById(req.params.id);
    if (!inventoryItem) return res.status(404).json({ message: 'Pieza no encontrada' });
    res.json(inventoryItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar una pieza en inventario
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una pieza de inventario
router.delete('/:id', async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pieza eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
