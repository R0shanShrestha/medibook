import React from "react";
import SpecialityList from "./SpecialityList";
import { speciality } from "../../utils/constant";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <div className=" w-full items-center justify-center flex flex-col md:p-10  gap-10  ">
      <div className="md:w-[90%] w-fit p-3 md:ps-10 md:pr-10 flex flex-col  items-start gap-5">
        <div className="flex justify-between  w-full ">
          <div className=" p-2  flex flex-col gap-2">
            <h1 className="text-emerald-400 font-bold text-xl md:text-3xl">
              Find by Speciality
            </h1>
            <p className="text-emerald-300 font-medium text-sm hidden md:flex">
              Simply browse through our extensive list of trusted doctors.
              schedule your appoinment hassle-free
            </p>
          </div>
        </div>
        <div className="flex justify-evenly  w-full items-center flex-wrap gap-2">
          {speciality.map((fields, idx) => {
            return <SpecialityList key={idx} data={fields} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Speciality;
