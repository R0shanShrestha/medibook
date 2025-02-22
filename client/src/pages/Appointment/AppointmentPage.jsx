import { Check, CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { FcAbout } from "react-icons/fc";

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
    <div className=" flex p-1 flex-col overflow-hidden">
      <div className="flex w-[70%] p-10  mx-auto flex-col">
        {/* UserInfo */}
        <div className="p-10  flex gap-5">
          <div className="imgBox w-[300px] h-[250px]  rounded-md overflow-hidden">
            <img
              src="#"
              alt="Not found"
              className="w-full h-full object-cover object-top border "
            />
          </div>
          <div className="DocInfo flex border flex-col  w-full p-5 rounded-md gap-4  justify-center">
            {/* Names */}
            <div className="text-emerald-400">
              <h1 className="font-semibold text-xl flex items-center gap-5">
                {"Name"}
                <span className=" text-emerald-600 ">
                  <CheckCircle size={15} />
                </span>
              </h1>

              <div className="text-slate-500 font-light items-center text-sm flex gap-3">
                <p>MBBS-General Physican</p>
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
        <div className="p-10  flex flex-col items-end">
          <div className=" p-5 w-[80%] flex flex-col gap-2 ">
            <div className="title">
              <h1 className="text-slate-500 font-medium text-xl">
                Booking Slots
              </h1>
            </div>
            <div className="DateBlock w-full  flex items-center flex-wrap">
              {DateArr.map(({ day, Datytime }) => (
                <div className="dateB p-2  w-fit cursor-pointer">
                  <p
                    className=" rounded-xl hover:bg-emerald-300 hover:text-white text-sm flex flex-col justify-cente items-center p-2.5"
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

            <div className="TimeBlock w-full flex flex-wrap">
              {Times.map(({ time }) => {
                return (
                  <div className="dateB p-2  w-fit cursor-pointer">
                    <p
                      className=" rounded-3xl hover:bg-emerald-300 hover:text-white text-sm flex flex-col justify-cente items-center p-2 ps-4 pr-4"
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
            <div className="bookingBtn w-full  p-5">
              <button className=" p-3 rounded-xl ps-6 pr-6 text-sm bg-emerald-400 text-white hover:bg-emerald-300 ">
                Book an appointment
              </button>
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
