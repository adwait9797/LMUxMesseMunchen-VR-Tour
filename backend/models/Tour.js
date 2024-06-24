const mongoose = require('mongoose');

const hotspotSchema = new mongoose.Schema({
  title: { type: String, required: true },
  position: { type: String, required: true }, // 'x y z' format for A-Frame positioning
  description: { type: String, required: true } // Hotspot description
});

const partSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  hotspots: [hotspotSchema] // Add hotspots to each part
});

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  parts: [partSchema]
});

module.exports = mongoose.model('Tour', tourSchema);
