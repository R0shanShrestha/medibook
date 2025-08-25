import express from "express";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/multer.js";
import {
  addDoctor,
  adminDashboardDetails,
  allAppointmentsAdmin,
  allDoctor,
  cancleAppointmentAdmin,
  deleteDoctorAcc,
  loginAdmin,
} from "../controller/admin.controller.js";
import { changeAvailablity } from "../controller/doctor.controller.js";

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.get("/all-doctors", authAdmin, allDoctor);
adminRouter.post("/del-doctor", authAdmin, deleteDoctorAcc);
adminRouter.get("/admin-dashboard", authAdmin, adminDashboardDetails);
adminRouter.get("/all-appointments", authAdmin, allAppointmentsAdmin);
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/change-availability", authAdmin, changeAvailablity);
adminRouter.post("/cancel-appointment", authAdmin, cancleAppointmentAdmin);

export default adminRouter;
