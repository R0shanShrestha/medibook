import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Flashlight } from "lucide-react";

export const AppContextProvider = createContext({
  Doctors: [],
  getDoctorsData: () => {},
  token: "",
  setToken: () => {},
  user: "",
  setUserData: () => {},
  loadUserData: () => {},
  backendUri: "",
});

const AppContext = ({ children }) => {
  const backendUri = import.meta.env.VITE_BACKEND_URL;
  const [Doctors, setDoct] = useState([]);
  const [user, setUserData] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUri + "/api/doctor/list");
      if (data.success) {
        setDoct(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const loadUserData = async () => {
    try {
      const { data } = await axios.get(backendUri + "/api/user/profile", {
        headers: { token: token },
      });
      if (data.success) {
        console.log(data.user);
        setUserData(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);
  useEffect(() => {
    if (token) {
      loadUserData();
      console.log(user);
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContextProvider.Provider
      value={{
        Doctors,
        getDoctorsData,
        token,
        setToken,
        backendUri,
        user,
        setUserData,
        loadUserData
      }}
    >
      {children}
    </AppContextProvider.Provider>
  );
};

export default AppContext;
