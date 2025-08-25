import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
export const DoctorContextProvider = createContext({
  doctorToken: "",
  backendUrl: "",
  appointments: "",
  dashboard: "",
  doctor: "",
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
  const [dashboard, setdashboard] = useState([]);
  const dashboardData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/doctor/doctor-dashboard",
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        setdashboard(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const getAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/doctor/doctor-appointment",
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        setAppointments(data.appointments.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const cancelAppointment = async (appointId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/doctor/doctor-appointment-cancel",
        { appointId },
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAppointments();
        dashboardData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const completeAppointment = async (appointId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/doctor/doctor-appointment-complete",
        { appointId },
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAppointments();
        dashboardData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [doctor, setDoctor] = useState([]);
  const getDoctorData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/doctor/doctor-profile",
        { headers: { token: doctorToken } }
      );
      if (data.success) {
        setDoctor(data.docData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

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
        setDoctorToken,
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
