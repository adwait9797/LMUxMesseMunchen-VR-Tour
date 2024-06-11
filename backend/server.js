const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const Tour = require('./models/Tour');

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/vr_tour_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed the database
seedDB();

// Routes
app.get('/api/tour', async (req, res) => {
  try {
    const tour = await Tour.findOne();
    res.json(tour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
