import React, { useContext, useEffect } from "react";

import { DoctorContextProvider } from "../../context/DoctorContext";
import { AppContextProvider } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../../components/Loading";
import AppointmentCard from "./Appointment/AppointmentCard";

const MyAppointmentPage = () => {
  const { doctorToken, getAppointments, appointments, } = useContext(
    DoctorContextProvider
  );
  const { settab } = useContext(AppContextProvider);

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
            <AppointmentCard appointment={appt} key={idx}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointmentPage;
