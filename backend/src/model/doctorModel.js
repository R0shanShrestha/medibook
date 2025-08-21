import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    image: { type: String, require: true },
    specializedIn: { type: String, require: true },
    experience: { type: String, require: true },
    bio: { type: String, require: true },
    available: { type: Boolean, require: true },
    education: { type: Boolean },
    fee: { type: Number, require: true },
    address: { type: Object, require: true },
    date: { type: Number, require: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false, timestamps: true }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
