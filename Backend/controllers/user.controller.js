import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req,res) => {
         // *** Algorithm for Register a user **** 
         // get user details from frontend 
         // validation - not empty
         // check if user already exits: username / email
         // check for images , check for avatar
         // upload them to cloudinary , avatar
         // create user creation -  create entry in db
         // remove password and refresh token from response
         // check for user creation
         // return response   

        const {fullname , username , email , password } = req.body 
      //   console.log("email: " , email)
      //   console.log("password: " , password)
})


export {registerUser} 