import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  PlusSquareIcon,
  User2Icon,
  X,
  Menu,
} from "lucide-react";
import { AppContextProvider } from "../../../context/AppContext";
import { AdminContextProvider } from "../../../context/AdminContext";
import { DoctorContextProvider } from "../../../context/DoctorContext";
import { Sidebar } from "../../../components/Sidebar";

const Dashboard = () => {
  const { settab, tab, state, setstate } = useContext(AppContextProvider);
  const { adminToken, setAdminToken } = useContext(AdminContextProvider);
  const { doctorToken, setDoctorToken } = useContext(DoctorContextProvider);
  const nav = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (doctorToken) setstate("Doctor");
    if (adminToken) setstate("Admin");
  }, [doctorToken, adminToken]);

  const logout = () => {
    if (doctorToken) {
      setDoctorToken("");
      localStorage.removeItem("doctorToken");
    }
    if (adminToken) {
      setAdminToken("");
      localStorage.removeItem("adminToken");
    }
    nav("/");
  };

  const adminLinks = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard />,
      to: "/admin/dashboard",
    },
    {
      key: "appointment",
      label: "Appointments",
      icon: <Calendar />,
      to: "/admin/dashboard/appointment",
    },
    {
      key: "addDoctor",
      label: "Add Doctor",
      icon: <PlusSquareIcon />,
      to: "/admin/dashboard/add-doctor",
    },
    {
      key: "doctors",
      label: "Doctors List",
      icon: <User2Icon />,
      to: "/admin/dashboard/doctors",
    },
  ];

  const doctorLinks = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard />,
      to: "/doctor/dashboard",
    },
    {
      key: "appointment",
      label: "Appointments",
      icon: <Calendar />,
      to: "/doctor/dashboard/appointment",
    },
    {
      key: "patients",
      label: "Patients List",
      icon: <User2Icon />,
      to: "/doctor/dashboard/patients",
    },
    {
      key: "profile",
      label: "Profile",
      icon: <LayoutDashboard />,
      to: "/doctor/dashboard/profile",
    },
  ];

  const links = state === "Admin" ? adminLinks : doctorLinks;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Top Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow-md z-50 lg:hidden">
        <Link
          to={`${
            state === "Admin" ? "/admin/dashboard/" : "/doctor/dashboard/"
          }`}
          className="text-2xl font-bold text-emerald-700"
        >
          MediBook
        </Link>
        <Menu
          size={28}
          className="cursor-pointer"
          onClick={() => setMobileOpen(true)}
        />
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed w-64 h-screen z-40">
        <Sidebar
          links={links}
          tab={tab}
          settab={settab}
          state={state}
          logout={logout}
        />
      </aside>

      {/* Mobile Sidebar  */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-2xl font-bold text-emerald-700">
                MediBook
              </span>
              <X
                size={24}
                className="cursor-pointer"
                onClick={() => setMobileOpen(false)}
              />
            </div>
            <Sidebar
              links={links}
              tab={tab}
              settab={settab}
              state={state}
              logout={logout}
              closeMobile={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 mt-16 lg:mt-0  overflow-y-auto min-h-screen p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
