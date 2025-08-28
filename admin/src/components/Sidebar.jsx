import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

export const Sidebar = ({ links, tab, settab, state, logout, closeMobile }) => {
  return (
    <div className="flex flex-col h-fit lg:min-h-screen  bg-white shadow-lg w-64">
      {/* Logo */}
      <div className="flex flex-col items-center py-6">
        <Link
          to={`${
            state === "Admin" ? "/admin/dashboard/" : "/doctor/dashboard/"
          }`}
          className="text-2xl font-bold text-emerald-700"
        >
          MediBook
        </Link>
        <span className="mt-2 text-sm font-medium text-emerald-600 px-3 py-1 bg-emerald-100 rounded-full">
          {state}
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col mt-6 overflow-y-auto px-1">
        {links.map(({ key, label, icon, to }) => (
          <Link
            key={key}
            to={to}
            onClick={() => {
              settab(key), closeMobile(false);
            }}
            className={`flex items-center gap-4 px-6 py-3 mx-2 my-1 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
              tab === key
                ? "bg-emerald-100 text-emerald-800 font-semibold shadow-inner"
                : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
            }`}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-6 py-4 pt-10 lg:pt-0 ">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full py-3 text-sm font-semibold rounded-lg text-gray-700 hover:bg-red-100 hover:text-red-700 hover:shadow-md transition-all duration-300"
        >
          <LogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
