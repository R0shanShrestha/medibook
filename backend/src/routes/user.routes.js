import express from "express";
import {
  bookedAppointment,
  cancleAppointment,
  getUser,
  getUserAppointments,
  login,
  paymentSystemKhalti,
  register,
  updateProfile,
} from "../controller/userController.js";
import authUser from "../middleware/authUser.js";
import upload from "../middleware/multer.js";

const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.get("/profile", authUser, getUser);
userRoutes.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile
);
userRoutes.post("/book-appointment", authUser, bookedAppointment);
userRoutes.get("/list-appointment", authUser, getUserAppointments);
userRoutes.post("/cancel-appointment", authUser, cancleAppointment);
userRoutes.post("/pay-appointment", authUser, paymentSystemKhalti);

export default userRoutes;
