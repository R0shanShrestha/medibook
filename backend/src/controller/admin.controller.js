// doctor adding
import validator from "validator";
import bcrypt, { hash } from "bcrypt";
import { v2 as cloud } from "cloudinary";
import doctorModel from "../model/doctorModel.js";
import { conf } from "../config/config.js";
import jwt from "jsonwebtoken";

const addDoctor = async (req, res) => {
  console.log("add doctor");
  try {
    const {
      name,
      email,
      password,
      specializedIn,
      experience,
      bio,
      fees,
      address,
    } = req.body;
    // image
    const img = req.file;

    if (
      !name ||
      !email ||
      !password ||
      !specializedIn ||
      !experience ||
      !bio ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Missing Detailsx" });
    }

    // email format checker
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 3) {
      return res.json({
        success: false,
        message: "Plase enter a strong password",
      });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    // upload img to cloud
    const imageUpload = await cloud.uploader.upload(img.path, {
      resource_type: "image",
    });
    const imageUri = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUri,
      password: hashedPass,
      experience,
      bio,
      address: JSON.parse(address),
      fees,
      date: Date.now(),
      specializedIn,
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email == conf.adminEmail && password == conf.adminPass) {
      const token = jwt.sign(email + password, conf.jwtKey);
      res.json({ success: true, token });
    } else {
      console.log("invalid");
      return res.json({ success: false, message: "Invalid Creditionals" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const allDoctor = async (req, res) => {
  try {
    const doctors = await doctorModel.find();
    if (!doctors) {
      return res.json({ success: false, message: "Doctors Not Found" });
    }
    res.json({ success: true, message: "All Doctors", doctors });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export { addDoctor, loginAdmin, allDoctor };
