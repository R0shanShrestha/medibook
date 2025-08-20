import React from "react";

const SpecListBtn = ({ detail, custom, func }) => {
  return (
    <div className=" p-1 flex  text-sm">
      <div className="flex justify-between p-1 gap-2 w-full">
        <h1 className="font-semibold text-slate-500">
          {detail ? detail?.label : custom}
        </h1>
        <input
          type="radio"
          name="specilityDoc"
          className="p-2  "
          onChange={(e) => {
            func(detail?.label);
          }}
        />
      </div>
    </div>
  );
};

export default SpecListBtn;
