import React from "react";
import IconGen from "./IconGen";
import { speciality } from "../utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const Section = () => {
  return (
    <div className="p-5 pt-28 pb-28 md:mr-10 md:ml-10 flex flex-col gap-6 lg:ml-28 lg:mr-28">
      <div className="flex flex-col w-full gap-3">
        <h1 className="font-bold text-emerald-800 text-3xl">
          Find by Speciality
        </h1>
        <p className="text-[12px] text-emerald-700 ">
          Simply browse through our extensive list of trusted doctors. schedule
          your appointment hassle-free
        </p>
      </div>
      <div className=" w-full flex items-center justify-center gap-5  sm:ps-10">
        <Swiper
          className=" mySwiperjs "
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {speciality?.map(({ img, label }, idx) => (
            <SwiperSlide className=" " key={idx}>
              <IconGen img={img} label={label} altname={label} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section;
