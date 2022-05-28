const Blog=require('../models/blog');
const User=require('../models/user');
const Review=require('../models/review');

//home
module.exports.home=async function(req,res){
    res.send("Helllooooo");
}


//adding an user
module.exports.addUser=async function(req,res){
    try{
        let user=await User.create(req.body)
        return res.json(200,{
            message:"User added successfully",
            user:user
        })
    }
    catch(err){
        return res.json(500,{
            message:'Internal Server Error',
            error:err
        })
    }
}


//add blog
module.exports.add=async function(req,res){
    try{
        let blog=await Blog.create(req.body)
        return res.json(200,{
            message:"Blog added successfully",
            blog:blog
        })
    }
    catch(err){
        return res.json(500,{
            message:"Internal Server error",
            error:err
        })
    }
}


//read all the blog
module.exports.read=async function(req,res){
    try{
        let blog=await Blog.find({})
        .sort('-createdAt')
        return res.json(200,{
            message:"List of Blog",
            blog:blog
        })
    }
    catch(err){
        return res.json(500,{
            message:'Internal Server error',
            error:err
        })
    }
}


//read blog by id
module.exports.blogId=async function(req,res){
    try{
        let blog=await Blog.findById(req.query.id);
        return res.json(200,{
            message:'Blog Founded !!!',
            blog:blog
        })
    }
    catch(err){
        return res.json(500,{
            message:"Internal Server Error",
            error:err
        })
    }
}


//update a blog
module.exports.update=async function(req,res){
    try{
        let blog=await Blog.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            return res.json(200,{
                message:"Blog updated successfully",
                blog:blog
            })
    }
    catch(err){
        return res.json(500,{
            message:"Internal server error",
            error:err
        })
    }
}


//delete a product
module.exports.deleteBlog=async function(req,res){
    try{
        let blog=await Blog.findByIdAndDelete(req.params.id);
        return res.json(200,{
            message:"Blog deleted successfully",
            blog:blog
        })
    }
    catch(err){
        return res.json(500,{
            message:"Internal server error",
            error:err
        })
    }
}


//add a review
module.exports.createReview=async function(req,res){
    try{
        let review=await Review.create({
            userId:req.query.userId,
            description:req.body.description
        });
        return res.json(200,{
            message:"Review added successfully",
            review:review
        })
    }
    catch(err){
        return res.json(500,{
            message:"Internal Server Error"
        })
    }
}


//delete a review
module.exports.deleteReview=async function(req,res){
    try{
        let review=await Review.findByIdAndDelete(req.params.id);
        return res.json(200,{
            message:'Review deleted successfully',
            review:review
        })
    }
    catch(err){
        return res.json(500,{
            message:"Internal Server Error",
            error:err
        })
    }
}
