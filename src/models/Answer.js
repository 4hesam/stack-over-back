import mongoose from 'mongoose';

// Create a schema for the Answer model.
const AnswerSchema = new mongoose.Schema({
  // The author of the answer, referencing the 'User' model.
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // The question this answer belongs to.
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question', // References the 'Question' model.
    required: true, // Every answer must be linked to a question.
  },
  // The main content of the answer.
  content: {
    type: String,
    required: true,
  },
  // An array to store embedded votes for this answer.
  votes: [{
    // The user who cast the vote.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // The type of vote.
    type: {
      type: String,
      enum: ['upvote', 'downvote'],
      required: true,
    },
  }],
  // The timestamp when the answer was created.
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Answer = mongoose.model('Answer', AnswerSchema);

export default Answer;