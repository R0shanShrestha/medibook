import React from "react";
import { images } from "../utils/constant";
import { Link } from "react-router-dom";
import { BsMenuButton } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FaClipboardList } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex ps-0 pt-10 pr-10 p-10 lg:ps-20 lg:pr-20 justify-between items-center shadow-md">
      {/* Logo */}
      <Link className="logo flex items-center  h-[25px]" to={"/"}>
        <img src={images[0].logo} alt="logo" className="object-cover w-full" />{" "}
      </Link>
      {/* links */}
      <div className="hidden lg:flex gap-10 font-medium text-[16px] uppercase text-md text-slate-600 h-full items-center ">
        <Link className=" h-full pb-1 text-emerald-400 hover:text-emerald-400 hover:border-b-2 border-slate-800 ">
          Home
        </Link>
        <Link
          className=" h-full pb-1 hover:text-emerald-400 hover:border-b-2 border-slate-800 "
          to={"/doctors"}
        >
          All Doctors
        </Link>
        <Link className=" h-full pb-1 hover:text-emerald-400 hover:border-b-2 border-slate-800 ">
          About
        </Link>
        <Link className=" h-full pb-1 hover:text-emerald-400 hover:border-b-2 border-slate-800 ">
          Contact
        </Link>
      </div>
      {/* Others */}
      <div className="others hidden lg:flex">
        <button className="button">Create Account</button>
      </div>

      {/* hamburer bar */}
      <div className="flex items-center lg:hidden cursor-pointer text-emerald-500 font-bold">
        {" "}
        <BiMenu size={35} />
      </div>
      {/*  */}
      <div className="fixed bottom-0 shadow-lg border lg:hidden bg-emerald-950 w-full h-[60px] flex justify-center items-center z-10 ">
        <div className="flex lg:flex gap-10 font-medium text-[16px] uppercase text-md text-slate-600  items-center justify-around w-full ">
          <Link className=" h-full text-slate-900 border p-2 rounded-md bg-white textb text-[25px]">
            <IoHomeSharp />
          </Link>
          <Link className="h-full text-slate-900 border p-2 rounded-md bg-white textb text-[25px]">
            <FaClipboardList />
          </Link>
          <Link className="h-full text-slate-900 border p-2 rounded-md bg-white textb text-[25px]">
            <FcAbout />
          </Link>
          <Link className="h-full text-slate-900 border p-2 rounded-md bg-white textb text-[25px]">
            <MdContacts />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
