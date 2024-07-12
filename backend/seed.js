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
        title: 'Atrium West', 
        description: 'Welcome to the West Entrance of Messe München, a gateway to one of the worlds leading trade fair centers. The modern architecture, featuring wide open spaces and glass facades, ensures efficient crowd management and a bright, welcoming atmosphere. This design also emphasizes sustainability, with 38,000 square meters of solar panels powering much of the venue.', 
        imageUrl: 'assets/main_hall.jpg',
        hotspots: [
          { title: 'Solar Panels', position: '0 8 0', description: 'The photovoltaic system on the roofs of our trade fair halls supports electric supply on the grounds and is among the world’s largest photovoltaic roof systems.' },
          { title: 'Atrium West', position: '-7 1 -4', description: 'The atrium is designed to be a multifunctional space that can host a variety of situations, from exhibitions to receptions. It features a glass roof that allows natural light to flood the area, creating a bright and welcoming atmosphere for visitors' },
        ],
        arrowHotspots: [
          { title: 'To ICM Main Foyer', position: '6 -2 5', targetRoom: 'ICM Main Foyer' },
          { title: 'To Entrance West', position: '7 -2 1', targetRoom: 'Entrance West' },
          { title: 'To First Entrance', position: '7 -2 -5', targetRoom: 'First Entrance' },
        ],
      },
      { 
        title: 'Auditorium', 
        description: 'With ascending seating and a stage area of 277 square metres, our Hall 1 with Auditorium is the ideal hall for your stage-oriented events such as congresses, opening ceremonies and fashion shows. ', 
        imageUrl: 'assets/Auditorium.jpg',
        hotspots: [
          { title: 'Flexible for your needs', position: '0 1 8', description: 'Every second row of seats can be converted into tables, providing 746 parliamentary seating positions.' },
          { title: 'The Stage', position: '-10 1 1', description: 'The stage is height-adjustable and can be extended with a catwalk.' },
          { title: 'The Screen', position: '-10 3 -2', description: 'The screen, measuring 14m x 15m, offers a projection surface on par with international large-scale cinemas.' },

        ],
        arrowHotspots: [
          { title: 'To ICM Foyer 2', position: '5 2 -5', targetRoom: 'ICM Foyer 2' },
        ],
      },
      { 
        title: 'Entrance West', 
        description: ' The West Entrancce is directly connected to the Messestadt West subway station on the U2 line, which makes it convenient for visitors to reach the exhibition centers', 
        imageUrl: 'assets/entrance_west.jpg',
        hotspots: [
          { title: 'Entrance West', position: '-5 3 5', description: 'The West Entrance of Messe Muenchen features a large, open foyer that is often used for registration and welcoming guests. This space is designed to handle large crowds efficiently, making it ideal for major international trade fairs and exhibitions.' },
          { title: 'Rainwater Lakes', position: '4 2 -10', description: 'The lakes on the grounds are fed with rainwater from rooftops that we collect in our own rainwater storage' },
        ],
        arrowHotspots: [
          { title: 'To Atrium West', position: '-5 0 0', targetRoom: 'Atrium West' },
        ],
      },
      { 
        title: 'First Entrance', 
        description: 'This part of the Messe Muenchen facilities is the first entrance to the venue. It is a modern and welcoming space that hosts offices and congress rooms', 
        imageUrl: 'assets/first_entrance.jpg',
        hotspots: [
          { title: 'Reception', position: '5 0 5', description: 'This reception welcoms clients and visitors to the offices' },
          { title: 'Modern Design', position: '5 1 -3', description: 'This hall has a modern and curated design, with large glass walls that allow natural light to flood in, reducing the need for artificial lighting during the day' },
        ],
        arrowHotspots: [
          { title: 'To Atrium West', position: '-2 0 7', targetRoom: 'Atrium West' },
        ],
      },
      { 
        title: 'ICM Main Foyer', 
        description: 'The International Congress Center Munich (ICM), part of Messe München, is renowned for its advanced infrastructure and versatile spaces, making it ideal for hosting international conferences, meetings, and events. Equipped with state-of-the-art audiovisual technology, high-speed internet, and modern amenities, the ICM ensures a seamless experience for all attendees. Conveniently accessible via public transportation and located near major highways and Munich International Airport, it also offers nearby lodging options with numerous hotels. Emphasizing sustainability, the ICM incorporates energy-efficient designs and practices. With comprehensive event management and catering services, the ICM consistently hosts successful and diverse events, reflecting its reputation as a premier global venue.', 
        imageUrl: 'assets/hall1.jpg',
        hotspots: [
          { title: 'Capacity', position: '2 1 -7', description: 'With a total capacity of 6,000 people and a usable exhibition area of 7,000 square meters, the ICM is the perfect location for corporate events and conferences & congresses.' },
          { title: 'Main Foyer', position: '-9 3 -1', description: 'Suffused with light, our main foyer on the ground floor is the communicative core of the ICM.' },
        ],
        arrowHotspots: [
          { title: 'To Auditorium', position: '7 2 -3', targetRoom: 'Auditorium' },
          { title: 'To Hall B0', position: '7 -2 5', targetRoom: 'Hall B0' },
          { title: 'To ICM Foyer 2', position: '5 -2 0', targetRoom: 'ICM Foyer 2' },
        ],
      },
      { 
        title: 'ICM Foyer 2', 
        description: 'The ICM – International Congress Center Messe Muenchen: suitable for numerous event formats, such as annual general meetings, sales kick-offs and customer and partner events', 
        imageUrl: 'assets/hall2.jpg',
        hotspots: [
          { title: 'Location', position: '5 2 -4', description: 'The direct connection to the exhibition halls of the Trade Fair Center also provides the opportunity for growth.' },
          { title: 'ICM Main entrance', position: '-6 2 4', description: 'The foyer can be partitioned to create two separate areas, each with one entrance, making it possible to hold two large-scale events at the same time.' },
        ],
        arrowHotspots: [
          { title: 'To Auditorium', position: '-5 2 -4', targetRoom: 'Auditorium' },
          { title: 'To ICM Main Foyer', position: '5 -1 4', targetRoom: 'ICM Main Foyer' },
          
        ],
      },
      { 
        title: 'Hall B0', 
        description: 'Our ground-level Hall B0, with a gross area of 3,500 square meters, offers versatile usage options for up to 1,500 people. Thanks to its attractive architecture, our multifunctional space is perfect for your productions, shows, and events, as well as for a stylish gala dinner.', 
        imageUrl: 'assets/B0.jpg',
        hotspots: [
          { title: 'Choice of floor', position: '4 -2 4', description: 'Hall B0, featuring elegant real wood parquet flooring, can be excellently combined with our stylish foyer.' },
        ],
        arrowHotspots: [
          { title: 'To ICM Main Foyer', position: '0 0 -5', targetRoom: 'ICM Main Foyer' },
        ],
      },
    ],
  });

  await sampleTour.save();
  console.log('Sample tour data seeded');

  mongoose.connection.close();
});
