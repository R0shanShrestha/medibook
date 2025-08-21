import React from "react";

const PatientCard = ({ patient }) => {
  let { img, name, age } = patient;
  return (
    <div className=" h-fit overflow-hidden min-w-[200px] max-w-[200px] p-2 flex flex-col gap-2 cursor-pointer rounded-xl hover:shadow-xl ">
      <img
        src={img}
        alt="Not found"
        className="min-w-[200px] h-[130px] md:h-[200px] object-cover object-top  rounded-xl"
      />
      <div className="text-sm flex flex-col ">
        <div className="mt-1 ">
          <p className="font-semibold text-slate-800">{name}</p>
          <p className="text-slate-700">Age: {age != undefined ? age : "18"}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
