const express=require('express')
const authenticate=require("../middlewares/authMiddleware")
const authorize=require('../middlewares/adminAuth');
const { viewAssignments, acceptAssignment,rejectAssignment } = require('../controllers/adminController');
const router=express.Router();

//view assignments tagged to the admin
router.get('/getassignments',authenticate,authorize,viewAssignments );

//accept an assignment.
router.post('/assignments/:id/accept',authenticate,acceptAssignment);


//accept an assignment.
router.post('/assignments/:id/reject',authenticate,rejectAssignment);

module.exports=router;