import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaUserDoctor } from "react-icons/fa6";
import { FcAbout, FcContacts } from "react-icons/fc";
import { Link } from "react-router-dom";
import { images } from "../../utils/constant";

const MobileNav = ({ NavSwitchHandler }) => {
  const islogged = false;
  const [userMenu, setUserMenu] = useState(false);

  setTimeout(() => {
    NavSwitchHandler(false);
  }, 3000);
  return (
    <div className="fixed z-10 top-0 transition-all duration-500  text-emerald-50 bg-slate-900 h-full p-10 flex flex-col w-[300px] gap-10">
      <div className="flex justify-between p-5 items-center text-xl font-bold">
        <span>Close</span>{" "}
        <span
          onClick={() => {
            NavSwitchHandler((preVal) => !preVal);
          }}
          className=" border hover:border-none p-2 rounded-xl hover:bg-slate-200 hover:bg-opacity-45 hover:text-slate-100"
        >
          <CgClose size={25} fontWeight={800} />
        </span>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Links</h1>
      </div>
      <div className="Links  flex flex-col gap-5 justify-center ">
        <div className="item   ">
          <Link
            className={` ${"font-bold flex items-center gap-5 p-2  text-emerald-500  hover:text-emerald-300"}`}
            to={"/"}
          >
            <span
              className="text-white
            "
            >
              <BiHome size={30} />
            </span>
            <span>Home</span>
          </Link>
        </div>
        <div className="item   ">
          <Link
            className={` ${"font-bold flex items-center gap-5 p-2  text-emerald-500  hover:text-emerald-300"}`}
            to={"/doctors"}
          >
            <span
              className="text-white
            "
            >
              <FaUserDoctor size={30} />
            </span>
            <span>Doctors</span>
          </Link>
        </div>
        <div className="item   ">
          <Link
            className={` ${"font-bold flex items-center gap-5 p-2  text-emerald-500  hover:text-emerald-300"}`}
            to={"/contact"}
          >
            <span
              className="text-white
            "
            >
              <FcContacts size={30} />
            </span>
            <span>Contact</span>
          </Link>
        </div>
        <div className="item   ">
          <Link
            className={` ${"font-bold flex items-center gap-5 p-2  text-emerald-500  hover:text-emerald-300"}`}
            to={"/about"}
          >
            <FcAbout size={30} />
            <span>About</span>
          </Link>
        </div>
        <div className="item  relative ">
          {!islogged ? (
            <div className="btns flex  p-2 w-full">
              <Link
                to={"/signup"}
                className=" w-full text-center  p-2.5 rounded-xl bg-emerald-300 text-white font-bold text-sm hover:bg-emerald-400 transition-colors duration-300"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="profileImg flex gap-5 items-center ">
              <img
                src={images[1].doctors[0]}
                alt=" not found"
                className="w-[50px] h-[50px] object-cover rounded-full cursor-pointer"
                onClick={() => {
                  setUserMenu((pre) => !pre);
                }}
              />
              <p className="font-medium">Cristina Shrestha</p>
              {/* User mini menu */}
              {userMenu && (
                <div className="Submenu z-10 border p-3 absolute flex flex-col -right-5 top-0  text-slate-800 bg-slate-300 rounded-e-md rounded-b-md ">
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
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
