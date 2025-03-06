import { User } from "../schema/userSchema.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from 'jsonwebtoken'

// Crued operation
// 1.Create data
export const RegisterUser = async (req, res) => {
  try {
    const checkUserRegister = await User.findOne({ email: req.body.email });
    if (checkUserRegister) {
      return res.status(409).json({
        message: "User elready exist. Please regegistor by another name.",
      });
    }
    // Hash the password before saving data
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log(hashPassword);

    const createRegisteruser = await new User({
      ...req.body,
      password: hashPassword,
    }).save();
    return res.status(200).json({
      message: "User registation created successfully.",
      data: createRegisteruser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};
export const loginUser = async (req, res) => {
  try {
    // check if user already exist or not
    const checkUser = await User.findOne({ email: req.body.email });
    if (!checkUser) {
      return res.status(200).json({
        message: "Please  register first here.",
      });
    }
    // if the user is exist then compare their password
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );
    if (!isPasswordMatch) {
      return req.status(401).json({
        message: "Incorrect Password, Please tryagain.",
      });
    }
    // password gonna to be match then generate a jtw token
    const generateToken = jwt.sign({email:req.body.email}, "This_is_my_secret_key", {
      expiresIn: "1h",
    });
    console.log(generateToken);
    return res.status(200).json({
      message:"Token generated successfully.",
      token :generateToken,
      data:checkUser
    })


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error while  login user.",
    });
  }
};

// 2.get all user data
export const getAllUserdata = async (req, res) => {
  try {
    const getAlluser = await User.find(req.body);
    return res.status(200).json({
      message: "User data fetch successfully.",
      data: getAlluser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};

// 3.get Single user data
export const getsingleUserById = async (req, res) => {
  try {
    const getSingleUser = await User.findById(req.params.id);
    return res.status(200).json({
      message: "Single user fetch successfully.",
      data: getSingleUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};

// 4.update user data
export const updateUserById = async (req, res) => {
  try {
    const updateuser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateuser) {
      return res.status(404).json({
        message: "This user isn't found.",
      });
    }
    return res.status(200).json({
      message: "User update successfully.",
      data: updateuser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};

// 5. delete user data
export const deleteUserById = async (req, res) => {
  try {
    const deleteuser = await User.findByIdAndDelete(req.params.id);
    if (!deleteuser) {
      return res.status(404).json({
        message: "user already deleted.",
      });
    }
    return res.status(200).json({
      messsage: "data delete successfully.",
      data: deleteuser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};
