import React from "react";

const SpecListBtn = ({ detail, func }) => {
  return (
    <div className=" p-1 flex ">
      <div className="flex justify-between p-1 gap-2 w-full">
        <h1 className="font-semibold text-emerald-50">{detail.label}</h1>
        <input
          type="radio"
          name="specilityDoc"
          className="p-2  "
          onChange={(e) => {
            func(detail.label);
          }}
        />
      </div>
    </div>
  );
};

export default SpecListBtn;
