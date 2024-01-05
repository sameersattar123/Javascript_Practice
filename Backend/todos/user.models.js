import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({

})

export const User = mongoose.model("User" , UserSchema)