import { BookText, BookUserIcon, Cross } from "lucide-react";
import React from "react";
import { FaUserDoctor, FaUserInjured } from "react-icons/fa6";
import AppointmentCard from "../Appointments/AppointmentCard";

const DashboardItems = () => {
  return (
    <div className="md:ps-10 flex flex-col gap-10  h-full overflow-hidden overflow-y-scroll no-scroller ">
      <div className=" flex gap-10 p-2 flex-wrap  items-center  ">
        <div className="cards flex gap-3 border items-center p-5 rounded-md shadow-md w-fit ">
          <div className="ico text-3xl text-emerald-800">
            <FaUserDoctor />
          </div>
          <div className="detls flex text-sm text-emerald-700 flex-col justify-center">
            <span className="font-bold text-xl">14</span>
            <span>Doctors</span>
          </div>
        </div>
        <div className="cards flex gap-3 border items-center p-5 rounded-md shadow-md w-fit ">
          <div className="ico text-3xl text-emerald-800">
            <BookUserIcon />
          </div>
          <div className="detls flex text-sm text-emerald-700 flex-col justify-center">
            <span className="font-bold text-xl">2</span>
            <span>Appointments</span>
          </div>
        </div>
        <div className="cards flex gap-3 border items-center p-5 rounded-md shadow-md w-fit ">
          <div className="ico text-3xl text-emerald-800">
            <FaUserInjured />
          </div>
          <div className="detls flex text-sm text-emerald-700 flex-col justify-center">
            <span className="font-bold text-xl">5</span>
            <span>Patients</span>
          </div>
        </div>
      </div>
      {/* Latest Appointments */}
      <div className="latest  p-5   h-[80%] md:h-full">
        <div className="title flex pb-5 border-b-2 items-center font-medium gap-3 text-emerald-800">
          <BookText size={30} /> <span>Latest Appointment</span>
        </div>
        <div className="appointmentsList no-scroller  overflow-hidden pt-2 gap-3 flex flex-col overflow-y-scroll h-[60%] md:h-[70%]  p-1">
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardItems;
