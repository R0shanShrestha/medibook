import React from "react";
import { AllDoctors } from "../../utils/constant";
import PatientCard from "./PatientCard";

const Patient = () => {
  return (
    <div className="flex flex-col w-full h-[100%]   p-2  overflow-hidden overflow-y-scroll no-scroller ">
      <div className="flex w-full p-5 pb-3 border-b-2 ">
        <h1 className="text-xl text-slate-800">All Patients</h1>
      </div>
      {/* All doctors lists */}
      <div className="doctors flex flex-wrap gap-5 h-[30%] md:h-[85%] p-2  overflow-hidden overflow-y-scroll no-scroller">
        {AllDoctors.map((doct) => (
          <PatientCard patient={doct} />
        ))}
      </div>
    </div>
  );
};

export default Patient;
