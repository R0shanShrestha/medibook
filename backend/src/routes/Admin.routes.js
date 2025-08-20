const express = require("express");
const { addDoctor } = require("../controller/admin.controller");

const adminRoutes = express.Router();

adminRoutes.post("/add-doctor", addDoctor);

module.exports = adminRoutes;
