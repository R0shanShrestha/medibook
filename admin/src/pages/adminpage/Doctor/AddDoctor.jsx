import { useState, useContext, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContextProvider } from "../../../context/AdminContext";
import { AppContextProvider } from "../../../context/AppContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const { backendUrl, adminToken } = useContext(AdminContextProvider);
  const { settab } = useContext(AppContextProvider);
  const nav = useNavigate();

  useEffect(() => {
    if (!adminToken) {
      nav("/login");
    }
  }, [adminToken]);

  useEffect(() => {
    if (adminToken) {
      settab("addDoctor");
    }
  }, [adminToken]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specializedIn, setSpecializedIn] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");
  const [fee, setFee] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [image, setImage] = useState(null);
  const [imagePre, setImagePre] = useState(null);

  const fileRef = useRef(null);

  const onPickImage = (e) => {
    const f = e.target.files?.[0];
    if (f) {
      setImage(f);
      setImagePre(URL.createObjectURL(f));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("password", password);
      fd.append("specializedIn", specializedIn);
      fd.append("experience", experience);
      fd.append("bio", bio);
      fd.append("education", education);
      fd.append("phone", phone);
      fd.append("fee", fee);
      fd.append(
        "address",
        JSON.stringify({ line1: addressLine1, line2: addressLine2 })
      );
      if (image) fd.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        fd,
        {
          headers: { token: adminToken },
        }
      );

      if (data.success) {
        toast.success("Doctor added successfully");
        setName("");
        setEmail("");
        setPassword("");
        setSpecializedIn("");
        setExperience("");
        setBio("");
        setEducation("");
        setPhone("");
        setFee("");
        setAddressLine1("");
        setAddressLine2("");
        setImage(null);
        setImagePre(null);
        if (fileRef.current) fileRef.current.value = "";
      } else {
        toast.error(data.message || "Failed to add doctor");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return adminToken ? (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Add Doctor
        </h2>

        <div className="flex flex-col items-start gap-2">
          <label className="text-gray-700 text-sm font-medium">
            Upload Image
          </label>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={onPickImage}
            className="border border-gray-300 p-2 rounded-lg bg-gray-50"
          />
          {imagePre && (
            <img
              src={imagePre}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-full mt-2 border"
            />
          )}
        </div>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <select
          value={specializedIn}
          onChange={(e) => setSpecializedIn(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="">Select Specialization</option>
          <option value="General Physician">General Physician</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Dentist">Dentist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Surgeon">Surgeon</option>
        </select>

        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Experience (e.g., 5 Years)"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Short Bio"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none h-24 resize-none"
        />

        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          placeholder="Education (e.g., MBBS, MD)"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="number"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
          placeholder="Consultation Fee"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            placeholder="Address Line 1"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            placeholder="Address Line 2"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Save Doctor
        </button>
      </form>
    </div>
  ) : (
    <div className="w-full text-center items-center ">Login Required</div>
  );
};

export default AddDoctor;
