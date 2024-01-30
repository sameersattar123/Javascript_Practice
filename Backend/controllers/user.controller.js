import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../modals/youtube/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};

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

const loginUser = asyncHandler(async (req, res) => {
  // **** Algorithm for Login a user ****
  // req body --> data
  // username or email
  // find the user
  // password check
  // access or refresh token
  // send cookie

  // req body --> data
  const { username, email, password } = req.body;

  // username or email
  if (!username || !email) {
    throw new ApiResponse(400, "username or email is required");
  }

  // find the user
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiResponse(404, "User does not exits");
  }

  // password check
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiResponse(401, "Invalid Credentials");
  }

  // access or refresh token
  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  // send cookies
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In SuccessFully"
      )
    );
});

const  logoutUser = asyncHandler(async ( res, req , next) => {
  
})

export { registerUser, loginUser , logoutUser };
