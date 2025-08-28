import React from "react";
import { useContext } from "react";
import { AdminContextProvider } from "../../../context/AdminContext";
import { useState } from "react";
import Loading from "../../../../../client/src/components/Loading/Loading";

const AppointmentMobile = ({ doc }) => {
  const { slotDateFormat, cancelAppointment } =
    useContext(AdminContextProvider);
  const [insideLoading, setinsideLoading] = useState(false);

  return (
    <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all animate-fadeIn">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col items-center w-1/2">
          <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-semibold mb-2">
            Doctor
          </span>
          <img
            src={doc.docId?.image}
            alt="Doctor"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="font-semibold text-slate-800 mt-1">
            {doc.docId?.name}
          </span>
          <span className="text-sm text-emerald-600">Rs. {doc.docId?.fee}</span>
        </div>

        <div className="flex flex-col items-center w-1/2">
          <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs font-semibold mb-2">
            Patient
          </span>
          <img
            src={doc.userId?.image}
            alt="Patient"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="font-semibold text-slate-800 mt-1">
            {doc.userId?.name}
          </span>
        </div>
      </div>

      <div className="mt-3 text-center text-sm text-slate-700 bg-slate-50 py-1 rounded">
        <span className="font-semibold">Date & Time: </span>
        {slotDateFormat(doc.slotDate)} || {doc.slotTime}
      </div>

      <div className="flex gap-2 mt-3">
        {insideLoading ? (
          <div className="w-full flex items-center justify-center">
            <Loading type={1} />
          </div>
        ) : doc.iscompleted ? (
          <span className="flex-1 text-center px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full font-semibold">
            Completed
          </span>
        ) : doc.cancelled ? (
          <span className="flex-1 text-center px-2 py-1 bg-red-100 text-red-600 rounded-full font-semibold">
            Cancelled
          </span>
        ) : (
          <button
            onClick={() => cancelAppointment(doc._id, setinsideLoading)}
            className="flex-1 px-2 py-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentMobile;
