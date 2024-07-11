const express = require('express');
const router = express.Router();
const NpsSurvey = require('../models/NpsSurvey.js');

router.post('/', async (req, res) => {
  const { rating } = req.body;

  if (rating === undefined || rating < 0 || rating > 10) {
    return res.status(400).json({ message: 'Invalid rating. Rating must be between 0 and 10.' });
  }

  try {
    const newSurvey = new NpsSurvey({ rating });
    await newSurvey.save();
    res.status(201).json({ message: 'Thank you for your feedback!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;