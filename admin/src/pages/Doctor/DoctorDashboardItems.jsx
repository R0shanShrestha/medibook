import React, { useContext, useEffect, useState } from "react";
import { Calendar, User, Clock, CheckCircle, XCircle } from "lucide-react";
import { DoctorContextProvider } from "../../context/DoctorContext";
import { AppContextProvider } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { images } from "../../constant";
import AppointmentCard from "./Appointment/AppointmentCard";
import Loading from "../../components/Loading";

const DoctorDashboardItems = () => {
  const { doctorToken, dashboard, dashboardData,  isLoading} = useContext(
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

 

  return (
    <div className="flex flex-col gap-8">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className={`p-4 rounded-xl shadow-md flex flex-col items-start justify-between transition-transform transform hover:-translate-y-1 bg-emerald-500 text-white`}
        >
          <div className="text-2xl">
            <Calendar />{" "}
          </div>
          <h3 className="mt-2 text-xs font-semibold">Today's Appointments</h3>
          {isLoading ? (
            <div className="text-white grayscale brightness-200">
              <Loading type={1} />
            </div>
          ) : (
            <p className="text-xl font-bold mt-1">{dashboard.totalAppoint}</p>
          )}
        </div>
        <div
          className={`p-4 rounded-xl shadow-md flex flex-col items-start justify-between transition-transform transform hover:-translate-y-1 bg-gray-400 text-white`}
        >
          <div className="text-2xl"><CheckCircle /></div>
          <h3 className="mt-2 text-xs font-semibold">Completed Appointments</h3>
           {isLoading ? (
            <div className="text-white grayscale brightness-200 ">
              <Loading type={1} />
            </div>
          ) : (
          <p className="text-xl font-bold mt-1">{dashboard.CompletedAppointments || 0}</p>
          )}
        </div>
        <div
          className={`p-4 rounded-xl shadow-md flex flex-col items-start justify-between transition-transform transform hover:-translate-y-1 bg-blue-500 text-white`}
        >
          <div className="text-2xl">
            {" "}
            <User />
          </div>
          <h3 className="mt-2 text-xs font-semibold">Total Patients</h3>
          {isLoading ? (
            <div className="text-white grayscale brightness-200">
              <Loading type={1} />
            </div>
          ) : (
            <p className="text-xl font-bold mt-1">{dashboard.totalPatients}</p>
          )}
        </div>
        <div
          className={`p-4 rounded-xl shadow-md flex flex-col items-start justify-between transition-transform transform hover:-translate-y-1 bg-yellow-500 text-white`}
        >
          <div className="text-2xl"><Clock /></div>
          <h3 className="mt-2 text-xs font-semibold">Earnings</h3>
          {isLoading ? (
            <div className="text-white grayscale brightness-200">
              <Loading type={1} />
            </div>
          ) : (
            <p className="text-xl font-bold mt-1">{dashboard?.earnings || 0}</p>
          )}
        </div>
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
