import mongoose from "mongoose";

export const CartSchema = new mongoose.Schema({
    arrayProductsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    coupon: {type:String, default: "NONE"},
    status: {type:String, default:"CREATED"}
 },{
    versionKey: false 
 });

