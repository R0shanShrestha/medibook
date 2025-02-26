import React from "react";
import { CgClose } from "react-icons/cg";

const AppointmentCard = () => {
  return (
    <div className="items flex items-center  justify-between p-2 border">
      <div className="flex items-center gap-4">
        <div className="userIco">
          <img
            src="#"
            alt="Not found"
            className="w-[50px] h-[50px] rounded-full border"
          />
        </div>
        <div className="Detls text-slate-700">
          <h2 className="font-medium">Roshan Shrestha</h2>
          <p className="text-sm text-slate-500">Booking on 1st jan, 2025</p>
        </div>
      </div>
      <div className="p-2 cursor-pointer ">
        <p className="p-2  hover:shadow-md hover:bg-emerald-800 hover:text-white border-emerald-600 text-emerald-500 w-[35px] flex items-center justify-center text-xl h-[35px] rounded-full">
          <CgClose size={30} />
        </p>
      </div>
    </div>
  );
};

export default AppointmentCard;
