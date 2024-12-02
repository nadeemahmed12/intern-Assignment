const mongoose = require('mongoose');

// Define the Assignment Schema
const assignmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: 'User',
    required: true, // Assignment must belong to a user
  },
  task: {
    type: String,
    required: [true, 'Task description is required'],
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId, // Reference to Admin (User model)
    ref: 'User',
    required: true, // Must be assigned to an admin
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'], // Valid statuses
    default: 'Pending', // Default status
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

module.exports = mongoose.model('Assignment', assignmentSchema);
