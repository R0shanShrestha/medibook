import React from "react";
import { CgClose } from "react-icons/cg";

const AppointmentList = ({
  sn,
  patientImg,
  patientName,
  doctorName,
  doctorImg,
  age,
  fees,
  datetime,
}) => {
  return (
    <tr className="text-[10px] md:text-sm text-center hover:border">
      <td className=" p-1 md:p-5  w-fit">{sn}</td>
      <td className=" p-1 md:p-5  mx-auto w-[80%] my-auto  flex items-center gap-3">
        <img
          src={patientImg}
          alt="not found"
          className="rounded-full md:w-[40px] w-[30%] h-[30px]  md:h-[40px] border "
        />
        <span>{patientName}</span>
      </td>
      <td className=" p-1 md:p-5  w-fit">{age}</td>
      <td className=" p-1 md:p-5  w-fit">{datetime}</td>
      <td className=" p-1 md:p-5  mx-auto w-[80%] my-auto  flex items-center gap-3">
        <img
          src={doctorImg}
          alt="not found"
          className="rounded-full md:w-[40px] w-[30%] h-[30px]  md:h-[40px] border "
        />
        <span>{doctorName}</span>
      </td>
      <td className=" p-1 md:p-5  w-fit">{fees}</td>
    </tr>
  );
};

export default AppointmentList;
