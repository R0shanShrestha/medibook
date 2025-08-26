import validator from "validator";
import razorpay from "razorpay";
import bcrypt from "bcrypt";
import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { conf } from "../config/config.js";
import { v2 as cloud } from "cloudinary";
import doctorModel from "../model/doctorModel.js";
import appointmentModel from "../model/appointmentModel.js";
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
    const isuser = await userModel.findOne({ email });
    if (isuser) {
      return res.json({ success: false, message: "Email Already Exists" });
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

    const token = jwt.sign({ id: user._id }, conf.jwtKey, { expiresIn: "30d" });

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
    const token = jwt.sign({ id: user._id }, conf.jwtKey, { expiresIn: "30d" });

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
      gender,
      bloodGroup,
    });

    if (imageFile) {
      const uploadImg = await cloud.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = uploadImg.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imageUrl });
    }

    return res.json({ success: true, message: "Profile Updated" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// Booked Appointment
const bookedAppointment = async (req, res) => {
  try {
    const { docId, slotDate, slotTime } = req.body;
    const { userId } = req;

    const docData = await doctorModel.findById(docId).select("-password");
    // checking available
    if (!docData.available) {
      return res.json({ success: false, message: "Doctor Not available" });
    }
    let slots_booked = docData.slots_booked;

    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: "Slots Not available" });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    delete docData.slots_booked;
    const appointmentData = {
      userId,
      docId,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    };
    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    // save new slots data in doc data
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Booked" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// getUserAppointments for frontend
const getUserAppointments = async (req, res) => {
  try {
    const { userId } = req;
    const appointments = await appointmentModel
      .find({ userId: userId })
      .populate("userId")
      .populate("docId");
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// cancel appointment
const cancleAppointment = async (req, res) => {
  try {
    const { appointId } = req.body;
    const { userId } = req;

    const appointmentData = await appointmentModel
      .findById(appointId)
      .populate("userId")
      .populate("docId");
    // console.log()
    // verification appoint user
    if (appointmentData.userId._id != userId) {
      return res.json({ success: false, message: "Unauthorized Action" });
    }
    await appointmentModel.findByIdAndUpdate(appointId, { cancelled: true });
    // Realising Doc Slot
    const { docId, slotDate, slotTime } = appointmentData;
    console.log(docId)

    const docData = await doctorModel.findById(docId._id);
    let slots_booked = docData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// payment System khalti
const paymentSystemKhalti = async (req, res) => {
  const { appointId } = req.body;
  const appointmentData = await appointmentModel.findById(appointId);

  if (!appointmentData || appointmentData.cancelled) {
    return res.json({
      success: false,
      message: "Appointment Cancelled or not found",
    });
  }
  const options = {
    amount: appointmentData.amount,
    receipt: appointId,
  };
  res.json({ success: true, message: "Online Payment is Desable Now " });
};

export {
  register,
  login,
  getUser,
  updateProfile,
  bookedAppointment,
  getUserAppointments,
  cancleAppointment,
  paymentSystemKhalti,
};
