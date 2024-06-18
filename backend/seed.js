const mongoose = require('mongoose');
const Tour = require('./models/Tour');

mongoose.connect('mongodb://localhost:27017/vr_tour_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  await Tour.deleteMany({});
  
  const sampleTour = new Tour({
    name: 'Sample Tour', // Added field
    type: 'Virtual', // Added field
    description: 'A sample VR tour of Messe München.', // Added field
    parts: [
      { title: 'Main Hall', description: 'The main hall of the Messe München.', imageUrl: 'assets/main_hall.jpg' },
      { title: 'Auditorium', description: 'The auditorium of the Messe München.', imageUrl: 'assets/Auditorium.jpg' },
      { title: 'Entrance West', description: 'The west entrance of the Messe München.', imageUrl: 'assets/entrance_west.jpg' },
      { title: 'First Entrance', description: 'The first entrance of the Messe München.', imageUrl: 'assets/first_entrance.jpg' },
      { title: 'Hall 1', description: 'The first hall of the Messe München.', imageUrl: 'assets/hall1.jpg' },
      { title: 'Hall 2', description: 'The second hall of the Messe München.', imageUrl: 'assets/hall2.jpg' },
      { title: 'B0', description: 'The B0 hall of the Messe München.', imageUrl: 'assets/B0.jpg' },
    ],
  });

  await sampleTour.save();
  console.log('Sample tour data seeded');

  mongoose.connection.close();
});
