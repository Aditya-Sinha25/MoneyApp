const Product=require('../models/product');
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


//add product
module.exports.add=async function(req,res){
    try{
        let product=await Product.create(req.body)
        return res.json(200,{
            message:"Product added successfully",
            product:product
        })
    }
    catch(err){
        return res.json(500,{
            message:"Internal Server error",
            error:err
        })
    }
}


//read all the product
module.exports.read=async function(req,res){
    try{
        let product=await Product.find({})
        .sort('-createdAt')
        return res.json(200,{
            message:"List of Products",
            product:product
        })
    }
    catch(err){
        return res.json(500,{
            message:'Internal Server error',
            error:err
        })
    }
}


//read product by id
module.exports.productId=async function(req,res){
    try{
        let product=await Product.findById(req.query.id);
        return res.json(200,{
            product:product
        })
    }
    catch(err){
        return res.json(500,{
            message:"Internal Server Error",
            error:err
        })
    }
}


//update a product
module.exports.update=async function(req,res){
    try{
        let product=await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            return res.json(200,{
                message:"Product updated successfully",
                product:product
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
module.exports.deleteProduct=async function(req,res){
    try{
        let product=await Product.findByIdAndDelete(req.params.id);
        console.log(product);
        return res.json(200,{
            message:"Product deleted successfully",
            product:product
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


//show all the review
//populating the user as well
module.exports.showAll=async function(req,res){
    try{
        let review=await Review.find({}).populate('userId');
        return res.json(200,{
            message:'Populating the review',
            review:review
        })
    }
    catch(err){
        return res.json(500,{
            message:'Internal server error',
            error:err
        })
    }
}