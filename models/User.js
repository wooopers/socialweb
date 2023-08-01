const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the User model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/, // Regular expression to validate the email format
  },
  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }], // Array of _id values referencing the Thought model
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Array of _id values referencing the User model (self-reference)
});

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Export the User model
module.exports = mongoose.model('User', userSchema);


//username:
//String
//Unique
//Required
//Trimmed

//email:
//String
//Unique
//Required
//Trimmed
//Must match a valid email address (look into Mongoose's matching validation)

//thoughts:
//Array of _id values referencing the Thought model

//friends:
//Array of _id values referencing the User model (self-reference)

//Schema Settings:

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

//module.exports = { User, Post };