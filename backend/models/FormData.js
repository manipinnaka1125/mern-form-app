// backend/models/FormData.js
const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('FormData', FormDataSchema);
