import { User2Icon } from "lucide-react";
import React, { useState } from "react";
import { useContext } from "react";
import { AdminContextProvider } from "../../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = ({ onClose }) => {
  const [doctorName, setDoctorName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");
  const [bio, setAbout] = useState("");
  const [image, setImage] = useState(null);
  const [picturePreview, setPicturePreview] = useState(null);
  const { backendUrl, adminToken } = useContext(AdminContextProvider);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!image) return toast.error("Image Not Selected");
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", doctorName);
      formData.append("specializedIn", speciality);
      formData.append("email", email);
      formData.append("education", education);
      formData.append("password", password);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      formData.append("experience", experience);
      formData.append("fees", fees);
      formData.append("bio", bio);

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        {
          headers: {
            token: adminToken,
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        setPicturePreview(null);
        setImage("")
        e.target.reset()
      } else {
        toast.error(data.message);
      }
    } catch (error) {}
  };

  return (
    <div className="p-2 w-fit h-full overflow-y-scroll no-scroller">
      <div className="flex w-full p-5 pb-3 border-b-2">
        <h1 className="text-xl text-slate-800">Add Doctor</h1>
      </div>
      <div className="flex flex-col p-2">
        <form
          onSubmit={handleSubmit}
          className="w-fit rounded-md shadow-md p-2"
        >
          <div className="field flex flex-col md:flex-row p-1 md:items-center gap-2">
            <div className="w-20 h-20 flex items-center justify-center border rounded-full bg-slate-100 text-slate-400">
              {picturePreview ? (
                <img
                  src={picturePreview}
                  alt="Preview"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User2Icon size={32} />
              )}
            </div>
            <label className="flex flex-col gap-2 text-slate-400">
              <span className="text-xl">Upload doctor picture</span>
              <input
                type="file"
                className="text-sm"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setPicturePreview(
                    e.target.files[0]
                      ? URL.createObjectURL(e.target.files[0])
                      : null
                  );
                }}
              />
            </label>
          </div>

          <div className="flex w-full pt-3 flex-wrap gap-3 md:p-2">
            <div className="field p-2 md:w-[35%] flex flex-col text-slate-500 font-light">
              <label>Doctor Name</label>
              <input
                type="text"
                placeholder="Name"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                className="border w-full p-2 rounded-md"
              />
            </div>
            <div className="field p-2 md:w-[35%] flex flex-col text-slate-500 font-light">
              <label>Speciality</label>
              <select
                name="speciality"
                id="speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                className="border p-2"
              >
                <option value="General physican">General physican</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="field p-2 md:w-[35%] flex flex-col text-slate-500 font-light">
              <label>Doctor Email</label>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border w-full p-2 rounded-md"
              />
            </div>

            <div className="field p-2 md:w-[35%] flex flex-col text-slate-500 font-light">
              <label>Education</label>
              <input
                type="text"
                placeholder="Education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="border w-full p-2 rounded-md"
              />
            </div>
            <div className="field p-2 md:w-[35%] justify-center flex flex-col text-slate-500 font-light">
              <label>Doctor password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border w-full p-2 rounded-md"
              />
            </div>
            <div className="field p-2 md:w-[35%] flex flex-col text-slate-500 font-light">
              <label>Address</label>
              <input
                type="text"
                placeholder="Address 1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                className="border w-full p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Address 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                className="border w-full p-2 rounded-md"
              />
            </div>
            <div className="field p-2 md:w-[35%] flex flex-col text-slate-500 font-light">
              <label>Experience</label>
              <input
                type="text"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="border w-full p-2 rounded-md"
              />
            </div>
            <div className="field p-2 md:w-[35%] flex flex-col text-slate-500 font-light">
              <label>Fees</label>
              <input
                type="text"
                placeholder="Your fees"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                className="border w-full p-2 rounded-md"
              />
            </div>
            <div className="field p-2 w-[70%] flex flex-col text-slate-500 font-light">
              <label>About me</label>
              <textarea
                placeholder="Write bio yourself"
                value={bio}
                onChange={(e) => setAbout(e.target.value)}
                className="border w-full p-2 rounded-md"
              />
            </div>
          </div>

          <div className="field ps-5 pb-5">
            <button
              type="submit"
              className="border cursor-pointer p-3 rounded-md text-sm bg-emerald-400 text-white ps-4 pr-4 hover:bg-emerald-500"
            >
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
