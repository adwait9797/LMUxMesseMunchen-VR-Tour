const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS

const app = express();
const PORT = process.env.PORT || 5002; // Ensure the port is 5002

app.use(cors()); // Use CORS
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/vr_tour_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const tourSchema = new mongoose.Schema({
  parts: [
    {
      title: String,
      imageUrl: String,
    },
  ],
});

const Tour = mongoose.model('Tour', tourSchema);

// Endpoint to get the tour data
app.get('/api/tour', async (req, res) => {
  try {
    const tour = await Tour.findOne();
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tour data' });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the VR Tour API, this is not the route for the data, it is at http://localhost:5002/api/tour');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
