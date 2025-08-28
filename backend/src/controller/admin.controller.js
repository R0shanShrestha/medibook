// doctor adding
import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloud } from "cloudinary";
import doctorModel from "../model/doctorModel.js";
import { conf } from "../config/config.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../model/appointmentModel.js";
import userModel from "../model/userModel.js";

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      specializedIn,
      experience,
      education,
      bio,
      fee,
      address,
    } = req.body;
    // image
    const img = req.file;
    if (!img) {
      return res.json({ success: false, message: "Image Required" });
    }

    if (
      !name ||
      !email ||
      !password ||
      !specializedIn ||
      !experience ||
      !bio ||
      !education ||
      !fee ||
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

    const isEmail = await doctorModel.findOne({ email: email });

    if (password.length < 3) {
      return res.json({
        success: false,
        message: "Plase enter a strong password",
      });
    }

    if (isEmail) {
      return res.json({
        success: false,
        message: "Email Already Exists",
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
      education,
      bio,
      address: JSON.parse(address),
      fee,
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
      res.json({ success: true, token, message: "Logged In Admin" });
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

const allAppointmentsAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel
      .find()
      .populate("docId")
      .populate("userId");
    // console.log(appointments);
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const cancleAppointmentAdmin = async (req, res) => {
  try {
    const { appointId } = req.body;
    const appointmentData = await appointmentModel.findById(appointId);

    await appointmentModel.findByIdAndUpdate(appointId, { cancelled: true });
    // Realising Doc Slot
    const { docId, slotDate, slotTime } = appointmentData;

    const docData = await doctorModel.findById(docId);
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

// admin dashboard
const adminDashboardDetails = async (req, res) => {
  try {
    const doctors = await doctorModel.find();
    const users = await userModel.find();
    const appointment = await appointmentModel
      .find()
      .populate("userId")
      .populate("docId");
    const dashData = {
      totalDoctors: doctors.length,
      totalUsers: users.length,
      totalAppointment: appointment.length,
      latestAppointments: appointment.reverse().slice(0, 5),
    };

    res.json({ success: true, dashData });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const deleteDoctorAcc = async (req, res) => {
  try {
    const { docId } = req.body;

    const docData = await doctorModel.findByIdAndDelete(docId);
    if (docData) {
      return res.json({ success: true, message: "Doctor Deleted" });
    } else {
      return res.json({ success: false, message: "Fail to Deleted Doctor" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export {
  addDoctor,
  loginAdmin,
  allDoctor,
  allAppointmentsAdmin,
  cancleAppointmentAdmin,
  adminDashboardDetails,
  deleteDoctorAcc,
};
