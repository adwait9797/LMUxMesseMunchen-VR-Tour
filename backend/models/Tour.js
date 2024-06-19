const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Add this field
  type: { type: String, required: true }, // Add this field
  description: { type: String, required: true }, // Add this field
  parts: [partSchema]
});

module.exports = mongoose.model('Tour', tourSchema);
