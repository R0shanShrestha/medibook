import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "user", alias: "patient" },
  docId: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "doctor", alias: "doctor" },
  slotDate: { type: String, require: true },
  slotTime: { type: String, require: true },
  amount: { type: Number, require: true },
  date: { type: Number, require: true },
  cancelled: { type: Boolean, default: false },
  payment: { type: Boolean, default: false },
  iscompleted: { type: Boolean, default: false },
}, { timestamps: true });

const appointmentModel = mongoose.models.appointment || mongoose.model("appointment", appointmentSchema);

export default appointmentModel;
