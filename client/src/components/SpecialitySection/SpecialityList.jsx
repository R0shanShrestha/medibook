import React from "react";

const SpecialityList = ({ data }) => {
  let { img, label } = data;
  return (
    <div className=" p-2 flex flex-col items-center  hover:shadow-md hover:rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer gap-2 ">
      <img
        src={img}
        alt="Not found"
        className="w-[50px] rounded-full h-[50px] object-cover  hover:shadow-md"
      />
      <p className="text-sm">{label}</p>
    </div>
  );
};

export default SpecialityList;
