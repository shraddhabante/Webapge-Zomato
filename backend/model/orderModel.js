let mongoose=require("mongoose");
mongoose.pluralize(null);

let orderSchema=mongoose.Schema({
    _id:Number,
    userName:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true,
    },
    noOfItems:{
        type:Number,
        required:true,
    },
    orderDate:{  
        type:String,
        required:false
    },
    location:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:false
    }

})

let orderModel=mongoose.model("OrderData",orderSchema);
module.exports=orderModel;