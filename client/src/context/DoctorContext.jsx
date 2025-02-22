import React, { createContext, useEffect, useReducer, useState } from "react";
export const DoctorContextProvider = createContext({
  navSwitch: Boolean,
  setnavSwitch: () => {},
});

const DoctorContext = ({ children }) => {
  const [navSwitch, setnavSwitch] = useState(false);

  return (
    <DoctorContextProvider.Provider value={{ navSwitch, setnavSwitch }}>
      {children}
    </DoctorContextProvider.Provider>
  );
};

export default DoctorContext;
