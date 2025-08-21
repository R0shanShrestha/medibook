import React from "react";
import { Calendar, User, Clock, CheckCircle, XCircle, CheckCircle2 } from "lucide-react";
import { images } from "../../utils/constant"; 

const DoctorDashboardItems = () => {
  const stats = [
    { title: "Today's Appointments", value: 8, icon: <Calendar />, bg: "bg-emerald-500" },
    { title: "Total Patients", value: 120, icon: <User />, bg: "bg-blue-500" },
    { title: "Pending Appointments", value: 3, icon: <Clock />, bg: "bg-yellow-400" },
    { title: "Completed Appointments", value: 95, icon: <CheckCircle />, bg: "bg-gray-400" },
  ];

  const latestAppointments = [
    {
      patientName: "John Doe",
      time: "10:00 AM",
      date: "20 Aug 2025",
      img: images[1].doctors[0],
    },
    {
      patientName: "Sarah Smith",
      time: "11:30 AM",
      date: "20 Aug 2025",
      img: images[1].doctors[1],
    },
    {
      patientName: "Michael Brown",
      time: "1:00 PM",
      date: "20 Aug 2025",
      img: images[1].doctors[2],
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl shadow-md flex flex-col items-start justify-between transition-transform transform hover:-translate-y-1 ${item.bg} text-white`}
          >
            <div className="text-2xl">{item.icon}</div>
            <h3 className="mt-2 text-xs font-semibold">{item.title}</h3>
            <p className="text-xl font-bold mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Latest Appointments */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-emerald-700 font-bold text-lg mb-3">Latest Appointments</h2>
        <div className="flex flex-col gap-3 max-h-72 overflow-y-auto">
          {latestAppointments.map((appointment, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              {/* Patient Info */}
              <div className="flex items-center gap-3">
                <img
                  src={appointment.img}
                  alt={appointment.patientName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-slate-800">{appointment.patientName}</span>
                  <span className="text-sm text-slate-500">{appointment.date}</span>
                </div>
              </div>

              {/* Time + Actions */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-emerald-600">{appointment.time}</span>
                <button className="flex items-center gap-1 px-2 py-1 text-xs font-medium border border-green-500 text-green-600 rounded-lg hover:bg-green-50">
                  <CheckCircle2 size={14} /> Accept
                </button>
                <button className="flex items-center gap-1 px-2 py-1 text-xs font-medium border border-red-500 text-red-600 rounded-lg hover:bg-red-50">
                  <XCircle size={14} /> Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardItems;
