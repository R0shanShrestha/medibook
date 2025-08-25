import jwt from "jsonwebtoken";
import { conf } from "../config/config.js";

// Admin auth middlware
const authDoctor = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorizied Login Again",
      });
    }

    const dec_token = await jwt.verify(token, conf.jwtKey);

    req.docId = dec_token.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
