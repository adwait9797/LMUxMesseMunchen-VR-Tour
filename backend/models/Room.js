const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  facility_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Facility' },
  location_coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  connected_rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
  elements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RoomElement' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Room', roomSchema);
