import React, { useContext, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { images } from "../../utils/constant";
import { AuthContextProvider } from "../../context/AuthContext";

const Header = ({ NavSwitchHandler }) => {
  const { islogged } = useContext(AuthContextProvider);
  const [userMenu, setUserMenu] = useState(false);
  const [tab, setTab] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const tabHandler = (seltab) => setTab(seltab);

  return (
    <div className="flex lg:justify-around shadow-md justify-between p-5 ps-10 items-center sticky top-0 z-50 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link className="text-2xl font-bold text-emerald-800">MediBook</Link>
      </div>

      {/* Desktop Links */}
      <div className="Links text-sm w-[80%] xl:w-fit justify-center gap-8 items-center hidden lg:flex transition-all duration-300">
        {[
          { key: "home", label: "Home", to: "/" },
          { key: "doctor", label: "Doctors", to: "/doctors" },
          { key: "contact", label: "Contact Us", to: "/contact" },
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

      {/* Auth Buttons / Profile */}
      {!islogged ? (
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
        <div className="profileImg hidden lg:block relative">
          <img
            src={images[1].doctors[0]}
            alt="Profile"
            className="w-[50px] h-[50px] object-cover rounded-full cursor-pointer"
            onClick={() => setUserMenu((pre) => !pre)}
          />
          {userMenu && (
            <div className="Submenu z-10 border p-3 absolute right-0 text-emerald-800 bg-slate-100 rounded-md flex flex-col gap-1">
              <Link to="/profile" className="p-2 hover:text-emerald-800">
                My Profile
              </Link>
              <Link to="/appointment" className="p-2 hover:text-emerald-800">
                My Appointments
              </Link>
              <Link to="/logout" className="p-2 hover:text-emerald-800">
                Logout
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="menubar lg:hidden text-emerald-800">
        <button
          className="text-3xl"
          onClick={() => setMobileMenu((pre) => !pre)}
        >
          {mobileMenu ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-slate-100 shadow-lg z-50 transform transition-transform duration-300 lg:hidden ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col mt-20 gap-4 p-5">
          {[
            { key: "home", label: "Home", to: "/" },
            { key: "doctor", label: "Doctors", to: "/doctors" },
            { key: "contact", label: "Contact Us", to: "/contact" },
            { key: "about", label: "About", to: "/about" },
          ].map(({ key, label, to }) => (
            <Link
              key={key}
              to={to}
              onClick={() => {
                tabHandler(key);
                setMobileMenu(false);
              }}
              className={`${
                tab === key
                  ? "font-bold border-b-2 border-emerald-600 text-emerald-800 p-2"
                  : "font-medium border-b-2 border-transparent text-emerald-800 hover:border-emerald-600 hover:font-bold p-2"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Auth Buttons */}
          {!islogged ? (
            <>
              <Link
                to="/login"
                onClick={() => setMobileMenu(false)}
                className="px-4 py-2 rounded-md border border-emerald-600 text-emerald-600 text-sm font-medium hover:bg-emerald-100 text-center transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileMenu(false)}
                className="px-4 py-2 rounded-md border border-emerald-800 text-emerald-800 text-sm font-medium hover:bg-emerald-200 text-center transition-colors duration-300"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                onClick={() => setMobileMenu(false)}
                className="p-2 hover:text-emerald-800"
              >
                My Profile
              </Link>
              <Link
                to="/appointment"
                onClick={() => setMobileMenu(false)}
                className="p-2 hover:text-emerald-800"
              >
                My Appointments
              </Link>
              <Link
                to="/logout"
                onClick={() => setMobileMenu(false)}
                className="p-2 hover:text-emerald-800"
              >
                Logout
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
