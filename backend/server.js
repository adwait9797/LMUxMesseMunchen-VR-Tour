const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tourRoutes = require('./routes/tourRoutes');

const app = express();
const port = 5002;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/vr_tour_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(tourRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
