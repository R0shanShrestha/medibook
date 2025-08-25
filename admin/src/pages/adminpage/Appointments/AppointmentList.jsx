import React from "react";
import { CgClose } from "react-icons/cg";

const AppointmentList = ({
  iscompleted,
  sn,
  patientImg,
  patientName,
  doctorName,
  doctorImg,
  id,
  age,
  fees,
  datetime,
  cancelAppointment,
  isCancel,
}) => {
  return (
    <tr className="text-[10px] md:text-sm text-center hover:border">
      <td className=" p-1 md:p-5  w-fit">{sn}</td>
      <td className=" p-1 md:p-5  mx-auto w-[80%] my-auto  flex items-center gap-3">
        <img
          src={patientImg}
          alt="not found"
          className="rounded-full md:w-[40px] w-[30%] h-[30px] object-cover md:h-[40px] border "
        />
        <span>{patientName}</span>
      </td>
      <td className=" p-1 md:p-5  w-fit">{String(age)}</td>
      <td className=" p-1 md:p-5 text-left  w-fit">{datetime}</td>
      <td className=" p-1 md:p-5  mx-auto w-[80%] my-auto  flex items-center gap-3">
        <img
          src={doctorImg}
          alt="not found"
          className="rounded-full md:w-[40px] w-[30%] h-[30px] object-cover  md:h-[40px] border "
        />
        <span>{doctorName}</span>
      </td>
      <td className=" p-1 md:p-5  w-fit">{fees}</td>
      <td
        onClick={() => {
          cancelAppointment(id);
        }}
        className=" p-1 md:p-5 cursor-pointer w-fit"
      >
        {iscompleted ? (
          <p className="  font-semibold rounded text-green-500 px-2">
            Completed
          </p>
        ) : isCancel ? (
          <p className="text-red-500">Cancelled</p>
        ) : (
          <span className=" p-2 rounded-full bg-emerald-800 text-white">X</span>
        )}
      </td>
    </tr>
  );
};

export default AppointmentList;
