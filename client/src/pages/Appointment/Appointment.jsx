import React from "react";
import AppointmentCard from "./AppointmentCard";

const Appointment = () => {
  return (
    <div className="flex flex-col w-full   p-1 ">
      <div className="flex md:w-[70%] w-full p-10  flex-col gap-10 mx-auto text-slate-800">
        <div className="title font-semibold text-xl text-emerald-400 border-b-2 pb-5">
          <h1>My Appointments</h1>
        </div>
        <div className="AppointmentList  p-2 flex gap-5 flex-wrap h-[70vh] overflow-hidden overflow-y-scroll">
          <AppointmentCard
            DocImg=""
            name="Dr. Richard James"
            speclistIn="General physican"
            address="Mechinagar-7, jhapa"
            appointmentDate="26 April, 2006, 8:00 am"
            ispaid={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
