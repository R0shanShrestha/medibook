import React from "react";
import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { AdminContextProvider } from "../../../context/AdminContext";
import { useState } from "react";
import Loading from "../../../components/Loading";

const AppointmentCard = ({ data, slotDateFormat }) => {
  const [insideLoading, setinsideLoading] = useState(false);
  const { cancelAppointment, } = useContext(AdminContextProvider);


  return (
    <div className="items flex items-center rounded-xl   justify-between p-2 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="userIco">
          <img
            src={data.userId.image}
            alt="Not found"
            className="w-[50px] h-[50px] object-cover object-top rounded-full "
          />
        </div>
        <div className="Detls text-slate-700">
          <h2 className="font-medium">{data.userId.name}</h2>
          <p className="text-sm text-slate-500">
            Booked on: {slotDateFormat(data.slotDate)} || {data.slotTime}
          </p>
        </div>
      </div>
      <div className="p-2 cursor-pointer h-fit  ">
        {insideLoading ? (
          <Loading />
        ) : data.iscompleted ? (
          <p className="  font-semibold rounded text-green-500 px-2">
            Completed
          </p>
        ) : data.cancelled ? (
          <p className="text-red-400  px-2 font-semibold">Cancelled</p>
        ) : (
          <p
            onClick={() => {
              cancelAppointment(data._id, setinsideLoading);
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
