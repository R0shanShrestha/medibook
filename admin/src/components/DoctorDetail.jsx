import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaUserMd,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DoctorDetail = ({ doctor, onClose }) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-16 bg-black/50 overflow-auto">
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-xl shadow-xl overflow-y-auto max-h-[90vh] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 font-bold text-lg"
        >
          X
        </button>

        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-emerald-700">
            {doctor.name}
          </h2>
          <p className="text-gray-600 text-sm">{doctor.specialization}</p>
        </div>

        {/* Info Sections */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-emerald-600" />
            <span>{doctor.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhone className="text-emerald-600" />
            <span>{doctor.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaUserMd className="text-emerald-600" />
            <span>Experience: {doctor.experience} years</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaGraduationCap className="text-emerald-600" />
            <span>Education: {doctor.education}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-emerald-600" />
            <span>
              Address: {doctor.address1}, {doctor.address2}
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaUserMd className="text-emerald-600" />
            <span>Fee: ${doctor.fee}</span>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">
            About Doctor
          </h3>
          <p className="text-gray-700">{doctor.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
