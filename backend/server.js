const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');

const app = express();
const port = 5002;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/vr_tour_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/tours', tourRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
