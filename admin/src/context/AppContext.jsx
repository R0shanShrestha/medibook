import React, { createContext, useState } from "react";

export const AppContextProvider = createContext({
  tab: "",
  settab: () => {},
  state: "",
  setstate: () => {},
  slotDateFormat: () => {},
});
const AppContext = ({ children }) => {
  const [tab, settab] = useState("dashboard");
  const [state, setstate] = useState("Admin");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const slotDateFormat = (slotDate) => {
    const dateArr = slotDate.split("_");
    // console.log(datea)
    return dateArr[0] + " " + months[Number(dateArr[1]) - 1] + " " + dateArr[2];
  };
  return (
    <AppContextProvider.Provider value={{ tab, settab, state, setstate ,slotDateFormat}}>
      {children}
    </AppContextProvider.Provider>
  );
};

export default AppContext;
