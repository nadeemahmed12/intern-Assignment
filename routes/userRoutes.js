const express=require('express');
const { uploadAssignment, getAllAdmins } = require('../controllers/userController');
const router=express.Router();



//upload an assignment
router.post('/upload',uploadAssignment);

//fetch all admins
router.get('/getalladmins',getAllAdmins);

module.exports=router;