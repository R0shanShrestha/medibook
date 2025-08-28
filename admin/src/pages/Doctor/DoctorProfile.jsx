import React, { useContext, useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Pencil,
  Calendar,
  Users,
  Briefcase,
  BookA,
  DollarSign,
} from "lucide-react";
import { DoctorContextProvider } from "../../context/DoctorContext";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContextProvider } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const DoctorProfile = () => {
  const { settab } = useContext(AppContextProvider);
  const {
    getDoctorData,
    doctor,
    backendUrl,
    doctorToken,
    dashboard,
    dashboardData,
    isLoading,
  } = useContext(DoctorContextProvider);

  const [open, setOpen] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    if (!doctorToken) {
      nav("/login");
    }
  }, [doctorToken]);
  const [isUpdate, setUpdate] = useState(false);

  // Separate states for each field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // new field
  const [specializedIn, setSpecializedIn] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [fee, setFee] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [available, setAvailable] = useState(false); // new checkbox
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (doctorToken) {
      getDoctorData();
      dashboardData();
    }
  }, [doctorToken]);

  useEffect(() => {
    if (doctor) {
      setName(doctor.name || "");
      setEmail(doctor.email || "");
      setSpecializedIn(doctor.specializedIn || "");
      setExperience(doctor.experience || "");
      setEducation(doctor.education || "");
      setBio(doctor.bio || "");
      setPhone(doctor.phone || "");
      setFee(doctor.fee || "");
      setLine1(doctor.address?.line1 || "");
      setLine2(doctor.address?.line2 || "");
      setAvailable(doctor.available || false);
      setPreview(doctor.image || "");
    }
  }, [doctor]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const frm = new FormData();
    frm.append("name", name);
    frm.append("email", email);
    frm.append("password", password); // include password
    frm.append("specializedIn", specializedIn);
    frm.append("experience", experience);
    frm.append("education", education);
    frm.append("bio", bio);
    frm.append("phone", phone);
    frm.append("fee", fee);
    frm.append("available", available); // include checkbox
    frm.append("address", JSON.stringify({ line1, line2 }));
    if (image) frm.append("image", image);

    try {
      setUpdate(true);
      const { data } = await axios.post(
        backendUrl + "/api/doctor/doctor-update-profile",
        frm,
        {
          headers: {
            token: doctorToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorData();
        setUpdate(false);

        setOpen(false);
      } else {
        setUpdate(false);
        toast.error(data.message);
      }
    } catch (err) {
      setUpdate(false);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (doctorToken) {
      settab("profile");
    }
  }, [doctorToken]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start  lg:p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-6xl relative">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Doctor Profile</h1>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all"
          >
            <Pencil size={18} /> Edit Profile
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={preview}
            alt={name}
            className="w-40 h-40 object-cover rounded-full border-4 border-emerald-200"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-800">{name}</h2>
            <p className="text-emerald-600 text-lg font-medium">
              {specializedIn}
            </p>
            <div className="flex justify-center md:justify-start items-center gap-1 text-gray-500 mt-3">
              <span className="text-base font-semibold">{education}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-emerald-50 p-6 rounded-xl flex items-center gap-4">
            <Briefcase className="text-emerald-600" size={28} />
            <div>
              <p className="text-slate-500 text-sm">Experience</p>
              <p className="text-lg font-semibold">{experience}</p>
            </div>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl flex items-center gap-4">
            <Users className="text-emerald-600" size={28} />
            <div>
              <p className="text-slate-500 text-sm">Patients</p>
              <p className="text-lg font-semibold">
                {dashboard?.patients?.length}
              </p>
            </div>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl flex items-center gap-4">
            <Calendar className="text-emerald-600" size={28} />
            <div>
              <p className="text-slate-500 text-sm">Appointments</p>
              <p className="text-lg font-semibold">
                {dashboard.CompletedAppointments}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h1 className="font-semibold text-xl">About</h1>
          </div>
          <div>
            <p>{bio}</p>
          </div>
        </div>
        {/* Edit Dialog */}
        {open && (
          <div className="fixed inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center z-50">
            <div className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative border border-white/40">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Edit Profile
              </h2>
              {isUpdate && (
                <div className="">
                  <h1 className="font-semibold text-center">
                    Updating Profile
                  </h1>
                  <Loading />
                </div>
              )}
              {!isUpdate && (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                  <input
                    type="text"
                    value={specializedIn}
                    onChange={(e) => setSpecializedIn(e.target.value)}
                    placeholder="Specialization"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="Experience"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                  <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    placeholder="Education"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                  <input
                    type="number"
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                    placeholder="Consultation Fee"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />

                  {/* Available Checkbox */}
                  <div className="col-span-2 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={available}
                      onChange={() => setAvailable(!available)}
                      className="w-4 h-4"
                    />
                    <label>Available for Consultation</label>
                  </div>

                  {/* Photo Upload */}
                  <div className="col-span-2 flex flex-col items-center gap-2">
                    {preview && (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-full border-2 border-emerald-400"
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="border border-white/50 bg-white/40 p-2 rounded-lg w-full"
                    />
                  </div>

                  <input
                    type="text"
                    value={line1}
                    onChange={(e) => setLine1(e.target.value)}
                    placeholder="Address Line 1"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                  <input
                    type="text"
                    value={line2}
                    onChange={(e) => setLine2(e.target.value)}
                    placeholder="Address Line 2"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  />

                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Short Bio"
                    className="border border-white/50 bg-white/40 p-2 rounded-lg col-span-2 focus:ring-2 focus:ring-emerald-400 outline-none"
                    rows="3"
                  />

                  <div className="flex justify-end col-span-2 gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="px-4 py-2 bg-gray-300/70 rounded-lg hover:bg-gray-400/90 transition-all duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
