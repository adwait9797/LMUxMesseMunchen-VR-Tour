const mongoose = require('mongoose');

const navigationSchema = new mongoose.Schema({
  tour_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
  step_number: { type: Number, required: true },
  from_room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  to_room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  instruction: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Navigation', navigationSchema);
