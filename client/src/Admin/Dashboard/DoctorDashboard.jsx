import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  User2Icon,
  UserCogIcon,
  LogOut,
} from "lucide-react";
import MobileAdminNav from "../../components/Header/MobileAdminNav";

const DoctorDashboard = ({ doctorName = "Dr. John Doe" }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const links = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard />,
      to: "/doctor/dashboard",
    },
    {
      key: "appointments",
      label: "My Appointments",
      icon: <Calendar />,
      to: "/doctor/dashboard/appointments",
    },
    {
      key: "patients",
      label: "Patients List",
      icon: <User2Icon />,
      to: "/doctor/dashboard/patients",
    },
    {
      key: "profile",
      label: "Profile Settings",
      icon: <UserCogIcon />,
      to: "/doctor/dashboard/profile",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="hidden md:flex flex-col w-64 bg-white rounded-r-xl shadow-md p-6 gap-6 h-screen sticky top-0">
        <div className="flex justify-center mb-2 text-2xl font-bold text-emerald-700">
          MediBook
        </div>
        <div className="flex justify-center mb-8 text-xl font-semibold text-emerald-600">
          {doctorName}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          {links.map(({ key, label, icon, to }) => (
            <Link
              key={key}
              to={to}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-3 p-3 rounded-lg font-medium text-sm transition-all ${
                activeTab === key
                  ? "bg-emerald-100 text-emerald-800 shadow-inner"
                  : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>
        <Link
          to="/logout"
          className="flex items-center gap-3 p-3 rounded-lg font-medium text-sm cursor-pointer border border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-500 transition-colors"
        >
          <LogOut />
          <span>Logout</span>
        </Link>
      </aside>
      <main className="flex-1 overflow-y-auto h-screen p-6">
        <Outlet />
      </main>
      <div className="md:hidden">
        <MobileAdminNav />
      </div>
    </div>
  );
};

export default DoctorDashboard;
