import React from "react";
import DoctorAbout from "../../assets/Doctors/DoctorAbout.jpg";

const About = () => {
  return (
    <div className=" flex flex-col p-2  ">
      <div className="flex w-full h-screen md:w-[70%]   md:p-10 mx-auto flex-col flex-wrap">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="title mt-5 mb-5 md:mb-20">
            <h2 className="text-2xl lg:text-3xl font-semibold text-emerald-400">
              <span className="font-light">About</span> Us
            </h2>
          </div>
          {/* About this Site and DOc */}

          <div className="descAbout flex lg:flex-row flex-col w-full p-5   gap-10 justify-between">
            <div className="lg:min-w-[200px]  h-[400px] border">
              <img
                src={DoctorAbout}
                alt="Not found"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap">
              <p className="text-emerald-500 text-justify">
                Welcome to Prescripto, your trusted partner in managing your
                healthcare needs conveniently and efficiently. At Prescripto, we
                understand the challenges individuals face when it comes to
                scheduling doctor appointments and managing their health
                records. <br /> <br />
                Prescripto is committed to excellence in healthcare technology.
                We continuously strive to enhance our platform, integrating the
                latest advancements to improve user experience and deliver
                superior service. Whether you're booking your first appointment
                or managing ongoing care, Prescripto is here to support you
                every step of the way.
                <br /> <br />
                <span className="font-bold">Our Vision</span>
                <br />
                <br />
                Our vision at Prescripto is to create a seamless healthcare
                experience for every user. We aim to bridge the gap between
                patients and healthcare providers, making it easier for you to
                access the care you need, when you need it.
              </p>
            </div>
          </div>
          {/* WHy to choose us */}
          <div className="whySec lg:h-[300px] flex-col w-full mt-10 flex justify-center  p-4  ">
            <div className="titleWhy text-emerald-400 text-xl md:text-3xl ">
              <h2 className="font-light">
                Why <span className="font-bold">Choose Us</span>
              </h2>
            </div>
            <div className="flex w-full h-full mt-10 justify-center flex-col lg:flex-row">
              <div className="border lg:w-[30%] justify-center flex items-center flex-col ">
                <div className=" p-4 flex flex-col gap-5">
                  <h3 className="uppercase font-semibold text-xl text-emerald-300">
                    Efficiency:
                  </h3>
                  <p className="text-emerald-200">
                    Streamlined Appointment Scheduling That fits into your busy
                    Lifestyle.
                  </p>
                </div>
              </div>
              <div className="border lg:w-[30%] justify-center flex items-center flex-col ">
                <div className=" p-4 flex flex-col gap-5">
                  <h3 className="uppercase font-semibold text-xl text-emerald-300">
                    Convenience:
                  </h3>
                  <p className="text-emerald-200">
                    Access To A Network Of Trusted Healthcare Professionals In
                    Your Area.
                  </p>
                </div>
              </div>
              <div className="border lg:w-[30%] justify-center flex items-center flex-col ">
                <div className=" p-4 flex flex-col gap-5">
                  <h3 className=" uppercase font-semibold text-xl text-emerald-300">
                    Personalization:
                  </h3>
                  <p className="text-emerald-200">
                    Tailored Recommendations and Reminders To Help You Stay On
                    Top Of Your Health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
