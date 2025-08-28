import React, { useContext, useEffect, useState } from "react";
import { Calendar, User, Clock, CheckCircle, XCircle } from "lucide-react";
import { DoctorContextProvider } from "../../context/DoctorContext";
import { AppContextProvider } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { images } from "../../constant";
import AppointmentCard from "./Appointment/AppointmentCard";
import Loading from "../../components/Loading";

const DoctorDashboardItems = () => {
  const { doctorToken, dashboard, dashboardData, isLoading } = useContext(
    DoctorContextProvider
  );

  const nav = useNavigate();

  useEffect(() => {
    if (!doctorToken) {
      nav("/login");
    }
  }, [doctorToken]);
  useEffect(() => {
    if (doctorToken) {
      dashboardData();
    }
  }, [doctorToken]);

  const stats = [
    {
      title: "Today's Appointments",
      value: isLoading ? <Loading type={1} /> : dashboard.totalAppoint,
      icon: <Calendar />,
      bg: "bg-emerald-500",
    },
    {
      title: "Total Patients",
      value: isLoading ? <Loading type={1} /> : dashboard.totalPatients,
      icon: <User />,
      bg: "bg-blue-500",
    },
    {
      title: "Earning ",
      value: isLoading ? <Loading type={1} /> : dashboard.earnings || 0,
      icon: <Clock />,
      bg: "bg-yellow-400",
    },
    {
      title: "Completed Appointments",
      value: isLoading ? <Loading type={1} /> : dashboard.CompletedAppointments,
      icon: <CheckCircle />,
      bg: "bg-gray-400",
    },
  ];

  // console.log(dashboard)

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
      <div className="bg-white p-4 rounded-xl shadow-md h-full">
        <h2 className="text-emerald-700 font-bold text-lg mb-3">
          Latest Appointments
        </h2>
        <div className="flex flex-col gap-3  overflow-y-auto">
          {isLoading ? (
            <div className="w-full  items-center justify-center flex">
              <img
                src={images.loading}
                alt="Loading ..."
                className="max-w-[400px] object-cover "
              />
            </div>
          ) : (
            dashboard?.latestAppoint &&
            dashboard?.latestAppoint?.map((appointment, idx) => (
              <AppointmentCard key={idx} appointment={appointment} />
            ))
          )}

          {dashboard?.latestAppoint == "" && (
            <h1 className="w-full text-center pt-2 text-slate-600 ">
              No Appointments yet
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardItems;
