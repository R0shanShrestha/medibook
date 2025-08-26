import React, { useContext, useEffect } from "react";
import {
  Calendar,
  Clock,
  XCircle,
  CheckCircle,
  Wallet,
  CreditCard,
} from "lucide-react";
import { DoctorContextProvider } from "../../context/DoctorContext";
import { AppContextProvider } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const MyAppointmentPage = () => {
  const {
    doctorToken,
    getAppointments,
    appointments,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContextProvider);
  const { settab, slotDateFormat } = useContext(AppContextProvider);

  const nav = useNavigate();

  useEffect(() => {
    if (!doctorToken) {
      nav("/login");
    }
  }, [doctorToken]);

  useEffect(() => {
    if (doctorToken) {
      settab("appointment");
      getAppointments();
    }
  }, [doctorToken]);

  return (
    <div className="p-3 sm:p-6 w-full h-full overflow-y-auto no-scrollbar">
      <h1 className="text-lg sm:text-2xl font-bold text-emerald-700 mb-6">
        My Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-center text-slate-500">No appointments yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {appointments.map((appt, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 
                         hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3 md:gap-4 flex-1">
                <img
                  src={appt?.userId?.image}
                  alt={appt?.userId?.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border"
                />
                <div className="min-w-0">
                  <h2 className="font-semibold text-slate-800 text-sm sm:text-lg truncate">
                    {appt?.userId?.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {slotDateFormat(appt?.slotDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {appt?.slotTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wallet size={14} /> Rs. {appt?.docId?.fee || 0}
                    </span>
                    {/* <span
                      className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${
                        appt?.payment
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {appt?.payment ? "Paid" : "Unpaid"}
                    </span> */}
                    <span
                      className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${
                        appt?.payment
                          ? "bg-blue-100 text-green-600"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      <CreditCard size={12} /> Cash
                    </span>
                  </div>
                </div>
              </div>

              {appt?.cancelled ? (
                <p className="text-red-600 font-medium">Cancelled</p>
              ) : appt?.iscompleted ? (
                <p className="text-green-600 font-medium">Completed</p>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2 justify-end w-full md:w-auto">
                  <button
                    onClick={() => {
                      cancelAppointment(appt?._id);
                    }}
                    className="flex items-center justify-center gap-1 px-3 py-1 text-xs sm:text-sm border border-red-500 text-red-600 rounded-lg 
                  hover:bg-red-50 hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
                  >
                    <XCircle size={16} /> Cancel
                  </button>
                  <button
                    onClick={() => {
                      completeAppointment(appt?._id);
                    }}
                    className="flex items-center justify-center gap-1 px-3 py-1 text-xs sm:text-sm border border-emerald-500 text-emerald-600 rounded-lg 
                                   hover:bg-emerald-50 hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
                  >
                    <CheckCircle size={16} /> Accept
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointmentPage;
