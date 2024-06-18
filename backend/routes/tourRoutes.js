const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
