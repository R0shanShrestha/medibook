import React, { useContext } from "react";
import IconGen from "../../components/IconGen";
import { TopDoctors } from "../../utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Card from "../../components/Card";
import { DoctorContextProvider } from "../../context/doctorContext";
const TopDoctorSection = () => {
  const { Doctors } = useContext(DoctorContextProvider);

  return (
    <div className="p-5 md:mr-10 md:ml-10 flex flex-col gap-6 lg:ml-28 lg:mr-28">
      <div className="flex justify-between items-center">
        <div className="subhead">
          <h1 className="text-3xl font-bold text-emerald-800 ">
            Top Doctors to Book{" "}
          </h1>
          <p className="text-[12px] text-emerald-700">
            Simply browse through our extensive list of trusted doctors.
            schedule your appointment hassle-free
          </p>
        </div>
        <div className="hidden md:flex justify-center">
          <button className="sm:p-2  border-emerald-600 text-emerald-900 font-semibold cursor-pointer rounded-md border hover:border-emerald-400 hover:text-emerald-600">
            Show All
          </button>
        </div>
      </div>

      <div className="authors gap-2 flex justify-around p-2 ">
        <Swiper
          className="mySwiperjs"
          slidesPerView={2}
          spaceBetween={30}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {TopDoctors?.map(({ name, specilizedIn, img, status }, idx) => (
            <SwiperSlide key={idx}>
              <Card
                name={name}
                label={specilizedIn}
                img={img}
                status={status}
                key={idx}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex md:hidden justify-center">
        <button className="p-2  border-emerald-600 pb-10 text-emerald-900 font-semibold cursor-pointer rounded-md border hover:border-emerald-400 hover:text-emerald-600">
          Show All
        </button>
      </div>
    </div>
  );
};

export default TopDoctorSection;
