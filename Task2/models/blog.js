const mongoose=require('mongoose');


//defining the blog schema
//uDate and cDate will automatically be handled by the timestamps
const blogSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true,
    },
},{
    timestamps:true
});

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;