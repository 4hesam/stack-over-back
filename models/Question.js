import mongoose from 'mongoose';

// Create a schema for the Question model.
const QuestionSchema = new mongoose.Schema({
  // The author of the question, referencing the 'User' model.
  author: {
    type: mongoose.Schema.Types.ObjectId, // The type is a MongoDB document ID.
    ref: 'User', // References the 'User' model.
    required: true, // This field is mandatory.
  },
  // The title of the question.
  title: {
    type: String,
    required: true,
  },
  // The main content of the question.
  content: {
    type: String,
    required: true,
  },
  // An array to store embedded votes for this question.
  votes: [{
    // The user who cast the vote.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // The type of vote (e.g., 'upvote' or 'downvote').
    type: {
      type: String,
      enum: ['upvote', 'downvote'], // Only these two values are allowed.
      required: true,
    },
  }],
  // An array of IDs of the answers related to this question.
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer', // References the 'Answer' model.
  }],
  // The timestamp when the question was created.
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;