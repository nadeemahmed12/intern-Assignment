const Assignment = require('../models/assignment');
const User = require('../models/user');

// Upload Assignment
const uploadAssignment = async (req, res) => {
  try {
    const { userId, task, admin } = req.body;

    // Check if userId, task, and admin are provided
    if (!userId || !task || !admin) {
      return res.status(400).json({ message: 'All fields are required: userId, task, admin' });
    }

    // Check if admin exists and is an admin
    const adminUser = await User.findOne({ _id: admin, role: 'Admin' });
    if (!adminUser) {
      return res.status(404).json({ message: 'Admin not found or not an admin' });
    }

    // Create a new assignment
    const assignment = new Assignment({
      userId,
      task,
      admin,
    });

    // Save assignment to DB
    await assignment.save();
    res.status(201).json({ message: 'Assignment uploaded successfully', assignment });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

//get all admins
const getAllAdmins = async (req, res) => {
  try {
    // Fetch all users with role "Admin"
    const admins = await User.find({ role: 'Admin' }).select('-password'); // dontshowpassword for security
    res.status(200).json({ message: 'Admins fetched successfully', admins });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports={uploadAssignment,getAllAdmins};
