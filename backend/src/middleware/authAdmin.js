import jwt from "jsonwebtoken";
import { conf } from "../config/config.js";

// Admin auth middlware
const authAdmin = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorizied Login Again",
      });
    }

    const dec_token = jwt.verify(token, conf.jwtKey);
    if (dec_token !== conf.adminEmail + conf.adminPass) {
      return res.json({
        success: false,
        message: "Not Authorizied Login Again",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export default authAdmin