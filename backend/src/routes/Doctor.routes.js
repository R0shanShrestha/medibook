import express from "express";
import {
  cancleAppointment,
  docProfile,
  doctorAppointment,
  doctorAppointmentComplete,
  doctorDashboard,
  doctorlist,
  doctorLogin,
  updateDoctorProfile,
} from "../controller/doctor.controller.js";
import authDoctor from "../middleware/authDoctor.js";
import upload from "../middleware/multer.js";

const doctorRoutes = express.Router();

doctorRoutes.get("/list", doctorlist);
doctorRoutes.post("/login", doctorLogin);
doctorRoutes.post("/doctor-update-profile", upload.single('image') ,authDoctor, updateDoctorProfile);
doctorRoutes.get("/doctor-profile", authDoctor, docProfile);
doctorRoutes.get("/doctor-dashboard", authDoctor, doctorDashboard);
doctorRoutes.get("/doctor-appointment", authDoctor, doctorAppointment);
doctorRoutes.post(
  "/doctor-appointment-complete",
  authDoctor,
  doctorAppointmentComplete
);
doctorRoutes.post("/doctor-appointment-cancel", authDoctor, cancleAppointment);

export default doctorRoutes;
