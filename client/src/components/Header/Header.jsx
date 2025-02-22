import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { images } from "../../utils/constant";

const Header = ({ NavSwitchHandler }) => {
  const islogged = false;
  const [userMenu, setUserMenu] = useState(false);
  const [tab, setTab] = useState("home");
  const tabHandler = (seltab) => {
    setTab(seltab);
  };

  return (
    <div className="flex  lg:justify-around shadow-md justify-between p-5 ps-10 relative ">
      <div className="flex items-center">
        <Link className="text-3xl font-bold primaryText">Logo</Link>
      </div>
      <div className="Links  w-[80%] xl:w-fit justify-center gap-10   items-center transition-all duration-300 hidden lg:flex ">
        <div className="item   ">
          <Link
            onClick={() => {
              tabHandler("home");
            }}
            className={` ${
              tab == "home"
                ? "font-bold p-2 border-b-2 border-b-emerald-400 text-emerald-500  hover:text-emerald-300"
                : "font-medium hover:border-b-2 border-b-emerald-400 p-2  hover:font-bold text-slate-600 hover:text-emerald-300  "
            }`}
          >
            Home
          </Link>
        </div>
        <div className="item   ">
          <Link
            onClick={() => {
              tabHandler("doctor");
            }}
            to={"/doctors"}
            className={` ${
              tab == "doctor"
                ? "font-bold p-2 border-b-2 border-b-emerald-400 text-emerald-500  hover:text-emerald-300"
                : "font-medium hover:border-b-2 border-b-emerald-400 p-2  hover:font-bold text-slate-600 hover:text-emerald-300  "
            }`}
          >
            Doctors
          </Link>
        </div>
        <div className="item   ">
          <Link
            onClick={() => {
              tabHandler("contact");
            }}
            to={"/contact"}
            className={` ${
              tab == "contact"
                ? "font-bold p-2 border-b-2 border-b-emerald-400 text-emerald-500  hover:text-emerald-300"
                : "font-medium hover:border-b-2 border-b-emerald-400 p-2  hover:font-bold text-slate-600 hover:text-emerald-300  "
            }`}
          >
            Contact Us
          </Link>
        </div>
        <div className="item ">
          <Link
            onClick={() => {
              tabHandler("about");
            }}
            to={"/about"}
            className={` ${
              tab == "about"
                ? "font-bold p-2 border-b-2 border-b-emerald-400 text-emerald-500  hover:text-emerald-300"
                : "font-medium hover:border-b-2 border-b-emerald-400 p-2  hover:font-bold text-slate-600 hover:text-emerald-300  "
            }`}
          >
            About
          </Link>
        </div>
      </div>

      {!islogged ? (
        <div className="btns lg:flex items-center hidden">
          <div className="createBtn">
            <Link
              to={"/signup"}
              className="border p-2 rounded-md bg-emerald-300 text-white font-bold text-sm hover:bg-emerald-400 transition-colors duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      ) : (
        <div className="profileImg ">
          <img
            src={images[1].doctors[0]}
            alt=" not found"
            className="w-[50px] h-[50px] object-cover rounded-full cursor-pointer"
            onClick={() => {
              setUserMenu((pre) => !pre);
            }}
          />
          {/* User mini menu */}
          {userMenu && (
            <div className="Submenu z-10 border p-3 absolute flex flex-col right-64  text-slate-800 bg-slate-300 rounded-md ">
              <Link to={"/profile"} className="p-2 hover:text-white">
                My Profile
              </Link>
              <Link to={"/appointment"} className="p-2 hover:text-white">
                My Appointments
              </Link>
              <Link to={"/logout"} className="p-2 hover:text-white">
                Logout
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Mobile menu */}
      <div className="menubar lg:hidden text-emerald-300 ">
        <button
          className="text-3xl "
          onClick={() => {
            NavSwitchHandler((pre) => !pre);
          }}
        >
          <BiMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
