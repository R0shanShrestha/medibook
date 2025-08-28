import React from "react";
import { images } from "../../utils/constant";

const Loading = ({ type }) => {
  return type == 1 ? (
    <div className="w-full  max-w-[60px] h-[60px] overflow-hidden   items-center justify-center flex">
      <img
        src={images.loading}
        alt="Loading ..."
        className="  w-full scale-200  object-cover "
      />
    </div>
  ) : (
    <div className="w-full  items-center justify-center flex">
      <img
        src={images.loading2}
        alt="Loading ..."
        className="w-full max-w-[400px] h-full  object-cover "
      />
    </div>
  );
};

export default Loading;
