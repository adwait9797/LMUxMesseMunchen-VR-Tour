const mongoose = require('mongoose');

const npsSurveySchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('NpsSurvey', npsSurveySchema);
