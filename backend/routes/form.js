// backend/routes/form.js
const connectDB = require('../db');
const FormData = require('../models/FormData');

// Connect to MongoDB
connectDB();

// Create a new form entry
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const formData = new FormData(req.body);
      const savedData = await formData.save();
      res.status(201).json(savedData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else if (req.method === 'GET') {
    try {
      const data = await FormData.find();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
