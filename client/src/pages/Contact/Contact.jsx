import React from "react";
import { speciality } from "../../utils/constant";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7f4] to-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-start">

        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl font-bold text-emerald-700">Contact Support</h2>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4">
              <Phone className="text-emerald-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-gray-700">Help Line (24/7)</h3>
                <a href="tel:9763299634" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  +977 9763299634
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4">
              <Mail className="text-emerald-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-gray-700">Email Support</h3>
                <a href="mailto:commail@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  commail@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4">
              <MapPin className="text-emerald-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-gray-700">Location</h3>
                <p className="text-emerald-600 font-medium">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="bg-white p-8 rounded-3xl shadow-xl w-full hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-6">
              Book an Appointment
            </h2>

            <form className="space-y-4 flex flex-col w-full">
              <input
                type="text"
                placeholder="Patient Name"
                className="border border-gray-200 p-3 rounded-xl outline-none focus:border-emerald-500"
              />
              <input
                type="tel"
                placeholder="Patient Number"
                className="border border-gray-200 p-3 rounded-xl outline-none focus:border-emerald-500"
              />
              <input
                type="date"
                className="border border-gray-200 p-3 rounded-xl outline-none focus:border-emerald-500"
              />
              <select className="border border-gray-200 p-3 rounded-xl outline-none focus:border-emerald-500">
                <option value="">All Doctors</option>
                {speciality?.map(({ label }, idx) => (
                  <option key={idx} value={label}>{label}</option>
                ))}
              </select>

              <button className="w-full p-3 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
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
