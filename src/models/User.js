import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Unique username for the user.
  username: {
    type: String,
    required: true, // This field is mandatory.
    unique: true,   // Username must be unique across all users.
    trim: true,     // Removes whitespace from the beginning and end.
  },
  // Hashed password for security.
  password: {
    type: String,
    required: true, // This field is mandatory.
  },
  // Email address, also unique.
  email: {
    type: String,
    required: true, // This field is mandatory.
    unique: true,   // Email must be unique across all users.
    trim: true,
    lowercase: true, // Stores the email in lowercase.
  },
  // Timestamp for when the user was created.
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the current date.
  },
});

const User = mongoose.model('User', UserSchema);

export default User;