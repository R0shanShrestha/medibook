import express from "express";
import { doctorlist } from "../controller/doctor.controller.js";

const doctorRoutes = express.Router();

doctorRoutes.get("/list", doctorlist);

export default doctorRoutes;
