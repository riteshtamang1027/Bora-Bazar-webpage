import mongoose from "mongoose";


const ProdcutSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    sale:{type:String}, 
    description:{type:String,required:false}, 
    previousPrice:{type:Number,required:true},
    price:{type:Number,required:true},
    imgurl:{type:String,required:true},

});
export const product = mongoose.model("products",ProdcutSchema); 