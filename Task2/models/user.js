const mongoose=require('mongoose');


//creating the user schema 
//user is the one who will write the review
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;