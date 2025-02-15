import React from "react";
import { BiCalendar } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import DashboardItems from "./DashboardItems";

const DoctorDashboard = () => {
  return (
    <div className="border flex h-[80vh]">
      <div className="h-full border p-2">
        <div className=" p-2">
          <button className="border p-2 w-full bg-emerald-500 text-white rounded-md flex gap-4 items-center">
            <RxDashboard />
            Dashboard
          </button>
        </div>
        <div className=" p-2">
          <button className="border p-2 w-[220px] rounded-md flex gap-4 items-center">
            <BiCalendar />
            Appointments
          </button>
        </div>
        <div className=" p-2">
          <button className="border p-2 w-[220px] rounded-md flex gap-4 items-center">
            <CgProfile />
            Profile
          </button>
        </div>
      </div>
      {/* ................................................... */}
      <div className="border w-full">
        <DashboardItems />
      </div>
    </div>
  );
};

export default DoctorDashboard;
