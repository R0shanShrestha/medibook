import React from "react";
import { SwiperSlide } from "swiper/react";

const IconGen = ({ img, name, altname }) => {
  return (
    <div className=" flex max-w-[110px] flex-col gap-2  justify-center items-center cursor-pointer">
      <div className="img min-w-[100px] max-w-[100px] shadow h-[100px] overflow-hidden  rounded-full">
        <img src={img} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="info w-full text-center">
        <p className="text-[12px]">{altname}</p>
      </div>
    </div>
  );
};

export default IconGen;
