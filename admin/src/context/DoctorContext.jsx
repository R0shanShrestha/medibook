import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
export const DoctorContextProvider = createContext({
  doctorToken: "",
  backendUrl: "",
  appointments: "",
  dashboard: "",
  doctor: "",
  isLoading: "",
  setLoading: () => {},
  setDoctorToken: () => {},
  getAppointments: () => {},
  slotDateFormat: () => {},
  dashboardData: () => {},
  cancelAppointment: () => {},
  completeAppointment: () => {},
  getDoctorData: () => {},
});

const DoctorContext = ({ children }) => {
  const [doctorToken, setDoctorToken] = useState(
    localStorage.getItem("doctorToken")
      ? localStorage.getItem("doctorToken")
      : ""
  );
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [dashboard, setdashboard] = useState([]);
  const dashboardData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        backendUrl + "/api/doctor/doctor-dashboard",
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        setdashboard(data.dashData);
        setLoading(false);
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  const getAppointments = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        backendUrl + "/api/doctor/doctor-appointment",
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        setLoading(false);
        setAppointments(data.appointments.reverse());
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  const cancelAppointment = async (appointId, setinsideLoading) => {
    try {
      setinsideLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/doctor/doctor-appointment-cancel",
        { appointId },
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAppointments();
        dashboardData();
        setinsideLoading(false);
      } else {
        setinsideLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setinsideLoading(false);
      toast.error(error.message);
    }
  };
  const completeAppointment = async (appointId, setinsideLoading) => {
    try {
      setinsideLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/doctor/doctor-appointment-complete",
        { appointId },
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAppointments();
        dashboardData();
        setinsideLoading(false);
      } else {
        setinsideLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setinsideLoading(false);
      toast.error(error.message);
    }
  };

  const [doctor, setDoctor] = useState([]);
  const getDoctorData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        backendUrl + "/api/doctor/doctor-profile",
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        setDoctor(data.docData);
        setLoading(false);
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <DoctorContextProvider.Provider
      value={{
        getDoctorData,
        doctorToken,
        cancelAppointment,
        backendUrl,
        appointments,
        getAppointments,
        completeAppointment,
        dashboardData,
        dashboard,
        doctor,
        setDoctorToken,
      }}
    >
      {children}
    </DoctorContextProvider.Provider>
  );
};

export default DoctorContext;
