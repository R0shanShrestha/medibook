import React from "react";
import { CgClose } from "react-icons/cg";

const AppointmentCard = ({ data, slotDateFormat, cancelAppointment }) => {
  return (
    <div className="items flex items-center  justify-between p-2 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="userIco">
          <img
            src={data.userData.image}
            alt="Not found"
            className="w-[50px] h-[50px] object-cover object-top rounded-full border"
          />
        </div>
        <div className="Detls text-slate-700">
          <h2 className="font-medium">{data.userData.name}</h2>
          <p className="text-sm text-slate-500">
            Booked on: {slotDateFormat(data.slotDate)} || {data.slotTime}
          </p>
        </div>
      </div>
      <div className="p-2 cursor-pointer ">
        {data.iscompleted ? (
          <p className="  font-semibold rounded text-green-500 px-2">
            Completed
          </p>
        ) : data.cancelled ? (
          <p className="text-red-400  px-2 font-semibold">Cancelled</p>
        ) : (
          <p
            onClick={() => {
              cancelAppointment(data._id);
            }}
            className="p-2  hover:shadow-md hover:bg-emerald-800 hover:text-white border-emerald-600 text-emerald-500 w-[35px] flex items-center justify-center text-xl h-[35px] border rounded-full"
          >
            <CgClose size={30} />
          </p>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
