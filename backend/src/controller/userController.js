import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { conf } from "../config/config.js";
import { v2 as cloud } from "cloudinary";
// register user
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid Email" });
    }

    if (password.length < 3) {
      return res.json({ success: false, message: "Enter a string password" });
    }

    const hashPass = await bcrypt.hash(password, 10);
    const userData = {
      email,
      password: hashPass,
      name,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, conf.jwtKey);

    res.json({ success: true, message: "user Registered", token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid Email" });
    }

    if (password.length < 3) {
      return res.json({ success: false, message: "Enter a string password" });
    }

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.json({ success: false, message: "Invalid credientials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credientials" });
    }
    const token = jwt.sign({ id: user._id }, conf.jwtKey);

    res.json({ success: true, message: "Logged In", token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    let { userId } = req;
    const user = await userModel.findById(userId).select(["-password"]);
    if (!user) {
      return res.json({ success: false, message: "not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// update profile
const updateProfile = async (req, res) => {
  try {
    const { name, phone, address, dob, gender, bloodGroup } = req.body;
    const { userId } = req;
    const imageFile = req.file;

    console.log(userId, name, phone, address, dob, gender, bloodGroup, imageFile);
    if (
      !userId ||
      !name ||
      !phone ||
      !address ||
      !dob ||
      !gender ||
      !bloodGroup
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }
    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      bloodGroup,
    });

    if (imageFile) {
      const uploadImg = await cloud.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = uploadImg.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imageUrl });
    }

    return res.json({ success: true, message: "Profile Updated",  });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export { register, login, getUser, updateProfile };
