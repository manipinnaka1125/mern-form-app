// backend/routes/form.js
const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData');

// Create a new form entry
router.post('/', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    const savedData = await formData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all form entries
router.get('/', async (req, res) => {
  try {
    const data = await FormData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
