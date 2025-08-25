import mongoose from "mongoose";
import { conf } from "../config/config.js";

async function dbConection() {
  try {
    const res = await mongoose.connect(conf.mongoUri);
    return res;
  } catch (error) {
    console.log("Internal Server Error 500");
  }
}

export { dbConection };
