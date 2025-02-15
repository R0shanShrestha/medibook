import React, { createContext, useEffect, useReducer, useState } from "react";
import { AllDoctors } from "../utils/constant";
export const DoctorContextProvider = createContext({
  isloading: Boolean,
  setisloading: () => {},
  Doctors: [],
  filterDoctor: () => {},
});

const allDoctors = (initial, action) => {
  let newDoctorList = initial;
  if (action.type == "newDoctors") {
    newDoctorList = [action.payload, ...newDoctorList];
  }
  return newDoctorList;
};

const allCategories = (initial, action) => {
  let newDoctorList = initial;
  if (action.type == "newCategory") {
    newDoctorList = [action.payload, ...newDoctorList];
  }
  return newDoctorList;
};

const DoctorContext = ({ children }) => {
  const [Doctors, DispatchDoctors] = useReducer(allDoctors, []);
  const [isloading, setisloading] = useState(false);
  const [DoctorCategory, DispatchDoctorCategory] = useReducer(
    allCategories,
    []
  );

  useEffect(() => {
    AllDoctors.map((doctor) => {
      DispatchDoctors({
        type: "newDoctors",
        payload: doctor,
      });
    });
  }, []);

  const filterDoctor = async (doctorCategory) => {};

  return (
    <DoctorContextProvider.Provider
      value={{ isloading, setisloading, Doctors, filterDoctor }}
    >
      {children}
    </DoctorContextProvider.Provider>
  );
};

export default DoctorContext;
