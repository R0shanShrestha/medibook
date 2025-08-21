import React, { createContext, useEffect, useReducer, useState } from "react";
export const DoctorContextProvider = createContext({});

const DoctorContext = ({ children }) => {
  return (
    <DoctorContextProvider.Provider value={{}}>
      {children}
    </DoctorContextProvider.Provider>
  );
};

export default DoctorContext;
