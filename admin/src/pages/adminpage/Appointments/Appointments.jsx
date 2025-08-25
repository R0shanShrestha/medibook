import React, { useEffect, useContext } from "react";
import { AdminContextProvider } from "../../../context/AdminContext";
import { AppContextProvider } from "../../../context/AppContext";
import { DoctorContextProvider } from "../../../context/DoctorContext";

const Appointments = () => {
  const { settab } = useContext(AppContextProvider);
  const { doctorToken } = useContext(DoctorContextProvider);
  const {
    appointments,
    cancelAppointment,
    ageCalculator,
    getAppointments,
    slotDateFormat,
    adminToken,
  } = useContext(AdminContextProvider);

  useEffect(() => {
    if (adminToken) {
      settab("appointment");
      getAppointments();
    }
    if (doctorToken) {
      settab("appointment");
      getAppointments();
    }
  }, [adminToken, doctorToken]);

  return (
    <div className="flex flex-col w-full h-full p-2 overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:flex flex-col w-full overflow-auto">
        <div className="flex w-full p-5 pb-3 border-b-2">
          <h1 className="text-xl text-slate-800">All Appointments</h1>
        </div>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full table-auto border-separate border-spacing-y-2">
            <thead>
              <tr className="text-sm text-slate-700 text-center">
                <th className="p-3">#</th>
                <th className="p-3">Patient</th>
                <th className="p-3">Age</th>
                <th className="p-3">Date & Time</th>
                <th className="p-3">Doctor</th>
                <th className="p-3">Fees</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((doc, idx) => (
                <tr
                  key={doc._id}
                  className="text-center bg-white rounded-xl shadow hover:shadow-lg transition-all"
                >
                  <td className="p-3">{idx + 1}</td>
                  <td className="p-3 flex items-center gap-2 justify-center">
                    <img
                      src={doc.userData.image}
                      alt="Patient"
                      className="w-10 h-10 rounded-full object-top object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-slate-600 text-xs">Patient</span>
                      <span className="font-semibold text-slate-800">
                        {doc.userData.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-3">{ageCalculator(doc.userData.dob)}</td>
                  <td className="p-3">
                    {slotDateFormat(doc.slotDate)} || {doc.slotTime}
                  </td>
                  <td className="p-3 flex items-center gap-2 justify-center">
                    <img
                      src={doc.docData.image}
                      alt="Doctor"
                      className="w-10 h-10 rounded-full object-top object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-slate-600 text-xs">Doctor</span>
                      <span className="font-semibold text-slate-800">
                        {doc.docData.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-3">Rs. {doc.docData.fee}</td>
                  <td className="p-3">
                    {doc.iscompleted ? (
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                        Completed
                      </span>
                    ) : doc.cancelled ? (
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                        Cancelled
                      </span>
                    ) : (
                      <button
                        onClick={() => cancelAppointment(doc._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-xs"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4 mt-2">
        {appointments.map((doc, idx) => (
          <div
            key={doc._id}
            className="flex flex-col p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all animate-fadeIn"
          >
            <div className="flex justify-between gap-4">
              <div className="flex flex-col items-center w-1/2">
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-semibold mb-2">
                  Doctor
                </span>
                <img
                  src={doc.docData.image}
                  alt="Doctor"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="font-semibold text-slate-800 mt-1">
                  {doc.docData.name}
                </span>
                <span className="text-sm text-emerald-600">
                  Rs. {doc.docData.fee}
                </span>
              </div>

              <div className="flex flex-col items-center w-1/2">
                <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs font-semibold mb-2">
                  Patient
                </span>
                <img
                  src={doc.userData.image}
                  alt="Patient"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="font-semibold text-slate-800 mt-1">
                  {doc.userData.name}
                </span>
              </div>
            </div>

            <div className="mt-3 text-center text-sm text-slate-700 bg-slate-50 py-1 rounded">
              <span className="font-semibold">Date & Time: </span>
              {slotDateFormat(doc.slotDate)} || {doc.slotTime}
            </div>

            <div className="flex gap-2 mt-3">
              {doc.iscompleted ? (
                <span className="flex-1 text-center px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full font-semibold">
                  Completed
                </span>
              ) : doc.cancelled ? (
                <span className="flex-1 text-center px-2 py-1 bg-red-100 text-red-600 rounded-full font-semibold">
                  Cancelled
                </span>
              ) : (
                <button
                  onClick={() => cancelAppointment(doc._id)}
                  className="flex-1 px-2 py-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
