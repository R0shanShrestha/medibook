import React from "react";
import { images } from "../../utils/constant";
import { BsArrowRight } from "react-icons/bs";
const Herosection = () => {
  return (
    <div className="flex pt-28 ps-20 pr-20 pb-28  items-center justify-center flex-col lg:flex-row lg:pt-28">
      <div className="w-[100%] lg:hidden">
        <img
          src={images[2].hero}
          alt=""
          className=" object-contain w-full h-full"
        />
      </div>
      <div className="box1 flex flex-col gap-2  lg:p-10 ">
        <div className="flex flex-col gap-1 ">
          <h1 className=" text-6xl lg:text-6xl xl:text-7xl font-extrabold text-emerald-500">
            Book Appointment{" "}
          </h1>
          <h1 className=" text-4xl   font-medium text-emerald-400">
            With Trusted Doctors
          </h1>
        </div>
        <div>
          <p className="text-[15px] lg:text-md font-light text-emerald-500">
            Simply browse through our extensive list of trusted doctors.
            schedule your oppointment hossif-free.
          </p>
        </div>
        <div className="p-2">
          <button
            className=" text-white flex justify-center items-center gap-2
             lg:w-[70%] xl:w-[50%]  p-3 rounded-xl"
            style={{ background: "var(--btn-color)" }}
          >
            Book appointment <BsArrowRight size={18} />
          </button>
        </div>
      </div>
      <div className="hidden lg:block  lg:w-[90%] xl:w-[50%] ">
        <img
          src={images[2].hero}
          alt=""
          className=" object-cover w-full h-full "
        />
      </div>
    </div>
  );
};

export default Herosection;
