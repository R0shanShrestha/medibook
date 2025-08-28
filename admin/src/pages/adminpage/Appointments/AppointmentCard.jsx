import React from "react";
import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { AdminContextProvider } from "../../../context/AdminContext";
import { useState } from "react";
import Loading from "../../../components/Loading";

const AppointmentCard = ({ data, slotDateFormat }) => {
  const [insideLoading, setinsideLoading] = useState(false);
  const { cancelAppointment, ageCalculator } = useContext(AdminContextProvider);

  return (
    <>
      <div className="hidden lg:flex bg-white rounded-xl shadow hover:shadow-lg transition-all p-4  flex-col md:flex-row items-center gap-4 text-center">
        <div className="flex-1">{1}</div>

        <div className="flex-1 flex items-center gap-2 justify-center">
          <img
            src={data.userId?.image}
            alt="Patient"
            className="w-10 h-10 rounded-full object-top object-cover"
          />
          <div className="flex flex-col">
            <span className="text-slate-600 text-xs">Patient</span>
            <span className="font-semibold text-slate-800">
              {data.userId?.name}
            </span>
          </div>
        </div>

        <div className="flex-1">{ageCalculator(data.userId?.dob)}</div>

        <div className="flex-1">
          {slotDateFormat(data.slotDate)} || {data.slotTime}
        </div>

        <div className="flex-1 flex items-center gap-2 justify-center">
          <img
            src={data?.docId?.image}
            alt="Doctor"
            className="w-10 h-10 rounded-full object-top object-cover"
          />
          <div className="flex flex-col">
            <span className="text-slate-600 text-xs">Doctor</span>
            <span className="font-semibold text-slate-800">
              {data.docId?.name}
            </span>
          </div>
        </div>

        <div className="flex-1">Rs. {data.docId?.fee}</div>

        <div className="flex-1">
          {insideLoading ? (
            <Loading type={1} />
          ) : data.iscompleted ? (
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
              Completed
            </span>
          ) : data.cancelled ? (
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
              Cancelled
            </span>
          ) : (
            <button
              onClick={() => cancelAppointment(data._id, setinsideLoading)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-xs"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="lg:hidden bg-white shadow-lg rounded-xl p-4 flex flex-col gap-3 w-full max-w-md mx-auto hover:shadow-xl transition">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Appointment #1</span>
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
            {data.iscompleted
              ? "Completed"
              : data.cancelled
              ? "Cancelled"
              : "Upcoming"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={data.userId?.image}
            alt="Patient"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold">{data.userId?.name}</p>
            <p className="text-xs text-gray-500">
              {ageCalculator(data.userId?.dob)} yrs
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">
              {slotDateFormat(data.slotDate)}
            </p>
            <p className="text-xs text-gray-500">{data.slotTime}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <img
            src={data.docId?.image}
            alt="Doctor"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold">{data.docId?.name}</p>
            <p className="text-xs text-gray-500">{data.docId?.specializedIn}</p>
          </div>
          <div className="text-right font-semibold">Rs. {data.docId?.fee}</div>
        </div>

        {!data.iscompleted && !data.cancelled && (
          <button
            onClick={() => cancelAppointment(data._id, setinsideLoading)}
            className="w-full mt-2 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Cancel Appointment
          </button>
        )}
      </div>
    </>
  );
};

export default AppointmentCard;
