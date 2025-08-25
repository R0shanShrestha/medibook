import React, { useContext, useEffect, useState } from "react";
import {
  Calendar,
  User,
  Clock,
  CheckCircle,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { DoctorContextProvider } from "../../context/DoctorContext";
import { AppContextProvider } from "../../context/AppContext";

const DoctorDashboardItems = () => {
  const {
    doctorToken,
    dashboard,
    dashboardData,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContextProvider);
  const { slotDateFormat } = useContext(AppContextProvider);

  useEffect(() => {
    if (doctorToken) {
      dashboardData();
    }
  }, [doctorToken]);

  const stats = [
    {
      title: "Today's Appointments",
      value: dashboard.totalAppoint,
      icon: <Calendar />,
      bg: "bg-emerald-500",
    },
    {
      title: "Total Patients",
      value: dashboard.totalPatients,
      icon: <User />,
      bg: "bg-blue-500",
    },
    {
      title: "Earning ",
      value: dashboard.earnings || 0,
      icon: <Clock />,
      bg: "bg-yellow-400",
    },
    {
      title: "Completed Appointments",
      value: dashboard.CompletedAppointments,
      icon: <CheckCircle />,
      bg: "bg-gray-400",
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
        <h2 className="text-emerald-700 font-bold text-lg mb-3">
          Latest Appointments
        </h2>
        <div className="flex flex-col gap-3 max-h-72 overflow-y-auto">
          {dashboard?.latestAppoint?.map((appointment, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              {/* Patient Info */}
              <div className="flex items-center gap-3">
                <img
                  src={appointment.userData.image}
                  alt={appointment.userData.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-slate-800">
                    {appointment.userData.name}
                  </span>
                  <span className="text-sm text-slate-500">
                    {slotDateFormat(appointment.slotDate)} ||{" "}
                    {appointment.slotTime}
                  </span>
                </div>
              </div>

              {/* Time + Actions */}
              {appointment?.cancelled ? (
                <p className="text-red-600 font-medium">Cancelled</p>
              ) : appointment?.iscompleted ? (
                <p className="text-green-600 font-medium">Completed</p>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2 justify-end w-fit md:w-auto">
                  <button
                    onClick={() => {
                      cancelAppointment(appointment?._id);
                    }}
                    className="flex items-center justify-center gap-1 px-3 py-1 text-xs sm:text-sm border border-red-500 text-red-600 rounded-lg 
                               hover:bg-red-50 hover:scale-105 transition-transform duration-200 w-fit sm:w-auto"
                  >
                    <XCircle size={16} /> Cancel
                  </button>
                  <button
                    onClick={() => {
                      completeAppointment(appointment?._id);
                    }}
                    className="flex items-center justify-center gap-1 px-3 py-1 text-xs sm:text-sm border border-emerald-500 text-emerald-600 rounded-lg 
                                                hover:bg-emerald-50 hover:scale-105 transition-transform duration-200 w-fit sm:w-auto"
                  >
                    <CheckCircle size={16} /> Accept
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardItems;
