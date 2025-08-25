import mongoose from "mongoose";
import { conf } from "../config/config.js";

async function dbConection() {
  try {
    const res = await mongoose.connect(conf.mongoUri);
    // console.log("Database Connected ! ");
    return res;
  } catch (error) {
    console.log("Interal Server Error 500");
  }
}
export default dbConection
