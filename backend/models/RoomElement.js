const mongoose = require('mongoose');

const roomElementSchema = new mongoose.Schema({
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  type: { type: String, required: true, enum: ['text', 'string', 'quiz', 'image'] },
  content: { type: String, required: true },
  quiz_options: [{ type: String }],
  correct_answer: { type: String },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true }
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RoomElement', roomElementSchema);
