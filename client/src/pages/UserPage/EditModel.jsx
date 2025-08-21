import { useContext, useState } from "react";
import { AppContextProvider } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const EditModel = ({ user }) => {
  const [open, setOpen] = useState(true);
  const { backendUri, token, loadUserData } = useContext(AppContextProvider);

  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [dob, setDob] = useState(user?.dob || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [bloodGroup, setBloodGroup] = useState(user?.bloodGroup || "");
  const [addressLine1, setAddressLine1] = useState(user?.address?.line1 || "");
  const [addressLine2, setAddressLine2] = useState(user?.address?.line2 || "");
  const [imagePre, setImagePre] = useState(user?.image || null);
  const [image, setImage] = useState(user?.image || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePre(URL.createObjectURL(file));
      setImage(file);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("bloodGroup", bloodGroup);
      formData.append(
        "address",
        JSON.stringify({ line1: addressLine1, line2: addressLine2 })
      );
      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUri + "/api/user/update-profile",
        formData,
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success(data.message);
        loadUserData();
        setOpen(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Edit Profile
        </h2>

        <form onSubmit={updateProfile} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            {image && (
              <img
                src={imagePre}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-full border"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 rounded-md"
            />
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="border p-2 rounded-md"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="border p-2 rounded-md"
          />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border p-2 rounded-md"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="">Select Blood Group</option>
            <option>O+</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
          <input
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            placeholder="Address Line 1"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            placeholder="Address Line 2"
            className="border p-2 rounded-md"
          />
          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex-1 bg-gray-200 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModel;
