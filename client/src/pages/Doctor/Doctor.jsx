import React, { useState } from "react";
import SpecListBtn from "./SpecListBtn";
import { speciality, AllDoctors } from "../../utils/constant";
import DoctorList from "./DoctorList";
import { BiMenu } from "react-icons/bi";

const Doctor = () => {
  const [selectlist, setSelectlist] = useState(true);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");

  const handleSpecialityClick = (spec) => {
    if (spec === "All Doctors") {
      setSelectedSpeciality("");
    } else {
      setSelectedSpeciality(spec);
    }
  };

  const FilterDoctorData =
    selectedSpeciality && selectedSpeciality !== "All Doctors"
      ? AllDoctors.filter(
          (doctor) =>
            doctor.specilizedIn.toLowerCase() ===
            selectedSpeciality.toLowerCase()
        )
      : AllDoctors;

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

          <div className="docCard bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 text-emerald-400">
            <div className="flex justify-between items-center font-semibold">
              <h2>Specialists</h2>
              <p
                className="cursor-pointer lg:hidden"
                onClick={() => setSelectlist((prev) => !prev)}
              >
                <BiMenu size={24} />
              </p>
            </div>

            <div className="mb-1">
              <SpecListBtn
                custom="All Doctors"
                func={handleSpecialityClick}
                isAllDoctors={true}
                selected={selectedSpeciality === ""}
              />
            </div>

            <div
              className={`flex gap-2 flex-wrap lg:flex-col mt-2 ${
                selectlist ? "flex" : "hidden"
              }`}
            >
              {speciality.map((spec, id) => (
                <SpecListBtn
                  detail={spec}
                  key={id}
                  func={handleSpecialityClick}
                  selected={selectedSpeciality === spec}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="leftItem flex flex-col lg:w-[800px] overflow-hidden p-2">
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
