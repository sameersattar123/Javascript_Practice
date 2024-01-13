import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../modals/youtube/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
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

  // get user details from frontend
  const { fullname, username, email, password } = req.body;

  // validation
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All feilds are required");
  }

  // check if user already exits: username / email
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username alreday exists");
  }

  // check for images , check for avatar
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {  
    throw new ApiError(400, "Avatar feild is required");
  }

  // upload them to cloudinary , avatar
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar feild is require");
  } 

  // create user creation -  create entry in db
  const user = await User.create({
    email,
    password,
    username: username.toLowerCase(),
    avatar: avatar.url,
    fullname,
    coverImage: coverImage?.url || "",
  }); 

  // remove password and refresh token from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // check for user creation
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
  // return response
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

export { registerUser };
