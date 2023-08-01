const express = require('express');
const router = express.Router();
const { User } = require('./models');

// POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    // Find the user and friend by their IDs
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (!user || !friend) {
      return res.status(404).json({ message: 'User or friend not found.' });
    }

    // Check if the friend is already in the user's friend list
    if (user.friends.includes(friendId)) {
      return res.status(400).json({ message: 'Friend already in the friend list.' });
    }

    // Add the friend to the user's friend list
    user.friends.push(friendId);
    await user.save();

    return res.json({ message: 'Friend added successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong.', error });
  }
});

// DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    // Find the user by their ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if the friend is in the user's friend list
    if (!user.friends.includes(friendId)) {
      return res.status(400).json({ message: 'Friend not found in the friend list.' });
    }

    // Remove the friend from the user's friend list
    user.friends.pull(friendId);
    await user.save();

    return res.json({ message: 'Friend removed successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong.', error });
  }
});

module.exports = router;



// /api/users/:userId/friends/:friendId

//POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list