import React from "react";
import DoctorCard from "./DoctorCard";
import { AllDoctors } from "../../utils/constant";

const Doctors = () => {
  return (
    <div className="flex flex-col w-full h-[100%]   p-2  overflow-hidden overflow-y-scroll no-scroller ">
      <div className="flex w-full p-5 pb-3 border-b-2 ">
        <h1 className="text-xl text-slate-800">All Doctors</h1>
      </div>
      {/* All doctors lists */}
      <div className="doctors flex flex-wrap gap-5 h-[30%] md:h-[85%] p-2  overflow-hidden overflow-y-scroll no-scroller">
        {AllDoctors.map((doct) => (
          <DoctorCard doctor={doct} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
