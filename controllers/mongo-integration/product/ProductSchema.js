import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    images: String
},{
    versionKey: false 
 });

