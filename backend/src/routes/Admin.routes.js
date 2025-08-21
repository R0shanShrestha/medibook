import express from "express";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/multer.js";
import {
  addDoctor,
  allDoctor,
  loginAdmin,
} from "../controller/admin.controller.js";
import { changeAvailablity } from "../controller/doctor.controller.js";

const adminRouter = express.Router();

adminRouter.get("/all-doctors", authAdmin, allDoctor);
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/change-availability", authAdmin, changeAvailablity);
adminRouter.post("/login", loginAdmin);

export default adminRouter;
