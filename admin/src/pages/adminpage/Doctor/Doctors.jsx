import React, { useEffect, useContext, useState } from "react";
import DoctorCard from "./DoctorCard";
import { AdminContextProvider } from "../../../context/AdminContext";
import DoctorDetail from "../../../components/DoctorDetail";
import { DoctorContextProvider } from "../../../context/DoctorContext";
import { AppContextProvider } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { images } from "../../../constant";
import Loading from "../../../../../client/src/components/Loading/Loading";

const Doctors = () => {
  const { getAllDoctors, adminToken, Doctors, isLoading } =
    useContext(AdminContextProvider);

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const { doctorToken } = useContext(DoctorContextProvider);
  const { settab } = useContext(AppContextProvider);
  const nav = useNavigate();

  useEffect(() => {
    if (!adminToken) {
      nav("/login");
    }
  }, [adminToken]);
  useEffect(() => {
    if (adminToken) {
      settab("admin");
      getAllDoctors();
    }
    if (doctorToken) {
      settab("doctors");
    }
  }, [adminToken, doctorToken]);

  return adminToken ? (
    <div className="flex flex-col w-full min-h-screen bg-white p-2 overflow-hidden">
      <div className="flex w-full p-5 pb-3">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
          All Doctors
        </h1>
      </div>

      <div className="flex flex-wrap gap-5 p-2 overflow-y-auto h-[calc(100vh-100px)] md:h-[calc(100vh-120px)]">
        {isLoading ? (
          <Loading />
        ) : Doctors.length > 0 ? (
          Doctors.map((doct, id) => (
            <DoctorCard key={id} doctor={doct} infoDoc={setSelectedDoctor} />
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
  ) : (
    <div className="w-full text-center items-center ">Login Required</div>
  );
};

export default Doctors;
