import { BookText, BookUserIcon } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { FaUserDoctor, FaUserInjured } from "react-icons/fa6";
import AppointmentCard from "../Appointments/AppointmentCard";
import { AdminContextProvider } from "../../../context/AdminContext";
import { DoctorContextProvider } from "../../../context/DoctorContext";
import { AppContextProvider } from "../../../context/AppContext";

const DashboardItems = () => {
  const {
    adminDashboardDetails,
    DashboardDetails,
    slotDateFormat,
    cancelAppointment,
    adminToken,
  } = useContext(AdminContextProvider);

  const { doctorToken } = useContext(DoctorContextProvider);
  const { settab } = useContext(AppContextProvider);
  useEffect(() => {
    if (adminToken) {
      settab("dashboard");
      adminDashboardDetails();
    }
    if (doctorToken) {
      settab("dashboard");
    }
  }, [adminToken, doctorToken]);

  return (
    <div className="flex flex-col gap-10 h-full w-full overflow-hidden">
      {/* Top Cards */}
      <div className="flex flex-wrap gap-6 justify-start">
        {/* Doctors Card */}
        <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md min-w-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <div className="text-3xl text-emerald-700">
            <FaUserDoctor />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Doctors</span>
            <span className="font-bold text-2xl text-emerald-800">
              {DashboardDetails.totalDoctors || 0}
            </span>
          </div>
        </div>

        {/* Appointments Card */}
        <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md min-w-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <div className="text-3xl text-emerald-700">
            <BookUserIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Appointments</span>
            <span className="font-bold text-2xl text-emerald-800">
              {DashboardDetails.totalAppointment || 0}
            </span>
          </div>
        </div>

        {/* Patients Card */}
        <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md min-w-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <div className="text-3xl text-emerald-700">
            <FaUserInjured />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Patients</span>
            <span className="font-bold text-2xl text-emerald-800">
              {DashboardDetails.totalUsers || 0}
            </span>
          </div>
        </div>
      </div>

      {/* Latest Appointments */}
      <div className="bg-white rounded-xl shadow-md p-5 flex flex-col h-full overflow-hidden transform transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center gap-3 pb-3 text-emerald-800 font-medium text-lg">
          <BookText size={28} />
          <span>Latest Appointments</span>
        </div>

        <div className="mt-4 flex flex-col gap-3 overflow-y-auto h-[400px] md:h-[500px] pr-2">
          {DashboardDetails?.latestAppointments?.length > 0 ? (
            DashboardDetails.latestAppointments.map((details, idx) => (
              <AppointmentCard
                key={idx}
                data={details}
                slotDateFormat={slotDateFormat}
                cancelAppointment={cancelAppointment}
              />
            ))
          ) : (
            <div className="text-gray-400 text-center py-10">
              No recent appointments
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardItems;
