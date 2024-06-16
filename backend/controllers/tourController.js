const Tour = require('../models/Tour');

// Get all tours
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find().populate('guide_id start_location end_location');
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single tour by ID
exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate('guide_id start_location end_location');
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new tour
exports.createTour = async (req, res) => {
  const tour = new Tour({
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    guide_id: req.body.guide_id,
    start_location: req.body.start_location,
    end_location: req.body.end_location,
    parts: req.body.parts
  });
  try {
    const newTour = await tour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a tour
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    tour.name = req.body.name || tour.name;
    tour.description = req.body.description || tour.description;
    tour.type = req.body.type || tour.type;
    tour.guide_id = req.body.guide_id || tour.guide_id;
    tour.start_location = req.body.start_location || tour.start_location;
    tour.end_location = req.body.end_location || tour.end_location;
    tour.parts = req.body.parts || tour.parts;
    tour.updated_at = Date.now();

    const updatedTour = await tour.save();
    res.json(updatedTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a tour
exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    await tour.remove();
    res.json({ message: 'Tour deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
