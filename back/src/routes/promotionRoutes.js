const express = require('express');
const router = express.Router();
const Promotion = require('../models/Promotion');

// Crear una nueva promoción
router.post('/', async (req, res) => {
  const newPromotion = new Promotion(req.body);
  try {
    const savedPromotion = await newPromotion.save();
    res.status(201).json(savedPromotion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener todas las promociones
router.get('/', async (req, res) => {
  try {
    const promotions = await Promotion.find().populate('applicableTo');
    res.json(promotions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener una promoción por ID
router.get('/:id', async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id).populate('applicableTo');
    if (!promotion) return res.status(404).json({ message: 'Promoción no encontrada' });
    res.json(promotion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar una promoción
router.put('/:id', async (req, res) => {
  try {
    const updatedPromotion = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPromotion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una promoción
router.delete('/:id', async (req, res) => {
  try {
    await Promotion.findByIdAndDelete(req.params.id);
    res.json({ message: 'Promoción eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
