import doctorModel from "../model/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { conf } from "../config/config.js";
import appointmentModel from "../model/appointmentModel.js";
import { v2 as cloud } from "cloudinary";

const changeAvailablity = async (req, res) => {
  try {
    const { doctId } = req.body;
    const doctData = await doctorModel.findById(doctId);
    await doctorModel.findByIdAndUpdate(doctId, {
      available: !doctData.available,
    });
    return res.json({ success: true, message: "Availablity Changed" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const doctorlist = async (req, res) => {
  try {
    const doctors = await doctorModel.find().select(["-password", "-email"]);
    if (!doctors) {
      return res.json({ success: false, message: "Doctors Not Found" });
    }
    res.json({ success: true, message: "All Doctors", doctors });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const doctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isDoctor = await doctorModel.findOne({ email: email });
    if (!isDoctor) {
      return res.json({ success: false, message: "Invalid Credientials" });
    }

    const isPassword = await bcrypt.compare(password, isDoctor.password);
    if (!isPassword) {
      return res.json({ success: false, message: "Invalid Credientials" });
    }

    const token = jwt.sign({ id: isDoctor._id }, conf.jwtKey, {
      expiresIn: "30d",
    });

    res.json({ success: true, token, message: "Doctor Logged In" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const doctorAppointment = async (req, res) => {
  try {
    const { docId } = req;
    const appointments = await appointmentModel
      .find({ docId })
      .populate("userId")
      .populate("docId");
    if (!appointments) {
      return res.json({ success: false, message: "No Appointments" });
    }
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
const doctorAppointmentComplete = async (req, res) => {
  try {
    const { appointId } = req.body;
    const { docId } = req;
    const appointments = await appointmentModel
      .findById(appointId)
      .populate("docId")
      .populate("userId");
    if (appointments && appointments.docId._id == docId) {
      await appointmentModel.findByIdAndUpdate(appointId, {
        iscompleted: true,
      });
      return res.json({ success: true, message: "Appointment Completed" });
    } else {
      return res.json({ success: false, message: "Mark Failed" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// cancel appointment
const cancleAppointment = async (req, res) => {
  try {
    const { appointId } = req.body;
    const { docId } = req;
    const appointments = await appointmentModel
      .findById(appointId)
      .populate("userId")
      .populate("docId");
    if (appointments && appointments.docId._id == docId) {
      await appointmentModel.findByIdAndUpdate(appointId, {
        cancelled: true,
      });
      return res.json({ success: true, message: "Appointment Cancelled" });
    } else {
      return res.json({ success: false, message: "Mark Failed" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const doctorDashboard = async (req, res) => {
  try {
    const { docId } = req;
    const appointments = await appointmentModel
      .find({ docId })
      .populate("userId")
      .populate("docId");

    let earnings = 0;
    appointments.map((item) => {
      if (item.iscompleted || item.payment) {
        earnings += item.docId.fee;
      }
    });

    let patientsCount = 0;
    let Dubpatients = [];
    let patients = [];
    appointments.map((item) => {
      if (!Dubpatients.includes(item.userId._id)) {
        patientsCount += 1;
        Dubpatients.push(item.userId._id);
        patients.push(item.userId);
      }
    });

    let CompletedAppointments = [];
    appointments.map((item) => {
      if (item.iscompleted) {
        CompletedAppointments.push(item._id);
      }
    });

    let dashData = {
      earnings,
      CompletedAppointments: CompletedAppointments.length || 0,
      latestAppoint: appointments.reverse().slice(0, 5),
      totalAppoint: appointments.length,
      totalPatients: patientsCount,
      patients: patients,
    };

    res.json({ success: true, dashData });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const docProfile = async (req, res) => {
  try {
    const { docId } = req;
    const docData = await doctorModel.findById(docId);
    res.json({ success: true, docData });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// Update Doctor Profile
const updateDoctorProfile = async (req, res) => {
  try {
    const { docId } = req;
    const {
      name,
      email,
      password,
      specializedIn,
      experience,
      bio,
      available,
      education,
      fee,
      address,
    } = req.body;
    const imageFile = req.file;

    // Check required fields
    if (
      !name ||
      !email ||
      !specializedIn ||
      !experience ||
      !bio ||
      available === undefined ||
      !fee ||
      !address
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // Update doctor fields
    const updatedData = {
      name,
      email,
      specializedIn,
      experience,
      bio,
      available,
      education,
      fee,
      address: JSON.parse(address),
    };

    await doctorModel.findByIdAndUpdate(docId, updatedData);

    // Update image if provided
    if (imageFile) {
      const uploadImg = await cloud.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = uploadImg.secure_url;

      await doctorModel.findByIdAndUpdate(docId, { image: imageUrl });
    }

    return res.json({ success: true, message: "Doctor Profile Updated" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export {
  updateDoctorProfile,
  changeAvailablity,
  doctorlist,
  doctorLogin,
  doctorAppointment,
  doctorAppointmentComplete,
  cancleAppointment,
  doctorDashboard,
  docProfile,
};
