const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection to local instance
mongoose.connect('mongodb://localhost:27017/vr_tour_db').then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Define the schema for tour parts
const partSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

// Define the schema for the tour
const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  parts: [partSchema],
});

// Create the model for the tour
const Tour = mongoose.model('Tour', tourSchema, 'tours'); // Explicitly mention the collection name 'tours'

// API Endpoint to get the tour details
app.get('/api/tour', async (req, res) => {
  try {
    console.log('Received GET /api/tour request');
    const tour = await Tour.findOne();
    console.log('Tour data:', tour);
    res.json(tour);
  } catch (err) {
    console.error('Error in GET /api/tour:', err);
    res.status(500).json({ error: err.message });
  }
});

// API Endpoint to create or update the tour details
app.post('/api/tour', async (req, res) => {
  try {
    const { title, parts } = req.body;
    let tour = await Tour.findOne();
    if (tour) {
      // Update existing tour
      tour.title = title;
      tour.parts = parts;
      await tour.save();
    } else {
      // Create a new tour
      tour = new Tour({ title, parts });
      await tour.save();
    }
    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Root path route
app.get('/', (req, res) => {
  res.send('Welcome to the VR Tour API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
