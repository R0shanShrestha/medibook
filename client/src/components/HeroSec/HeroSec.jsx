import { images } from "../../utils/constant";
import { Link } from "react-router-dom";

const HeroSec = () => {
  return (
    <div className=" w-full  flex p-10  md:my-20 justify-center lg:justify-evenly items-center flex-col lg:flex-row overflow-hidden">
      <div className="leftSide w-[400px] lg:hidden ">
        <img
          src={images[2].hero}
          className=" w-full h-full object-cover  rounded-xl shadow-sm"
          alt="not found"
        />
      </div>
      <div className="rideSide  items-center lg:items-baseline  flex flex-col mt-3 md:mt-0  md:p-5 gap-5">
        <div className="infos text-center md:text-left flex flex-col gap-3 w-fit">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-gray-700">
            Book Your <span className="text-emerald-600">Doctor,</span>
            <br />
            <span className="text-emerald-600">Fast & Easy!</span>
          </h1>
          <p className="text-gray-500 font-medium text-base md:text-lg max-w-md">
            Connecting you with trusted doctors for quick & hassle-free
            appointments.
          </p>
        </div>

        <Link
          to={"#"}
          className=" p-3 px-5 rounded-md bg-emerald-500 text-slate-50 font-bold text-sm w-fit hover:bg-emerald-600"
        >
          Quick Appointment
        </Link>
      </div>
      <div className="leftSide lg:w-[400px]  xl:w-[600px]  lg:flex hidden ">
        <img
          src={images[2].hero}
          className=" w-full h-full object-cover  rounded-xl shadow-sm"
          alt="not found"
        />
      </div>
    </div>
  );
};

export default HeroSec;
