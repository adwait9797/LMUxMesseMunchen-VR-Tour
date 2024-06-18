const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tourRoutes = require('./routes/tourRoutes');

const app = express();
const port = process.env.PORT || 5002;

mongoose.connect('mongodb://localhost:27017/vr_tour_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/api/tours', tourRoutes); // Ensure this matches the frontend URL

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});
