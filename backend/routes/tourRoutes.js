const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// GET all tour parts
router.get('/api/tour', async (req, res) => {
  try {
    const tour = await Tour.findOne();
    res.json(tour);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
