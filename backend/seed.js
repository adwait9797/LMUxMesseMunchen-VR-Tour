const mongoose = require('mongoose');
const Tour = require('./models/Tour');

const seedDB = async () => {
  await Tour.deleteMany({});
  
  const sampleTour = new Tour({
    title: 'Sample VR Tour',
    parts: [
      {
        title: 'Room 1',
        description: 'This is the first room of the tour.',
        imageUrl: 'https://images.pexels.com/photos/2217658/pexels-photo-2217658.jpeg',
      },
      {
        title: 'Room 2',
        description: 'This is the second room of the tour.',
        imageUrl: 'https://images.pexels.com/photos/3286160/pexels-photo-3286160.jpeg',
      },
      // Add more rooms as needed
    ],
  });

  await sampleTour.save();
};

module.exports = seedDB;
