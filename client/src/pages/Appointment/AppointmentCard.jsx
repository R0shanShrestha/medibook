import React from "react";
import { Link } from "react-router-dom";

const AppointmentCard = ({
  name,
  speclistIn,
  address,
  appointmentDate,
  DocImg,
  ispaid,
}) => {
  return (
    <div className="flex flex-col overflow-hidden w-fit h-fit  justify-center items-center rounded-xl shadow">
      <div className="imgBox">
        <img
          src={DocImg}
          alt="Image Not Loaded"
          className="border w-[200px] h-[200px] object-cover rounded-md "
        />
      </div>
      <div className="UserInfo p-2">
        <p className="font-medium ">{name}</p>
        <p className="text-sm">{speclistIn}</p>
        <div className="mt-3">
          <p className="text-sm">
            <span className="font-medium">Address</span>: <br />
            {address}
          </p>
          <p className="text-sm">
            <span className="font-medium">Date & Time : </span>
            <span className="text-sm"> {appointmentDate}</span>
          </p>
        </div>
      </div>

      <div className="appBtns flex flex-col  w-full items-center  gap-2  p-2">
        {ispaid ? (
          <Link className="bg-emerald-400 hover:bg-emerald-500  p-2 items-center justify-center w-full  flex text-white rounded ">
            Paid
          </Link>
        ) : (
          <Link className="bg-emerald-400 hover:bg-emerald-500  p-2 items-center justify-center w-full  flex text-white rounded ">
            Pay here
          </Link>
        )}

        <Link className=" border hover:bg-emerald-500 hover:text-white border-emerald-300 p-2.5 items-center justify-center  flex w-full text-sm text-emerald-300 rounded">
          Cancle appointment
        </Link>
      </div>
    </div>
  );
};

export default AppointmentCard;
