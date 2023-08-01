const express = require('express');
const router = express.Router();
const { Thought, User } = require('./models');

// GET all thoughts
router.get('/', async (req, res) => {
  // Implementation for getting all thoughts
});

// GET a single thought by its _id
router.get('/:thoughtId', async (req, res) => {
  // Implementation for getting a single thought by its _id
});

// POST to create a new thought
router.post('/', async (req, res) => {
  // Implementation for creating a new thought
});

// PUT to update a thought by its _id
router.put('/:thoughtId', async (req, res) => {
  // Implementation for updating a thought by its _id
});

// DELETE to remove a thought by its _id
router.delete('/:thoughtId', async (req, res) => {
  // Implementation for deleting a thought by its _id
});

module.exports = router;
//Get to get all thoughts

//Get to get a single thought by its _id

//POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field). Compare this snippet from routes/api/userRoutes.js:

//PUT to update a thought by its _id

//DELETE to remove a thought by its _id