import React, { useContext, useState } from "react";
import {
  BiEdit,
  BiHeart,
  BiCalendarAlt,
  BiShield,
  BiMailSend,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import EditModel from "./EditModel";
import { AppContextProvider } from "../../context/AppContext";

const Profile = () => {
  const { user } = useContext(AppContextProvider);
  console.log(user)
  const [isEdit, setEdit] = useState(false);
  return (
    user && (
      <div className="flex flex-col p-4 mt-20">
        {isEdit && <EditModel  user={user} />}{" "}
        {/* spacing from navbar */}
        <div className="md:w-[70%] w-full mx-auto flex flex-col gap-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={user.image}
              alt="Profile"
              className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-md border shadow-md"
            />
            <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-emerald-800">
                {user.name}
              </h1>

              <button
                onClick={() => setEdit((pre) => (pre = !pre))}
                className="flex items-center gap-2 text-white bg-emerald-800 hover:bg-emerald-900 px-4 w-fit py-2 rounded-md font-semibold transition-all duration-300"
              >
                <BiEdit size={20} /> Edit Profile
              </button>
            </div>
          </div>

          {/* Contact & Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-emerald-800 font-bold mb-2">
                Contact Information
              </h2>
              <p>Email: {user.email} </p>
              <p>Phone: {user.phone}</p>
              <p>
                Address:{" "}
                <span>
                  {user?.address?.line1} <br />
                  {user?.address?.line2}
                </span>
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-emerald-800 font-bold mb-2">
                Basic Information
              </h2>
              <p>Age: {user.age} </p>
              <p>Gender: {user.gender} </p>
              <p>Birthday: {user.dob}</p>
              <p>Blood Group: {user.bloodGroup}</p>
            </div>
          </div>

          {/* Security & Settings */}
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
            <h2 className="text-emerald-800 font-bold mb-2 flex items-center gap-2">
              <BiShield size={24} /> Security & Settings
            </h2>
            <p>Change Password</p>
          </div>

          {/* Support & Feedback */}
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
            <h2 className="text-emerald-800 font-bold mb-2 flex items-center gap-2">
              <BiMailSend size={24} /> Support & Feedback
            </h2>
            <Link
              to={"/contact"}
              className="text-emerald-800 hover:text-emerald-900 hover:font-medium"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
