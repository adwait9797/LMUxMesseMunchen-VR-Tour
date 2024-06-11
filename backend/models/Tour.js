const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});

const tourSchema = new mongoose.Schema({
  title: String,
  parts: [partSchema],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
