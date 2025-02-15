import React from "react";
import { BiBook } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoBookmark } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const DashboardItems = () => {
  return (
    <div className="p-5 w-full flex flex-col gap-10">
      <div className=" p-2 flex gap-10">
        <div className=" cursor-pointer w-[200px] rounded-md shadow-md flex p-3 gap-2 items-center">
          <div className="ico  p-1 rounded-md bg-slate-50">
            <RiMoneyRupeeCircleFill size={34} />
          </div>
          <div className="both">
            <p className="text-xl font-bold">Earning</p>
            <h1 className="text-xl ">$1000</h1>
          </div>
        </div>
        <div className=" cursor-pointer w-[200px] rounded-md shadow-md flex p-3 gap-2 items-center">
          <div className="ico  p-1 rounded-md bg-slate-50">
            <BiBook size={34} />
          </div>
          <div className="both">
            <p className="text-xl font-bold">Appointments</p>
            <h1 className="text-xl ">5</h1>
          </div>
        </div>
        <div className=" cursor-pointer w-[200px] rounded-md shadow-md flex p-3 gap-2 items-center">
          <div className="ico  p-1 rounded-md bg-slate-50">
            <ImProfile size={34} />
          </div>
          <div className="both">
            <p className="text-xl font-bold">Patients</p>
            <h1 className="text-xl ">200</h1>
          </div>
        </div>
      </div>
      <div className=" w-full p-2 gap-5 flex flex-col">
        <div className="title flex gap-5">
          <IoBookmark size={24} />
          <h1 className="font-medium">Latest Bookings</h1>
        </div>
        <div className="flex p-2 border-t flex-col">
          <div className="flex justify-between flex-row items-center">
            <div className="flex gap-2">
              <div className="ico rounded-full overflow-hidden w-[35px] h-[30px]">
                <img src="#" alt="alt" className="border w-full h-full" />
              </div>
              <div className="info flex flex-col justify-center">
                <h1 className="font-semibold text-slate-800">
                  Roshan Shrestha
                </h1>
                <p className="text-sm text-slate-400">Booking on 5 Oct 2025</p>
              </div>
            </div>
            <div className=" flex justify-center items-center p-2 gap-2">
              <div className="p-2 border cursor-pointer border-red-500 text-red-500 rounded-full w-[40px] flex justify-center items-center h-[40px]">
                <CgClose />
              </div>
              <div className="p-2 border cursor-pointer rounded-full w-[40px] flex border-green-500 text-green-500 justify-center items-center h-[40px]">
                <IoMdCheckmark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardItems;
