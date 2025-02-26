import { Check, CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { FcAbout } from "react-icons/fc";
import { AllDoctors } from "../../utils/constant";
import { Link } from "react-router-dom";

const AppointmentPage = () => {
  let DateArr = [
    { day: "Mon", Datytime: 10 },
    { day: "Tue", Datytime: 20 },
    { day: "Wed", Datytime: 23 },
    { day: "Thu", Datytime: 4 },
    { day: "Fri", Datytime: 10 },
    { day: "Sat", Datytime: 19 },
  ];

  let Times = [
    { time: "3:00 am" },
    { time: "5:00 am" },
    { time: "7:00 am" },
    { time: "8:00 am" },
    { time: "10:00 am" },
    { time: "12:00 am" },
    { time: "2:00 pm" },
    { time: "4:00 pm" },
    { time: "6:00 pm" },
  ];

  const [DayAct, setDayAct] = useState(false);

  return (
    <div className=" flex p-1 flex-col w-full overflow-hidden">
      <div className="flex lg:w-[70%] p-10  w-full mx-auto flex-col">
        {/* UserInfo */}
        <div className="md:p-10  flex md:flex-row flex-col gap-5  md:w-full   w-full ">
          <div className="imgBox w-full md:w-[300px] h-[250px]  rounded-md ">
            <img
              src={AllDoctors[0].img}
              alt="Not found"
              className="w-full h-full object-cover object-top  "
            />
          </div>

          {/* Names */}
          <div className="DocInfo flex border flex-col w-full  p-5 rounded-md gap-4  justify-center">
            <div className="text-emerald-400 ">
              <h1 className="font-semibold text-xl flex items-center gap-5">
                {AllDoctors[0].name}
                <span className=" text-emerald-600 ">
                  <CheckCircle size={15} />
                </span>
              </h1>

              <div className="text-slate-500 font-light items-center text-sm flex gap-3">
                <p>MBBS-{AllDoctors[0].specilizedIn}</p>
                <span className=" p-2 text-sm rounded-xl">2 years</span>
              </div>
            </div>
            {/* About */}
            <div className="flex flex-col flex-wrap gap-2">
              <h4 className="flex font-medium text-slate-700 items-center gap-5">
                About{" "}
                <span>
                  <FcAbout />
                </span>
              </h4>
              <p className="text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                provident facere aperiam a nobis, nesciunt itaque quas, ea neque
                cumque labore deleniti consequatur officia numquam quisquam
                beatae! Reiciendis saepe magnam nostrum numquam.
              </p>
            </div>
            {/* Appointment */}
            <div className="text-slate-700 font-medium">
              <p>Appointment fee ${50}</p>
            </div>
          </div>
        </div>

        {/* Booking Slots*/}
        <div className="lg:p-10  flex flex-col lg:items-end">
          <div className=" p-5 lg:w-[80%] flex flex-col gap-2 ">
            <div className="title">
              <h1 className="text-slate-500 font-medium text-xl">
                Booking Slots
              </h1>
            </div>
            <div className="DateBlock w-full  flex items-center flex-wrap">
              {DateArr.map(({ day, Datytime }) => (
                <div className="dateB p-2  w-fit cursor-pointer">
                  <p
                    className=" rounded-xl border hover:bg-emerald-300 hover:text-white text-sm flex flex-col justify-cente items-center p-2.5"
                    onClick={(e) => {
                      e.currentTarget.classList.add(
                        "bg-emerald-300",
                        "text-white"
                      );
                    }}
                  >
                    <span>{day}</span>
                    <span>{Datytime}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="TimeBlock w-full flex flex-wrap gap-3 flex-col">
              <h1 className="font-medium text-slate-500">Time</h1>
              <div className="flex flex-wrap">
                {Times.map(({ time }) => {
                  return (
                    <div className="dateB p-2  w-fit cursor-pointer">
                      <p
                        className=" rounded-3xl border hover:bg-emerald-300 hover:text-white text-sm flex flex-col justify-cente items-center p-2 ps-4 pr-4"
                        onClick={(e) => {
                          e.currentTarget.classList.add(
                            "bg-emerald-300",
                            "text-white"
                          );
                        }}
                      >
                        <span>{time}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bookingBtn w-full  p-5">
              <Link
                to={"/appointment"}
                className=" p-5 w-full md:w-fit rounded-xl ps-6 pr-6 text-sm bg-emerald-400 text-white hover:bg-emerald-300 "
              >
                Book an appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Recommandation Doctors*/}
        <div className="p-10  hidden  flex-col items-end">
          <div className="border p-5 w-[80%] "></div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
