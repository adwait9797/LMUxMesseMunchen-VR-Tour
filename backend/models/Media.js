const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ['image', 'video', '3D_model'] },
  url: { type: String, required: true },
  description: { type: String, required: true },
  associated_rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Media', mediaSchema);
