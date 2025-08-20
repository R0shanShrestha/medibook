import React from "react";
import { BiEdit, BiHeart, BiCalendarAlt, BiShield, BiMailSend } from "react-icons/bi";
import { images } from "../../utils/constant";

const Profile = () => {
  return (
    <div className="flex flex-col p-4 mt-20"> {/* spacing from navbar */}
      <div className="md:w-[70%] w-full mx-auto flex flex-col gap-8">

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={images[1].doctors[0]}
            alt="Profile"
            className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-md border shadow-md"
          />
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-emerald-800">John Doe</h1>
            <p className="text-gray-600">Member since: Jan 2023 | Last login: 2 days ago</p>
            <button className="flex items-center gap-2 text-white bg-emerald-800 hover:bg-emerald-900 px-4 py-2 rounded-md font-semibold transition-all duration-300">
              <BiEdit size={20} /> Edit Profile
            </button>
          </div>
        </div>

        {/* Contact & Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-emerald-800 font-bold mb-2">Contact Information</h2>
            <p>Email: john.doe@gmail.com</p>
            <p>Phone: +977-9807960410</p>
            <p>Address: Mechinagar-7, Jhapa</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-emerald-800 font-bold mb-2">Basic Information</h2>
            <p>Gender: Male</p>
            <p>Birthday: 14 April, 2006</p>
            <p>Blood Group: O+</p>
            <p>Height: 5.5 ft | Weight: 48 kg</p>
          </div>
        </div>

        {/* Health Stats */}
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-emerald-800 font-bold mb-2">Health Stats</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-emerald-100 p-3 rounded-md text-emerald-800 text-center flex-1 min-w-[120px]">
              BMI<br /><span className="font-semibold">21.5</span>
            </div>
            <div className="bg-emerald-100 p-3 rounded-md text-emerald-800 text-center flex-1 min-w-[120px]">
              Blood Pressure<br /><span className="font-semibold">120/80</span>
            </div>
            <div className="bg-emerald-100 p-3 rounded-md text-emerald-800 text-center flex-1 min-w-[120px]">
              Sugar Level<br /><span className="font-semibold">90 mg/dL</span>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-emerald-800 font-bold mb-2 flex items-center gap-2">
            <BiCalendarAlt size={24} /> Upcoming Appointments
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Dr. Smith (Cardiologist) - 25 Aug 2025, 10:00 AM</li>
            <li>Dr. Jane (Dermatologist) - 30 Aug 2025, 2:00 PM</li>
          </ul>
        </div>

        {/* Past Appointments */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-emerald-800 font-bold mb-2 flex items-center gap-2">
            <BiHeart size={24} /> Past Appointments
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Dr. Alex (ENT) - 15 Jul 2025</li>
            <li>Dr. Nina (Pediatrician) - 10 Jul 2025</li>
          </ul>
        </div>

        {/* Security & Settings */}
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
          <h2 className="text-emerald-800 font-bold mb-2 flex items-center gap-2">
            <BiShield size={24} /> Security & Settings
          </h2>
          <p>Change Password</p>
          <p>Enable Two-Factor Authentication</p>
          <p>Manage Privacy Settings</p>
        </div>

        {/* Support & Feedback */}
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
          <h2 className="text-emerald-800 font-bold mb-2 flex items-center gap-2">
            <BiMailSend size={24} /> Support & Feedback
          </h2>
          <p>Contact Support</p>
          <p>Submit Feedback</p>
        </div>

      </div>
    </div>
  );
};

export default Profile;
