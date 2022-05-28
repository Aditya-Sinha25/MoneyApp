const mongoose=require('mongoose');

//defining the review schema
//uDate and cDate will automatically be handled by the timestamps
//userId is the id of the user who has written the review.
const reviewSchema =new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
},{
    timestamps:true
});

const Review=mongoose.model('Review',reviewSchema);
module.exports=Review;