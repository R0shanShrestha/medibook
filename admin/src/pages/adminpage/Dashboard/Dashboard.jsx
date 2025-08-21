import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  PlusSquareIcon,
  User2Icon,
  MailPlus,
  LogOut,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const links = [
    { key: "dashboard", label: "Dashboard", icon: <LayoutDashboard />, to: "/admin/dashboard" },
    { key: "appointments", label: "Appointments", icon: <Calendar />, to: "/admin/dashboard/appointment" },
    { key: "addDoctor", label: "Add Doctor", icon: <PlusSquareIcon />, to: "/admin/dashboard/add-doctor" },
    { key: "doctors", label: "Doctors List", icon: <User2Icon />, to: "/admin/dashboard/doctors" },
    { key: "patients", label: "Patients", icon: <MailPlus />, to: "/admin/dashboard/patient" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="hidden md:flex w-[300px] flex-col bg-white rounded-r-xl shadow-md p-6 gap-6 h-screen sticky top-0">
        <div className="flex justify-center mb-2 text-2xl font-bold text-emerald-700">MediBook</div>
        <div className="flex justify-center mb-8 text-xl font-semibold text-emerald-600">
          <span className="p-2 rounded-xl px-10 shadow-md shadow-emerald-200">Admin</span>
        </div>

        <nav className="flex flex-col gap-3 flex-1">
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
        </nav>

        <Link
          to="/logout"
          className="flex items-center gap-3 p-3 rounded-lg font-medium text-sm cursor-pointer border border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-500 transition-colors"
        >
          <LogOut />
          <span>Logout</span>
        </Link>
      </aside>

      <main className="flex-1 overflow-y-auto h-screen p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
