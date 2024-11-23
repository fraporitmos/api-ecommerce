import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    gender: String,
    membresi: Boolean
})