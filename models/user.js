const mongoose=require('mongoose');

//Deine roles seperately for better management
const roles=['Admin','User'];

//user Schema defination
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username is required'],
        unique:true, //Ensure no dublicate usernames

    },
    password:{
        type:String,
        required:[true,'Password is required'],
    },

    role:{
        type: String,
        enum: roles, // Validates role against predefined roles
        default: 'User',
    },
},{timestamps:true});

module.exports = mongoose.model('User', userSchema);