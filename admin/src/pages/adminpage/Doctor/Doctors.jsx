import React from "react";
import DoctorCard from "./DoctorCard";
import { useContext } from "react";
import { AdminContextProvider } from "../../../context/AdminContext";
import { useEffect } from "react";
// import { AllDoctors } from "../../utils/constant";

const Doctors = () => {
  const { getAllDoctors, adminToken, Doctors, changeAvailability } =
    useContext(AdminContextProvider);

  useEffect(() => {
    if (adminToken) {
      getAllDoctors();
    }
  }, [adminToken]);
  return (
    <div className="flex flex-col w-full h-[100%]   p-2  overflow-hidden overflow-y-scroll no-scroller ">
      <div className="flex w-full p-5 pb-3 border-b-2 ">
        <h1 className="text-xl text-slate-800">All Doctors</h1>
      </div>
      {/* All doctors lists */}
      <div className=" flex flex-wrap gap-5  h-[30%] md:h-[85%] p-2 border  overflow-hidden overflow-y-scroll no-scroller">
        {Doctors.map((doct) => (
          <DoctorCard doctor={doct} changeAvailability={changeAvailability} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
