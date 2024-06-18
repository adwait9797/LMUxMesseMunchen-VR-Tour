const express = require('express');
const router = express.Router();
const roomController = require('../controllers/RoomController');

// GET all rooms
router.get('/api/rooms', roomController.getAllRooms);

// GET a single room by ID
router.get('/api/rooms/:id', roomController.getRoomById);

// CREATE a new room
router.post('/api/rooms', roomController.createRoom);

// UPDATE a room
router.put('/api/rooms/:id', roomController.updateRoom);

// DELETE a room
router.delete('/api/rooms/:id', roomController.deleteRoom);

module.exports = router;
