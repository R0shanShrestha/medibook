import React from "react";
import { images } from "../../utils/constant";

const Banner = () => {
  return (
    <div className=" mt-10 mb-10  md:mr-10 md:ml-10 flex flex-col gap-6 lg:ml-28 lg:mr-28  max-h-[500px] overflow-hidden cursor-pointer">
      <div className=" p-3 ">
        <img
          src={images[3].adv}
          alt=""
          className="object-contain w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
