const Room = require('../models/Room');

// Get all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate('facility_id connected_rooms elements');
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single room by ID
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate('facility_id connected_rooms elements');
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new room
exports.createRoom = async (req, res) => {
  const room = new Room({
    name: req.body.name,
    description: req.body.description,
    facility_id: req.body.facility_id,
    location_coordinates: req.body.location_coordinates,
    connected_rooms: req.body.connected_rooms,
    elements: req.body.elements
  });
  try {
    const newRoom = await room.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a room
exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    room.name = req.body.name || room.name;
    room.description = req.body.description || room.description;
    room.facility_id = req.body.facility_id || room.facility_id;
    room.location_coordinates = req.body.location_coordinates || room.location_coordinates;
    room.connected_rooms = req.body.connected_rooms || room.connected_rooms;
    room.elements = req.body.elements || room.elements;
    room.updated_at = Date.now();

    const updatedRoom = await room.save();
    res.json(updatedRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a room
exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    await room.remove();
    res.json({ message: 'Room deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
