const express = require('express');
const router = express.Router();
const tourController = require('../Controllers/tourController');

// GET all tours
router.get('/', tourController.getAllTours);

// GET a single tour by ID
router.get('/:id', tourController.getTourById);

// CREATE a new tour
router.post('/', tourController.createTour);

// UPDATE a tour
router.put('/:id', tourController.updateTour);

// DELETE a tour
router.delete('/:id', tourController.deleteTour);

module.exports = router;
