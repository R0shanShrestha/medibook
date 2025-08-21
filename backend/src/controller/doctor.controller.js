import doctorModel from "../model/doctorModel.js";

const changeAvailablity = async (req, res) => {
  try {
    const { doctId } = req.body;
    console.log(doctId);
    const doctData = await doctorModel.findById(doctId);
    await doctorModel.findByIdAndUpdate(doctId, {
      available: !doctData.available,
    });
    return res.json({ success: true, message: "Availablity Changed" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const doctorlist = async (req, res) => {
  try {
    const doctors = await doctorModel.find().select(["-password", "-email"]);
    if (!doctors) {
      return res.json({ success: false, message: "Doctors Not Found" });
    }
    res.json({ success: true, message: "All Doctors", doctors });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export { changeAvailablity, doctorlist };
