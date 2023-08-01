//POST to create a reaction stored in a single thought's reactions array field

//DELETE to pull and remove a reaction by the reaction's reactionId value


const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Other configurations and middleware setup
// ...

// Connect to your MongoDB database using Mongoose (assuming you have done the setup)
mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the Express JSON middleware for parsing JSON data in requests
app.use(express.json());

// Import the necessary models and route handlers for thoughts, reactions, and users
const { Thought, User } = require('./models');
const thoughtsRoutes = require('./thoughtsRoutes');
const reactionsRoutes = require('./reactionsRoutes');
const userRoutes = require('./userRoutes'); // Import the userRoutes module

// Define the route for creating and deleting reactions by using the imported reactionsRoutes
app.use('/api', reactionsRoutes);

// Define the route for thoughts using the imported thoughtsRoutes
app.use('/api/thoughts', thoughtsRoutes);

// Define the route for user-related actions using the imported userRoutes
app.use('/api/users', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


