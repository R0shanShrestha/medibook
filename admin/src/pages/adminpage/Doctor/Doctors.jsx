import React, { useEffect, useContext, useState } from "react";
import DoctorCard from "./DoctorCard";
import { AdminContextProvider } from "../../../context/AdminContext";
import DoctorDetail from "../../../components/DoctorDetail";
import { DoctorContextProvider } from "../../../context/DoctorContext";
import { AppContextProvider } from "../../../context/AppContext";

const Doctors = () => {
  const {
    getAllDoctors,
    adminToken,
    delDoctorAcc,
    Doctors,
    changeAvailability,
  } = useContext(AdminContextProvider);

  const [selectedDoctor, setSelectedDoctor] = useState(null);

   const { doctorToken } = useContext(DoctorContextProvider);
    const { settab } = useContext(AppContextProvider);
    useEffect(() => {
      if (adminToken) {
        settab("doctors");
        getAllDoctors();
      }
      if (doctorToken) {
        settab("doctors");
      }
    }, [adminToken, doctorToken]);

  return (
    <div className="flex flex-col w-full min-h-screen p-2 overflow-hidden">
      <div className="flex w-full p-5 pb-3">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
          All Doctors
        </h1>
      </div>

      <div className="flex flex-wrap gap-5 p-2 overflow-y-auto h-[calc(100vh-100px)] md:h-[calc(100vh-120px)]">
        {Doctors.length > 0 ? (
          Doctors.map((doct, id) => (
            <DoctorCard
              key={id}
              doctor={doct}
              onDelete={delDoctorAcc}
              changeAvailability={changeAvailability}
              onClick={() => setSelectedDoctor(doct)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full mt-10">
            No doctors found.
          </p>
        )}
      </div>

      {/* Doctor Details Modal */}
      {selectedDoctor && (
        <DoctorDetail
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
};

export default Doctors;
