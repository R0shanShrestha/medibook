import express from "express";
import {
  getUser,
  login,
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

export default userRoutes;
