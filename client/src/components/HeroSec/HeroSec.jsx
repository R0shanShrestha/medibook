import React from "react";
import { images } from "../../utils/constant";
import { Link } from "react-router-dom";

const HeroSec = () => {
  return (
    <div className=" w-full  flex p-10 justify-center lg:justify-evenly items-center flex-col lg:flex-row overflow-hidden">
      <div className="leftSide w-[400px] lg:hidden ">
        <img
          src={images[2].hero}
          className=" w-full h-full object-cover  rounded-xl shadow-sm"
          alt="not found"
        />
      </div>
      <div className="rideSide  items-center lg:items-baseline  flex flex-col mt-3 md:mt-0  md:p-5 gap-5">
        <div className="infos text-center md:text-left flex flex-col gap-2 w-fit">
          <h1 className="font-bold text-3xl flex-wrap justify-center md:text-4xl lg:text-4xl flex lg:flex-col  lg:gap-0  text-emerald-400 xl:text-6xl">
            Book Your Doctor,
            <span className=" lg:text-3xl xl:text-5xl">Fast & Easy!</span>
          </h1>
          <p className="text-emerald-300 font-medium">
            Connecting You with Trusted Doctors Fast & Easy Booking
          </p>
        </div>
        <Link
          to={"#"}
          className="border p-3 rounded-md bg-emerald-300 text-slate-50 font-bold text-sm w-fit hover:bg-emerald-400"
        >
          Quick Appointment
        </Link>
      </div>
      <div className="leftSide lg:w-[400px]  xl:w-[600px]  lg:flex hidden ">
        <img
          src={images[2].hero}
          className=" w-full h-full object-cover  rounded-xl shadow-sm"
          alt="not found"
        />
      </div>
    </div>
  );
};

export default HeroSec;
