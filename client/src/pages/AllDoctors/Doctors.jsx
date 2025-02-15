import React, { useContext, useEffect, useState } from "react";
import { AllDoctors, speciality, TopDoctors } from "../../utils/constant";
import Card from "../../components/Card";
import { DoctorContextProvider } from "../../context/doctorContext";

const Doctors = () => {
  const { Doctors } = useContext(DoctorContextProvider);
  const [isSpeciality, setisSpeciality] = useState("all");
  const [filterDoctors, setFilterDoctors] = useState(Doctors);

  useEffect(() => {
    // console.log("type:", isSpeciality);
    if (isSpeciality == "All") {
      // console.log("Console 1");
      setFilterDoctors(
        AllDoctors.map((doctor) => {
          return doctor;
        })
      );
    } else {
      // console.log("Console 2");
      setFilterDoctors(
        AllDoctors.filter((item) => {
          return item.specilizedIn
            .toLowerCase()
            .includes(isSpeciality.toLowerCase());
        })
      );
    }
  }, [isSpeciality]);
  return (
    <div className="flex flex-col  overflow-hidden p-2  gap-2 lg:m-10">
      <div className="  shadow min-w-[300px] flex-col  p-5 flex  justify-center">
        <div className="flex w-full">
          <h5 className="text-slate-600 p-3 text-xl font-medium">
            Browse through the doctors specialist.
          </h5>
        </div>
        {/* .......................... */}
        <div className="flex">
          <select
            className="capitalize border w-full p-3 rounded-md bg-emerald-500 text-white outline-none"
            onChange={(e) => {
              setisSpeciality(e.target.value);
            }}
          >
            <option
              value={"All"}
              className=" p-3 bg-slate-100 rounded-md text-left text-black"
            >
              All
            </option>
            {speciality.map((spec, idx) => (
              <option
                value={spec.label}
                className=" p-3 bg-slate-100 rounded-md text-left text-black"
                key={idx}
              >
                {spec.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className=" flex overflow-y-scroll justify-center md:justify-around items-center gap-4 p-2 flex-wrap flex-row  h-[60vh]  w-full">
        {filterDoctors?.map(({ name, specilizedIn, img, status }, idx) => (
          <Card
            name={name}
            label={specilizedIn}
            img={img}
            status={status}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
