const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the Reaction subdocument
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toISOString(), // Getter method to format the timestamp
  },
});

// Define the schema for the Thought model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toISOString(), // Getter method to format the timestamp
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Array of nested documents created with the reactionSchema
});

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Export the Thought model
module.exports = mongoose.model('Thought', thoughtSchema);

//thought

//thoughtText:
//String  
//Required
//Must be between 1 and 280 characters

//createdAt:
//Date
//Set default value to the current timestamp
//Use a getter method to format the timestamp on query

////username:
//String
//Required

//reactions (These are like replies):
//Array of nested documents created with the reactionSchema

//Schema Settings:

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.