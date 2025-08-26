import React, { useContext, useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AppContextProvider } from "../../context/AppContext";

const Header = () => {
  const { token, setToken, user, tab, setTab } = useContext(AppContextProvider);
  const [userMenu, setUserMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // mobile menu state

  const tabHandler = (seltab) => {
    setTab(seltab);
    setMobileMenu(false); // close mobile menu on tab click
  };
  
  const logout = () => {
    localStorage.removeItem("Usertoken");
    setToken("");
  };

  return (
    <div className="flex lg:justify-around shadow-md justify-between p-5 ps-10 items-center sticky top-0 z-50 bg-white">
      <div className="flex items-center">
        <Link className="text-2xl font-bold text-emerald-800">MediBook</Link>
      </div>

      {/* Desktop Links */}
      <div className="Links text-sm w-[80%] xl:w-fit justify-center gap-8 items-center hidden lg:flex transition-all duration-300">
        {[
          { key: "home", label: "Home", to: "/" },
          { key: "doctor", label: "Doctors", to: "/doctors" },
          { key: "helpLine", label: "helpLine", to: "/helpLine" },
          { key: "about", label: "About", to: "/about" },
        ].map(({ key, label, to }) => (
          <Link
            key={key}
            onClick={() => tabHandler(key)}
            to={to}
            className={`${
              tab === key
                ? "font-bold border-b-2 border-emerald-600 text-emerald-800 p-2"
                : "font-medium border-b-2 border-transparent text-emerald-800 hover:border-emerald-600 hover:font-bold p-2"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Right Section */}
      {!token ? (
        <div className="flex gap-2 lg:flex items-center ">
          <Link
            to="/login"
            className="px-3 py-1.5 rounded-md border border-emerald-600 text-emerald-600 text-sm font-medium hover:bg-emerald-800 transition-colors hover:text-white duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-3 py-1.5 rounded-md border hover:border-none border-emerald-800 text-emerald-800 text-sm font-medium hover:bg-emerald-200 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-2 relative">
          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <BiX size={28} /> : <BiMenu size={28} />}
          </div>

          {/* Profile Image */}
          <div className="profileImg hidden lg:block relative">
            <img
              src={user.image}
              alt="Profile"
              className="w-[50px] h-[50px] object-top object-cover rounded-full cursor-pointer"
              onClick={() => setUserMenu((pre) => !pre)}
            />
            {userMenu && (
              <div
                onMouseLeave={() => setUserMenu(false)}
                className="Submenu z-10 py-3 absolute right-0 text-emerald-800 bg-slate-100 rounded-md flex flex-col gap-1"
              >
                <Link
                  to="/profile"
                  className="px-5 py-2 text-sm hover:border-s-2 hover:border-emerald-900 hover:text-emerald-800"
                >
                  My Profile
                </Link>
                <Link
                  to="/my-appointment"
                  className="px-5 py-2 text-sm hover:border-s-2 hover:border-emerald-900 hover:text-emerald-800"
                >
                  My Appointments
                </Link>
                <Link
                  onClick={() => logout()}
                  className="px-5 py-2 text-sm hover:border-s-2 hover:border-emerald-900 hover:text-emerald-800"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu Links */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-3 p-5 z-40">
          {[
            { key: "home", label: "Home", to: "/" },
            { key: "doctor", label: "Doctors", to: "/doctors" },
            { key: "contact", label: "helpLine", to: "/contact" },
            { key: "about", label: "About", to: "/about" },
          ].map(({ key, label, to }) => (
            <Link
              key={key}
              onClick={() => tabHandler(key)}
              to={to}
              className={`${
                tab === key
                  ? "font-bold border-b-2 border-emerald-600 text-emerald-800 p-2"
                  : "font-medium border-b-2 border-transparent text-emerald-800 hover:border-emerald-600 hover:font-bold p-2"
              }`}
            >
              {label}
            </Link>
          ))}
          <div
            className="flex flex-col gap-2 mt-2"
            onMouseLeave={() => {
              setMobileMenu(false);
            }}
          >
            <Link
              to="/profile"
              className="px-3 py-2 text-sm text-emerald-800 border rounded hover:bg-emerald-50"
            >
              My Profile
            </Link>
            <Link
              to="/my-appointment"
              className="px-3 py-2 text-sm text-emerald-800 border rounded hover:bg-emerald-50"
            >
              My Appointments
            </Link>
            <Link
              onClick={() => logout()}
              className="px-3 py-2 text-sm text-emerald-800 border rounded hover:bg-emerald-50"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
