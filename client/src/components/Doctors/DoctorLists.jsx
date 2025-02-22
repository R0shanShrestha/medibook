import React from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorLists = ({ doctor }) => {
  let { img, name, specilizedIn, status } = doctor;
  return (
    <div className=" overflow-hidden min-w-[200px] max-w-[200px] p-2 flex flex-col gap-2 cursor-pointer rounded-xl hover:shadow-xl ">
      <img
        src={img}
        alt="Not found"
        className="min-w-[200px] h-[130px] md:h-[200px] object-cover object-top  rounded-xl"
      />
      <div className="text-sm flex flex-col ">
        {status ? (
          <p className=" flex items-center  border-b font-medium text-green-400">
            {" "}
            <BsDot size={25} /> Available
          </p>
        ) : (
          <p className=" flex items-center  border-b font-medium text-red-400">
            <BsDot size={25} /> Not Available
          </p>
        )}
        <div className="mt-1 ">
          <p className="font-semibold text-slate-800">{name}</p>
          <p className="text-slate-700">{specilizedIn}</p>
        </div>
        <Link to={'/appointment/0000'} className="border mt-3 p-2 w-fit rounded-md bg-emerald-200 font-bold hover:bg-emerald-400 text-white">
          View
        </Link>
      </div>
    </div>
  );
};

export default DoctorLists;
