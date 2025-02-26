import {
  Calendar,
  LayoutDashboard,
  MailIcon,
  MailPlus,
  MenuIcon,
  PlusCircle,
  PlusSquare,
  PlusSquareIcon,
  User2Icon,
} from "lucide-react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MobileAdminNav from "../../components/Header/MobileAdminNav";

const Dashboard = () => {
  const [tab, setTab] = useState("dashboard");

  const tabHandler = (seltab) => {
    setTab(seltab);
  };
  return (
    <div className=" flex flex-col  gap-5 md:p-5 h-[100dvh] overflow-hidden">
      {/* Header */}
      <div className="headerBar w-full md:w-[80%] mx-auto  flex justify-between p-2 ps-4">
        <div className="flex items-center">
          <Link className="text-2xl primaryText">Admin</Link>
        </div>

        <div className="btns p-2">
          <Link className="border hidden md:block bg-emerald-400 text-white font-normal p-1.5 ps-4 pr-4 rounded-md">
            Logout
          </Link>
          <span className="text-emerald-500 md:hidden">
            <MenuIcon />
          </span>
        </div>
      </div>
      {/* ContainerContext */}
      <div className="mainContext border  md:h-[85vh] w-full md:w-[80%] md:mx-auto flex flex-col md:flex-row">
        {/* sidebar */}
        <div className="sidebar hidden border h-full p-3 shadow-md overflow-hidden overflow-y-scroll no-scroller w-[80px] md:min-w-[250px]   md:flex flex-col gap-5">
          <Link
            onClick={() => {
              tabHandler("dashboard");
            }}
            to={"/dashboard"}
            className={`${
              tab == "dashboard"
                ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-e-4 border-emerald-700 w-full "
                : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-e-4 hover:border-emerald-700 w-full"
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
                ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-e-4 border-emerald-700 w-full "
                : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-e-4 hover:border-emerald-700 w-full"
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
                ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-e-4 border-emerald-700 w-full "
                : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-e-4 hover:border-emerald-700 w-full"
            }`}
          >
            <PlusSquareIcon />{" "}
            <span className="hidden md:block">Add Doctor</span>
          </Link>
          <Link
            to={"/dashboard/doctors"}
            onClick={() => {
              tabHandler("dashboard/doctors");
            }}
            className={`${
              tab == "dashboard/doctors"
                ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-e-4 border-emerald-700 w-full "
                : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-e-4 hover:border-emerald-700 w-full"
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
                ? "linkbox justify-center md:justify-start cursor-pointer text-sm items-center  flex gap-5 font-medium  p-3 bg-emerald-100 text-slate-700 border-e-4 border-emerald-700 w-full "
                : "justify-center md:justify-start cursor-pointer text-sm items-center flex gap-5 font-medium  p-3 hover:bg-emerald-100 hover:text-slate-700 text-slate-800 hover:border-e-4 hover:border-emerald-700 w-full"
            }`}
          >
            <MailPlus /> <span className="hidden md:block">Patients</span>
          </Link>
        </div>
        <div className="rightBar border  p-2 h-[85%] md:h-[100%]  w-full">
          <Outlet />
        </div>
        <div className="md:hidden">
          <MobileAdminNav />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
