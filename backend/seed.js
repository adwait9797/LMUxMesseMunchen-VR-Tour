const mongoose = require('mongoose');

// MongoDB connection to local instance
mongoose.connect('mongodb://localhost:27017/vr_tour_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected for seeding');
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

const seedData = async () => {
  const tourData = {
    title: 'Sample VR Tour',
    parts: [
      {
        title: 'Room 1',
        description: 'This is the first room of the tour.',
        imageUrl: 'path/to/your/image1.jpg',
      },
      {
        title: 'Room 2',
        description: 'This is the second room of the tour.',
        imageUrl: 'path/to/your/image2.jpg',
      },
    ],
  };

  try {
    // Clear existing data
    await Tour.deleteMany({});
    // Insert seed data
    await Tour.create(tourData);
    console.log('Data seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedData();
