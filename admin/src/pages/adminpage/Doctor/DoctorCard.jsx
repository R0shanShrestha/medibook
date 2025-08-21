import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor, changeAvailability }) => {
  let { image, name, specializedIn, available, _id } = doctor;
  return (
    <div className="  shadow-md  border-emerald-200 h-fit overflow-hidden min-w-[200px] max-w-[500px] p-2 flex flex-col gap-2 cursor-pointer rounded-xl hover:shadow-xl border">
      <img
        src={image}
        alt="Not found"
        className="min-w-[200px]  h-[130px] md:h-[200px] object-cover object-top  rounded-xl"
      />
      <div className="text-sm flex flex-col ">
        <div className="mt-1 ">
          <p className="font-semibold text-slate-800 text-xl">{name}</p>
          <p className="text-slate-700">{specializedIn}</p>
          <p className="p-1 flex items-center gap-2  ">
            <input
              onChange={() => changeAvailability(_id)}
              type="checkbox"
              name="available"
              id="available"
              checked={available}
            />
            Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
