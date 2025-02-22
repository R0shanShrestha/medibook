import React from "react";
import DoctorLists from "./DoctorLists";
import { TopDoctors } from "../../utils/constant";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <div className=" justify-center flex  md:p-10 overflow-hidden">
      <div className="w-full md:w-[90%]  md:ps-10 md:pr-10 flex flex-col gap-5 ">
        <div className=" p-1 flex justify-between ">
          <div className=" p-2 flex  flex-col gap-2">
            <h1 className="font-bold text-xl md:text-3xl text-emerald-400">
              Top Doctor Recommendation
            </h1>
            <p className="text-emerald-300 font-medium text-sm  hidden md:flex">
              Simply browse through our extensive list of trusted doctors.
              schedule your appoinment hassle-free
            </p>
          </div>
          <div className=" md:flex p-1 items-center hidden ">
            <Link
              to={"/doctors"}
              className=" p-2.5  rounded-xl bg-emerald-300 text-white text-sm font-bold hover:bg-emerald-400"
            >
              Show More
            </Link>
          </div>
        </div>
        <div className="  flex  overflow-hidden gap-10 no-scroller md:justify-evenly p-1 w-full overflow-x-scroll">
          {TopDoctors.map((doctors, idx) => {
            return <DoctorLists doctor={doctors} key={idx}  />;
          })}
        </div>
        <div className=" flex items-center p-1 w-full justify-center md:hidden">
          <Link
            to={"/doctors"}
            className=" p-2 rounded-xl bg-emerald-300 text-white text-sm font-bold hover:bg-emerald-400"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
