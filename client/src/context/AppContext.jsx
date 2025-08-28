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
  tab: "",
  setUserData: () => {},
  backendUri: "",
  loadUserData: () => {},
  setTab: () => {},
  isLoading: false,
  setLoading: () => {},
});

const AppContext = ({ children }) => {
  const backendUri = import.meta.env.VITE_BACKEND_URL;
  const [Doctors, setDoct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [tab, setTab] = useState("home");
  const [user, setUserData] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("Usertoken")
      ? localStorage.getItem("Usertoken")
      : false
  );

  const getDoctorsData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(backendUri + "/api/doctor/list");
      if (data.success) {
        const filterAvailableDoc = data.doctors.filter(
          (doc) => doc.available && doc
        );
        setLoading(false);
        setDoct(filterAvailableDoc);
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const loadUserData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(backendUri + "/api/user/profile", {
        headers: { token: token },
      });
      if (data.success) {
        setLoading(false);
        // console.log(data.user);
        setUserData(data.user);
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
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
      // console.log(user);
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
        loadUserData,
        tab,
        setTab,
        isLoading,
        setLoading,
      }}
    >
      {children}
    </AppContextProvider.Provider>
  );
};

export default AppContext;
