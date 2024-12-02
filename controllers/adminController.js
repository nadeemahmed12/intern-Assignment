const Assignment=require('../models/assignment');

// View all assignments tagged to the admin
const viewAssignments = async (req, res) => {
  try {
    const adminId = req.user.id; // Assume admin is authenticated and their ID is available in `req.user`
    const assignments = await Assignment.find({ admin: adminId });

    if (assignments.length === 0) {
      return res.status(404).json({ message: 'No assignments found for this admin.' });
    }

    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving assignments', error: error.message });
  }
};


// Accept Assignment
const acceptAssignment = async (req, res) => {
  try {
    const assignmentId = req.params.id;
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      assignmentId,
      { status: 'Accepted' },
      { new: true } // Return updated document
    );
    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    res.status(200).json({ message: 'Assignment accepted', assignment: updatedAssignment });
  } catch (error) {
    res.status(500).json({ message: 'Error accepting assignment', error: error.message });
  }
};


// Reject Assignment
const rejectAssignment = async (req, res) => {
  try {
    const assignmentId = req.params.id;
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      assignmentId,
      { status: 'Rejected' },
      { new: true }
    );
    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    res.status(200).json({ message: 'Assignment rejected', assignment: updatedAssignment });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting assignment', error: error.message });
  }
};


module.exports={viewAssignments,acceptAssignment,rejectAssignment};