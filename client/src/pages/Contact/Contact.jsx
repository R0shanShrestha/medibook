import React from "react";
import { speciality } from "../../utils/constant";
const Contact = () => {
  return (
    <div className="min-h-screen bg-[#e6f7f4] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Contact Support Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Contact Support
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-medium mb-1">
                Help Line Support ( Sun to Sat ) 24/7
              </h3>
              <a
                href="tel:9763299634"
                className="text-red-500 hover:text-red-600 flex items-center gap-2"
              >
                9763299634 <span className="text-lg">→</span>
              </a>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-medium mb-1">Email Support</h3>
              <a
                href="mailto:commail@gmail.com"
                className="text-red-500 hover:text-red-600 flex items-center gap-2"
              >
                commail@gmail.com <span className="text-lg">→</span>
              </a>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-medium mb-1">Location</h3>
              <p className="text-red-500">fake Location Kathmandu</p>
            </div>
          </div>
        </div>

        {/* Appointment Form Section */}
        <div className="relative">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-medium text-[#4acfb7] mb-6">
              Appointment Booking Form
            </h2>

            <form className="space-y-4 flex flex-col">
              <label
                htmlFor="BookDate
              "
                className="flex flex-col gap-3"
              >
                <span className="font-semibold ps-3 text-slate-600">
                  Patient Name{" "}
                </span>
                <input
                  placeholder="Patient Name"
                  className="border-gray-200 p-3.5 border rounded-md outline-none focus:border-[#4acfb7]"
                />
              </label>
              <label
                htmlFor="BookDate
              "
                className="flex flex-col gap-3"
              >
                <span className="font-semibold ps-3 text-slate-600">
                  Patient Number{" "}
                </span>
                <input
                  placeholder="Patient Number"
                  type="tel"
                  className="border-gray-200 p-3.5 border rounded-md outline-none focus:border-[#4acfb7]"
                />
              </label>

              <label
                htmlFor="BookDate
              "
                className="flex flex-col gap-3"
              >
                <span className="font-semibold ps-3 text-slate-600">
                  Booking Date
                </span>
                <input
                  id="BookDate"
                  type="date"
                  className="border-gray-200 p-3.5 border rounded-md outline-none focus:border-[#4acfb7] outline-none"
                />
              </label>
              <label
                htmlFor="BookDate
              "
                className="flex flex-col gap-3"
              >
                <span className="font-semibold ps-3 text-slate-600">
                  Select Specialized Doctor
                </span>
                <select
                  id="speci"
                  className="border p-3.5 rounded-md outline-none"
                >
                  {speciality?.map(({ label }) => {
                    return <option value="label">{label}</option>;
                  })}
                </select>
              </label>

              <button className="w-full p-3 rounded-md font-semibold bg-[#4acfb7] hover:bg-[#3dbfa7] text-white">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
