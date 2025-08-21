import React, { createContext, useState } from "react";

export const AppContextProvider = createContext({
  Doctors: [],
});
const AppContext = ({ children }) => {
  const [adminToken, setAdminToken] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <AppContextProvider.Provider value={{ backendUrl, adminToken, setAdminToken }}>
      {children}
    </AppContextProvider.Provider>
  );
};

export default AppContext;
