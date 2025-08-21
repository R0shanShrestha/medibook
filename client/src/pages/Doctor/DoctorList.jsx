import React from "react";
import DoctorLists from "../../components/Doctors/DocCard";

const DoctorList = ({ selectedTab, Data }) => {
  return (
    <>
      <div className="text-2xl font-semibold text-emerald-400 flex justify-between ">
        <h1>{selectedTab}</h1>
        {/* <input
          type="text"
          className="border hidden md:flex p-2 outline-none placeholder:text-emerald-200 border-emerald-200 rounded-md w-[250px] text-sm"
          placeholder="Search"
        /> */}
      </div>
      <div className="doclist flex  flex-wrap gap-5  mt-3 h-[600px] overflow-hidden  overflow-y-scroll">
        {Data.map((doct, id) => {
          return <DoctorLists doctor={doct} key={id} />;
        })}
      </div>
    </>
  );
};

export default DoctorList;
