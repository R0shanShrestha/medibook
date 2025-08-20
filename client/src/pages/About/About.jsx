import React from "react";
import DoctorAbout from "../../assets/Doctors/DoctorAbout.jpg";

const About = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="flex w-full md:w-[70%] md:p-10 mx-auto flex-col flex-wrap">
        <div className="flex flex-col w-full justify-center items-center">
          
          {/* Page Title */}
          <div className="title mt-5 mb-5 md:mb-20 text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-emerald-800">
              About <span className="font-light">MediBook</span>
            </h2>
          </div>

          {/* App Description */}
          <div className="descAbout flex lg:flex-row flex-col w-full p-5 gap-10 justify-between">
            <div className="lg:min-w-[200px] h-[400px] border rounded-lg overflow-hidden">
              <img
                src={DoctorAbout}
                alt="Doctor Illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap">
              <p className="text-emerald-800 text-justify text-sm md:text-base">
                <span className="font-bold">MediBook</span> is your smart
                healthcare companion. Find trusted doctors, book appointments
                instantly, and manage your health records seamlessly.
                <br /><br />
                Designed to save time and simplify healthcare access, MediBook
                connects you with professionals when you need them.
                <br /><br />
                <span className="font-bold">Our Vision:</span> Make healthcare
                fast, reliable, and convenient for everyone.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="whySec flex-col w-full mt-8 flex justify-center p-2">
            <div className="titleWhy text-emerald-800 text-xl md:text-2xl mb-4 text-center">
              <h2 className="font-light">
                Key <span className="font-bold">Features</span>
              </h2>
            </div>

            <div className="flex w-full flex-col lg:flex-row justify-center gap-4">
              
              <div className="bg-white border rounded-xl shadow-md lg:w-[28%] flex flex-col items-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 m-2 p-3">
                <h3 className="uppercase font-extrabold text-sm md:text-base text-emerald-800">
                  Find Doctors
                </h3>
                <p className="text-emerald-700 text-xs md:text-sm text-center mt-1">
                  Browse verified doctors by specialty and availability.
                </p>
              </div>

              <div className="bg-white border rounded-xl shadow-md lg:w-[28%] flex flex-col items-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 m-2 p-3">
                <h3 className="uppercase font-extrabold text-sm md:text-base text-emerald-800">
                  Book Appointments
                </h3>
                <p className="text-emerald-700 text-xs md:text-sm text-center mt-1">
                  Schedule appointments instantly and get reminders directly in the app.
                </p>
              </div>

              <div className="bg-white border rounded-xl shadow-md lg:w-[28%] flex flex-col items-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 m-2 p-3">
                <h3 className="uppercase font-extrabold text-sm md:text-base text-emerald-800">
                  Health Tracking
                </h3>
                <p className="text-emerald-700 text-xs md:text-sm text-center mt-1">
                  Keep track of appointments, prescriptions, and medical records in one place.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
