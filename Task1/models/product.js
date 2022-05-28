const mongoose=require('mongoose');
const uuid=require('uuidv4');


//defining the product schema
//uDate and cDate will automatically be handled by the timestamps
const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
},{
    timestamps:true
});

const Product=mongoose.model('Product',productSchema);
module.exports=Product;