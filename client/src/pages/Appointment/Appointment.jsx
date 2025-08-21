import React, { useContext } from "react";
import AppointmentCard from "./AppointmentCard";
import { AppContextProvider } from "../../context/AppContext";

const Appointment = () => {
  const { Doctors } = useContext(AppContextProvider);

  return (
    <div className="flex flex-col w-full p-4 pt-24 bg-gradient-to-b from-[#e6f7f4] to-white min-h-screen">
      <div className="flex md:w-[90%] w-full p-8 flex-col gap-8 mx-auto text-slate-800">
        <div className="title font-bold text-3xl text-emerald-800 border-b-2 pb-4">
          My Appointments
        </div>
        <div className="AppointmentList flex flex-col gap-6 py-4">
          {Doctors.slice(0, 4).map((doc) => (
            <div key={doc.id} className="w-full">
              <AppointmentCard
                DocId={doc.id}
                DocImg={doc.img}
                name={doc.name}
                specializedIn={doc.specializedIn}
                address={doc.address}
                appointmentDate={doc.appointmentDate || "2025-08-21"}
                status={doc.status || "Upcoming"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
