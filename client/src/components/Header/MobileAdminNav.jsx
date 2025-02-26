import {
  Calendar,
  LayoutDashboard,
  MailPlus,
  PlusSquareIcon,
  User2Icon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTabSelection from "../../../hooks/useTabSelection";

const MobileAdminNav = () => {
  // const tabval = useTabSelection("home");
  const [tab, setTab] = useState("dashboard");

  const tabHandler = (seltab) => {
    setTab(seltab);
  };

  return (
    <div className="sidebar shadow-md  fixed bottom-0.5 w-full  bg-white  flex border gap-5">
      <Link
        onClick={() => {
          tabHandler("dashboard");
        }}
        to={"/dashboard"}
        className={`${
          tab == "dashboard"
           ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-t-4 border-emerald-700 w-full "
            : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-t-4 hover:border-emerald-700 w-full"
        }`}
      >
        <LayoutDashboard />
        <span className="hidden md:block">Dashboard</span>
      </Link>
      <Link
        to={"/dashboard/appointment"}
        onClick={() => {
          tabHandler("dashboard/appointment");
        }}
        className={`${
          tab == "dashboard/appointment"
           ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-t-4 border-emerald-700 w-full "
            : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-t-4 hover:border-emerald-700 w-full"
        }`}
      >
        <Calendar /> <span className="hidden md:block">Appointments</span>
      </Link>
      <Link
        to={"/dashboard/add-doctor"}
        onClick={() => {
          tabHandler("dashboard/addDoctor");
        }}
        className={`${
          tab == "dashboard/addDoctor"
             ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-t-4 border-emerald-700 w-full "
            : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-t-4 hover:border-emerald-700 w-full"
        }`}
      >
        <PlusSquareIcon /> <span className="hidden md:block">Add Doctor</span>
      </Link>
      <Link
        to={"/dashboard/doctors"}
        onClick={() => {
          tabHandler("dashboard/doctors");
        }}
        className={`${
          tab == "dashboard/doctors"
             ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-t-4 border-emerald-700 w-full "
            : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-t-4 hover:border-emerald-700 w-full"
        }`}
      >
        <User2Icon /> <span className="hidden md:block">Doctors List</span>
      </Link>
      <Link
        to={"/dashboard/patient"}
        onClick={() => {
          tabHandler("dashboard/patient");
        }}
        className={`${
          tab == "dashboard/patient"
           ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-t-4 border-emerald-700 w-full "
            : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-t-4 hover:border-emerald-700 w-full"
        }`}
      >
        <MailPlus /> <span className="hidden md:block">Patients</span>
      </Link>
    </div>
  );
};

export default MobileAdminNav;
