import React from "react";
import DoctorLists from "./DoctorLists";
import { TopDoctors } from "../../utils/constant";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Doctors = () => {
  return (
    <div className="justify-center flex md:p-10 md:my-20 overflow-hidden">
      <div className="w-full md:w-[90%] md:ps-10 md:pr-10 flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl md:text-3xl text-emerald-800">
              Top Doctor Recommendations
            </h1>
            <p className="text-gray-600 text-sm md:text-base hidden md:block">
              Browse our trusted doctors and schedule your appointments hassle-free.
            </p>
          </div>

          <div className="hidden md:flex">
            <Link
              to={"/doctors"}
              className="py-2.5 px-5 rounded-md bg-emerald-800 text-white text-sm font-bold hover:bg-emerald-900 transition-all duration-300"
            >
              More
            </Link>
          </div>
        </div>

        {/* Swiper AutoPlay */}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
        >
          {TopDoctors.map((doctor, idx) => (
            <SwiperSlide key={idx} style={{ width: "220px" }}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center p-4">
                <DoctorLists doctor={doctor} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Show More Button */}
        <div className="flex justify-center md:hidden">
          <Link
            to={"/doctors"}
            className="py-2 px-6 rounded-xl bg-emerald-800 text-white text-sm font-bold hover:bg-emerald-900 transition-all duration-300"
          >
            Show More
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Doctors;
