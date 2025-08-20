import React from "react";
import { Mail, Phone, MapPin, Star, Pencil, Calendar, Users, Briefcase } from "lucide-react";
import { images } from "../../utils/constant"; // adjust your path

const DoctorProfile = () => {
  const doctor = {
    name: "Dr. Emily Carter",
    specialty: "Cardiologist",
    email: "emily.carter@hospital.com",
    phone: "+1 987 654 3210",
    location: "New York, USA",
    rating: 4.8,
    experience: "12 Years",
    patients: "1.5k+",
    appointments: "1200+",
    bio: "Dr. Emily Carter is a board-certified cardiologist with over 12 years of experience treating complex heart conditions. She is dedicated to providing compassionate care and promoting a healthy lifestyle for her patients.",
    img: images[1].doctors[0], // doctor image
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-6xl">
        {/* Header with Edit Button */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Doctor Dashboard</h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all">
            <Pencil size={18} /> Edit Profile
          </button>
        </div>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={doctor.img}
            alt={doctor.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-emerald-200"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-800">{doctor.name}</h2>
            <p className="text-emerald-600 text-lg font-medium">{doctor.specialty}</p>
            <div className="flex justify-center md:justify-start items-center gap-1 text-yellow-500 mt-3">
              <Star className="fill-yellow-500" size={20} />
              <span className="text-base font-semibold">{doctor.rating} / 5.0</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-emerald-50 p-6 rounded-xl flex items-center gap-4">
            <Briefcase className="text-emerald-600" size={28} />
            <div>
              <p className="text-slate-500 text-sm">Experience</p>
              <p className="text-lg font-semibold">{doctor.experience}</p>
            </div>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl flex items-center gap-4">
            <Users className="text-emerald-600" size={28} />
            <div>
              <p className="text-slate-500 text-sm">Patients</p>
              <p className="text-lg font-semibold">{doctor.patients}</p>
            </div>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl flex items-center gap-4">
            <Calendar className="text-emerald-600" size={28} />
            <div>
              <p className="text-slate-500 text-sm">Appointments</p>
              <p className="text-lg font-semibold">{doctor.appointments}</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <Mail size={18} className="text-emerald-600" /> {doctor.email}
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Phone size={18} className="text-emerald-600" /> {doctor.phone}
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin size={18} className="text-emerald-600" /> {doctor.location}
          </div>
        </div>

        {/* About Doctor */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">About Doctor</h3>
          <p className="text-slate-600 leading-relaxed">{doctor.bio}</p>
        </div>

        {/* About Our App */}
        <div className="mt-10 bg-emerald-50 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-emerald-700 mb-2">About Our App</h3>
          <p className="text-slate-600 leading-relaxed">
            Our Doctor Booking Application is designed to make healthcare more accessible and 
            efficient. Doctors can easily manage their profiles, view and accept patient 
            appointments, track patient history, and update availability in real-time. With 
            secure online payments and an easy-to-use interface, our platform ensures both 
            doctors and patients have a smooth healthcare experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
