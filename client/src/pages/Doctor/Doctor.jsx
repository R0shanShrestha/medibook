import React, { useContext, useEffect, useState } from "react";
import SpecListBtn from "./SpecListBtn";
import { speciality } from "../../utils/constant";
import DoctorList from "./DoctorList";
import { BiMenu } from "react-icons/bi";
import { AppContextProvider } from "../../context/AppContext";

const Doctor = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const { Doctors } = useContext(AppContextProvider);

  useEffect(() => {}, [Doctors]);

  const handleSpecialityClick = (spec) => {
    if (spec === "All Doctors") {
      setSelectedSpeciality("");
    } else {
      setSelectedSpeciality(spec);
    }
  };

  const FilterDoctorData =
    selectedSpeciality && selectedSpeciality !== "All Doctors"
      ? Doctors.filter(
          (doctor) =>
            doctor.specializedIn.toLowerCase() ===
            selectedSpeciality.toLowerCase()
        )
      : Doctors;

  return (
    <div className="md:p-5 md:ps-10 md:pr-10 flex flex-col justify-center overflow-hidden">
      <div className="w-full flex p-5 md:p-10 justify-center lg:justify-evenly flex-col lg:flex-row overflow-hidden">
        <div className="ridemenu p-1 flex flex-col gap-5 w-full lg:w-auto">
          <h1 className="text-emerald-400 font-semibold text-2xl">
            Find the Doctor You Need
          </h1>
          <p className="text-sm text-emerald-600">
            Select a specialty or view all doctors.
          </p>

          <div className="docCard bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 text-emerald-400 w-full max-w-sm">
            <label
              className="font-semibold text-lg mb-2"
              htmlFor="specialist-select"
            >
              Specialists
            </label>
            <select
              id="specialist-select"
              value={selectedSpeciality}
              onChange={(e) => handleSpecialityClick(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full"
            >
              <option value="">All Doctors</option>
              {speciality.map((spec, idx) => (
                <option key={idx} value={spec.label}>
                  {spec.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="leftItem flex flex-col mt-5 lg:w-[800px] overflow-hidden p-2">
          <DoctorList
            selectedTab={
              selectedSpeciality !== "" ? selectedSpeciality : "All Doctors"
            }
            Data={FilterDoctorData}
          />
        </div>
      </div>
    </div>
  );
};

export default Doctor;
