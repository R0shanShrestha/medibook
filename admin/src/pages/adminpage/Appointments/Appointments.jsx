import React, { useEffect, useContext } from "react";
import { AdminContextProvider } from "../../../context/AdminContext";
import { AppContextProvider } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import AppointmentList from "./AppointmentList";
import AppointmentMobile from "./AppointmentMobile";
import Loading from "../../../components/Loading";
const Appointments = () => {
  const { settab } = useContext(AppContextProvider);
  const nav = useNavigate();
  const { appointments, getAppointments, adminToken, isLoading } =
    useContext(AdminContextProvider);

  useEffect(() => {
    if (!adminToken) {
      nav("/login");
    }
  }, [adminToken]);

  useEffect(() => {
    if (adminToken) {
      settab("appointment");
      getAppointments();
    }
  }, [adminToken]);

  return adminToken ? (
    <div className="flex flex-col w-full h-full p-2 bg-white overflow-hidden">
      {/* Desktop Table */}
      <div className=" md:flex flex-col w-full overflow-auto">
        <div className="flex w-full p-5 pb-3 border-b-2">
          <h1 className="text-xl text-slate-800">All Appointments</h1>
        </div>
        <div className="mt-2 md:block hidden overflow-x-auto">
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
              {isLoading ? (
                <tr>
                  <td colSpan={7}>
                    <Loading />
                  </td>
                </tr>
              ) : (
                appointments &&
                appointments.map((doc, idx) => (
                  <AppointmentList doc={doc} key={idx} />
                ))
              )}
            </tbody>
          </table>
          {appointments == "" && (
            <p className="mt-10 text-center text-gray-500">
              No appointments Booked Yet
            </p>
          )}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4 mt-2">
        {appointments &&
          appointments.map((doc, idx) => (
            <AppointmentMobile doc={doc} key={idx} />
          ))}
      </div>
    </div>
  ) : (
    <div className="w-full text-center items-center ">Login Required</div>
  );
};

export default Appointments;
