const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/api/users', userController.getAllUsers);

// GET a single user by ID
router.get('/api/users/:id', userController.getUserById);

// CREATE a new user
router.post('/api/users', userController.createUser);

// UPDATE a user
router.put('/api/users/:id', userController.updateUser);

// DELETE a user
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;
