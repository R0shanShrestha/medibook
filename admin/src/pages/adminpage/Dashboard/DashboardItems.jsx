import { BookText, BookUserIcon } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { FaUserDoctor, FaUserInjured } from "react-icons/fa6";
import AppointmentCard from "../Appointments/AppointmentCard";
import { AdminContextProvider } from "../../../context/AdminContext";
import { AppContextProvider } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../../client/src/components/Loading/Loading";

const DashboardItems = () => {
  const {
    adminDashboardDetails,
    DashboardDetails,
    slotDateFormat,
    adminToken,
    isLoading,
  } = useContext(AdminContextProvider);

  const { settab } = useContext(AppContextProvider);
  const nav = useNavigate();

  useEffect(() => {
    if (!adminToken) {
      nav("/login");
    }
  }, [adminToken]);
  useEffect(() => {
    if (adminToken) {
      settab("dashboard");
      adminDashboardDetails();
    }
  }, [adminToken]);

  return adminToken ? (
    <div className="flex flex-col gap-10 h-full w-full overflow-hidden">
      {/* Top Cards */}
      <div className="flex flex-wrap  gap-6 justify-start ">
        {/* Doctors Card */}
        <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md md:min-w-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <div className="text-3xl text-emerald-700">
            <FaUserDoctor />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Doctors</span>
            <span className="font-bold text-2xl text-emerald-800">
              {isLoading ? (
                <Loading type={1} />
              ) : (
                DashboardDetails.totalDoctors || 0
              )}
            </span>
          </div>
        </div>

        {/* Appointments Card */}
        <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md md:min-w-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <div className="text-3xl text-emerald-700">
            <BookUserIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Appointments</span>
            <span className="font-bold text-2xl text-emerald-800">
              {isLoading ? (
                <Loading type={1} />
              ) : (
                DashboardDetails.totalAppointment || 0
              )}
            </span>
          </div>
        </div>

        {/* Patients Card */}
        <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md md:min-w-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <div className="text-3xl text-emerald-700">
            <FaUserInjured />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Patients</span>
            <span className="font-bold text-2xl text-emerald-800">
              {isLoading ? (
                <Loading type={1} />
              ) : (
                DashboardDetails.totalUsers || 0
              )}
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
          {isLoading ? (
            <Loading />
          ) : DashboardDetails?.latestAppointments?.length > 0 ? (
            DashboardDetails.latestAppointments.map((details, idx) => (
              <AppointmentCard
                key={idx}
                data={details}
                slotDateFormat={slotDateFormat}
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
  ) : (
    <div className="w-full text-center items-center ">Login Required</div>
  );
};

export default DashboardItems;
