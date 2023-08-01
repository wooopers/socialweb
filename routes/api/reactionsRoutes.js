const express = require('express');
const router = express.Router();
const { Thought } = require('./models');

// POST route to create a reaction for a single thought
router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
  // Your POST route handler for creating a reaction (same as provided in the previous response)
  // ...
});

// DELETE route to remove a reaction from a single thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
  // Your DELETE route handler for removing a reaction (same as provided in the previous response)
  // ...
});

module.exports = router;
