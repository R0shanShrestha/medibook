import React from "react";

const SpecialityList = ({ data }) => {
  let { img, label } = data;
  return (
    <div className=" p-2 flex flex-col items-center cursor-pointer gap-2">
      <img
        src={img}
        alt="Not found"
        className="w-[100px] rounded-full h-[100px] object-cover border hover:shadow-md"
      />
      <p className="text-sm">{label}</p>
    </div>
  );
};

export default SpecialityList;
