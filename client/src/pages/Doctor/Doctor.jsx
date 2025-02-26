import React, { useState } from "react";
import SpecListBtn from "./SpecListBtn";
import { speciality, AllDoctors } from "../../utils/constant";
import DoctorList from "./DoctorList";
import { BiMenu } from "react-icons/bi";

const Doctor = () => {
  const [selectlist, setSelectlist] = useState(false);

  const [selectSpeciality, setselectSpeciality] = useState("");

  const FilterDoctorData =
    selectSpeciality != ""
      ? AllDoctors.filter(
          (preval) =>
            preval.specilizedIn.toLocaleLowerCase() ==
            selectSpeciality.toLocaleLowerCase()
        )
      : AllDoctors;

  return (
    <div className=" md:p-5 md:ps-10 md:pr-10 flex flex-col justify-center  overflow-hidden ">
      <div className=" w-full  flex p-5 md:p-10 justify-center lg:justify-evenly  flex-col lg:flex-row overflow-hidden ">
        <div className="ridemenu  p-1 flex flex-col gap-5">
          <div className="flex">
            <h1 className="text-emerald-400 font-semibold text-2xl">
              Find the Doctor as your Need
            </h1>
          </div>
          <div className="docCard  bg-emerald-300 flex flex-col p-3 rounded-md text-white">
            <div className=" p-3 rounded-md shadow-md  bg-white text-emerald-400 font-semibold justify-around flex items-center">
              <h2>Specialists Doctors</h2>
              <p
                className="cursor-pointer lg:hidden "
                onClick={() => {
                  setSelectlist((preval) => !preval);
                }}
              >
                {" "}
                <BiMenu size={24} />{" "}
              </p>
            </div>
            <div
              className={`specList flex-wrap lg:flex lg:flex-col   p-2 mt-5 ${
                selectlist ? "flex" : "hidden"
              }`}
            >
              {speciality.map((spec, id) => {
                return (
                  <SpecListBtn
                    detail={spec}
                    key={id}
                    func={setselectSpeciality}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="leftItem  flex flex-col lg:w-[800px]   overflow-hidden  p-2">
          <DoctorList
            selectedTab={
              selectSpeciality != "" ? selectSpeciality : "All Doctors"
            }
            Data={FilterDoctorData}
          />
        </div>
      </div>
    </div>
  );
};

export default Doctor;
