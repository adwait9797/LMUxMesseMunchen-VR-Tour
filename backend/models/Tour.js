const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true, enum: ['self-guided', 'guided'] },
  guide_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  start_location: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  end_location: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  parts: [partSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tour', tourSchema);
