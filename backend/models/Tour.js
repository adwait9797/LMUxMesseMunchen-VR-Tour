const mongoose = require('mongoose');

const hotspotSchema = new mongoose.Schema({
  title: { type: String, required: true },
  position: { type: String, required: true },
  description: { type: String, required: true }
});

const arrowHotspotSchema = new mongoose.Schema({
  title: { type: String, required: true },
  position: { type: String, required: true },
  targetRoom: { type: String, required: true }
});

const partSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  hotspots: [hotspotSchema],
  arrowHotspots: [arrowHotspotSchema]
});

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  parts: [partSchema]
});

module.exports = mongoose.model('Tour', tourSchema);