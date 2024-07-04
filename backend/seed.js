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
    name: 'Sample Tour',
    type: 'Virtual',
    description: 'A sample VR tour of Messe München.',
    parts: [
      { 
        title: 'Main Hall', 
        description: 'The main hall of the Messe München.', 
        imageUrl: 'assets/main_hall.jpg',
        hotspots: [
          { title: 'Main Hall Info 1', position: '7 1 -3', description: 'This is the first hotspot in the Main Hall.' },
          { title: 'Main Hall Info 2', position: '-1 2 -4', description: 'This is the second hotspot in the Main Hall.' },
        ],
        arrowHotspots: [
          { title: 'To Auditorium', position: '3 0 -5', targetRoom: 'Auditorium' },
          { title: 'To Entrance West', position: '9 -2 2', targetRoom: 'Entrance West' },
        ],
      },
      { 
        title: 'Auditorium', 
        description: 'The auditorium of the Messe München.', 
        imageUrl: 'assets/Auditorium.jpg',
        hotspots: [
          { title: 'Auditorium Info 1', position: '0 1.5 -2', description: 'This is the first hotspot in the Auditorium.' },
          { title: 'Auditorium Info 2', position: '1 -1 -3', description: 'This is the second hotspot in the Auditorium.' },
        ],
        arrowHotspots: [
          { title: 'To Auditorium', position: '3 0 -5', targetRoom: 'Auditorium' },
        ],
      },
      { 
        title: 'Entrance West', 
        description: 'The west entrance of the Messe München.', 
        imageUrl: 'assets/entrance_west.jpg',
        hotspots: [
          { title: 'Entrance West Info 1', position: '1 0.5 -2.5', description: 'This is the first hotspot at the Entrance West.' },
          { title: 'Entrance West Info 2', position: '-0.5 1 -2', description: 'This is the second hotspot at the Entrance West.' },
        ],
        arrowHotspots: [
          { title: 'To Auditorium', position: '3 0 -5', targetRoom: 'Auditorium' },
        ],
      },
      { 
        title: 'First Entrance', 
        description: 'The first entrance of the Messe München.', 
        imageUrl: 'assets/first_entrance.jpg',
        hotspots: [
          { title: 'First Entrance Info 1', position: '1 1 -3', description: 'This is the first hotspot at the First Entrance.' },
          { title: 'First Entrance Info 2', position: '-1 1.5 -3.5', description: 'This is the second hotspot at the First Entrance.' },
        ],
        arrowHotspots: [
          { title: 'To Auditorium', position: '3 0 -5', targetRoom: 'Auditorium' },
        ],
      },
      { 
        title: 'Hall 1', 
        description: 'The first hall of the Messe München.', 
        imageUrl: 'assets/hall1.jpg',
        hotspots: [
          { title: 'Hall 1 Info 1', position: '1 0.5 -2.5', description: 'This is the first hotspot in Hall 1.' },
          { title: 'Hall 1 Info 2', position: '-0.5 1 -2', description: 'This is the second hotspot in Hall 1.' },
        ],
        arrowHotspots: [
          { title: 'To Auditorium', position: '3 0 -5', targetRoom: 'Auditorium' },
        ],
      },
      { 
        title: 'Hall 2', 
        description: 'The second hall of the Messe München.', 
        imageUrl: 'assets/hall2.jpg',
        hotspots: [
          { title: 'Hall 2 Info 1', position: '1 1 -3', description: 'This is the first hotspot in Hall 2.' },
          { title: 'Hall 2 Info 2', position: '-1 2 -4', description: 'This is the second hotspot in Hall 2.' },
        ],
        arrowHotspots: [
          { title: 'To Auditorium', position: '3 0 -5', targetRoom: 'Auditorium' },
        ],
      },
      { 
        title: 'B0', 
        description: 'The B0 hall of the Messe München.', 
        imageUrl: 'assets/B0.jpg',
        hotspots: [
          { title: 'B0 Info 1', position: '1 1 -3', description: 'This is the first hotspot in B0.' },
          { title: 'B0 Info 2', position: '-1 2 -4', description: 'This is the second hotspot in B0.' },
        ],
        arrowHotspots: [
          { title: 'To Auditorium', position: '3 0 -5', targetRoom: 'Auditorium' },
        ],
      },
    ],
  });

  await sampleTour.save();
  console.log('Sample tour data seeded');

  mongoose.connection.close();
});
