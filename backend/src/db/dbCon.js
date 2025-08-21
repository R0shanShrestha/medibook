import mongoose from "mongoose";
import { conf } from "../config/config.js";

async function dbConection() {
  try {
    const res = await mongoose.connect(conf.mongoUri);
    if (res) {
      console.log("Database Connected ! ");
    }
  } catch (error) {
    console.log("Interal Server Error 500");
  }
}

export { dbConection };
