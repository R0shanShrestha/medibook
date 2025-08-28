import React from "react";
import { CgClose } from "react-icons/cg";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AdminContextProvider } from "../../../context/AdminContext";
import { toast } from "react-toastify";
import { images } from "../../../constant";
import Loading from "../../../../../client/src/components/Loading/Loading";

const AppointmentList = ({ doc }) => {
  const [insideLoading, setinsideLoading] = useState(false);
  const { ageCalculator, slotDateFormat, cancelAppointment } =
    useContext(AdminContextProvider);

  return (
    <tr
      // key={doc._id}
      className="text-center bg-white rounded-xl shadow hover:shadow-lg transition-all"
    >
      <td className="p-3">{1}</td>
      <td className="p-3 flex items-center gap-2 justify-center">
        <img
          src={doc.userId?.image}
          alt="Patient"
          className="w-10 h-10 rounded-full object-top object-cover"
        />
        <div className="flex flex-col">
          <span className="text-slate-600 text-xs">Patient</span>
          <span className="font-semibold text-slate-800">
            {doc.userId?.name}
          </span>
        </div>
      </td>
      <td className="p-3">{ageCalculator(doc.userId?.dob)}</td>
      <td className="p-3">
        {slotDateFormat(doc.slotDate)} || {doc.slotTime}
      </td>
      <td className="p-3 flex items-center gap-2 justify-center">
        <img
          src={doc?.docId?.image}
          alt="Doctor"
          className="w-10 h-10 rounded-full object-top object-cover"
        />
        <div className="flex flex-col">
          <span className="text-slate-600 text-xs">Doctor</span>
          <span className="font-semibold text-slate-800">{doc.docId?.name}</span>
        </div>
      </td>
      <td className="p-3">Rs. {doc.docId?.fee}</td>
      <td className="p-3">
        {insideLoading ? (
          <Loading type={1} />
        ) : doc.iscompleted ? (
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
            Completed
          </span>
        ) : doc.cancelled ? (
          <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
            Cancelled
          </span>
        ) : (
          <button
            onClick={() => cancelAppointment(doc._id, setinsideLoading)}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-xs"
          >
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default AppointmentList;
