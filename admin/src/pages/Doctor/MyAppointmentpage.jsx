import React from "react";
import { Calendar, Clock, XCircle, CheckCircle } from "lucide-react";
import { images } from "../../utils/constant"; // adjust path if needed

const MyAppointmentpage = () => {
  const appointments = [
    {
      doctor: "Dr. Emily Carter",
      specialty: "Cardiologist",
      date: "22 Aug 2025",
      time: "10:00 AM",
      status: "Pending",
      img: images[1].doctors[0],
    },
    {
      doctor: "Dr. James Smith",
      specialty: "Dermatologist",
      date: "25 Aug 2025",
      time: "2:30 PM",
      status: "Pending",
      img: images[1].doctors[1],
    },
    {
      doctor: "Dr. Olivia Brown",
      specialty: "Neurologist",
      date: "28 Aug 2025",
      time: "11:15 AM",
      status: "Pending",
      img: images[1].doctors[2],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-emerald-700 mb-6">My Appointments</h1>

      <div className="flex flex-col gap-4">
        {appointments.map((appt, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between hover:shadow-lg transition"
          >
            {/* Doctor Info */}
            <div className="flex items-center gap-4">
              <img
                src={appt.img}
                alt={appt.doctor}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-slate-800">{appt.doctor}</h2>
                <p className="text-sm text-slate-500">{appt.specialty}</p>
                <div className="flex items-center gap-3 text-xs text-slate-600 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {appt.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {appt.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1 text-sm border border-red-500 text-red-600 rounded-lg hover:bg-red-50">
                <XCircle size={16} /> Cancel
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-sm border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50">
                <CheckCircle size={16} /> Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointmentpage;
