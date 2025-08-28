import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContextProvider = createContext({
  Doctors: [],
  adminToken: "",
  DashboardDetails: "",
  backendUrl: "",
  adminDashboardDetails: () => {},
  cancelAppointment: () => {},
  changeAvailability: () => {},
  getAllDoctors: () => {},
  ageCalculator: () => {},
  slotDateFormat: () => {},
  appointments: "",
  getAppointments: () => {},
  setAdminToken: () => {},
  isLoading: "",
  setLoading: () => {},
  delDoctorAcc: () => {},
});
const AdminContext = ({ children }) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") ? localStorage.getItem("adminToken") : ""
  );
  const [isLoading, setLoading] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [Doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [DashboardDetails, setDashBoardDetails] = useState([]);

  const getAllDoctors = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(backendUrl + "/api/admin/all-doctors", {
        headers: {
          token: adminToken,
        },
      });

      if (data.success) {
        setDoctors(data.doctors);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const changeAvailability = async (id, setinsideLoading) => {
    try {
      setinsideLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/admin/change-availability",
        { doctId: id },
        { headers: { token: adminToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getAllDoctors();
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

  const cancelAppointment = async (appointId, setinsideLoading) => {
    try {
      setinsideLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/admin/cancel-appointment",
        { appointId },
        { headers: { token: adminToken } }
      );

      if (data.success) {
        getAppointments();
        adminDashboardDetails();
        toast.success(data.message);
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

  const getAppointments = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        backendUrl + "/api/admin/all-appointments",
        { headers: { token: adminToken } }
      );

      if (data.success) {
        setAppointments(data.appointments.reverse());
        toast.success(data.message);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
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
  const ageCalculator = (dob) => {
    let today = new Date();
    let brdt = new Date(dob);

    let age = today.getFullYear() - brdt.getFullYear();
    return age;
  };

  const adminDashboardDetails = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        backendUrl + "/api/admin/admin-dashboard",
        {
          headers: {
            token: adminToken,
          },
        }
      );

      if (data.success) {
        setDashBoardDetails(data.dashData);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const delDoctorAcc = async (docId, setinsideLoading) => {
    const alertPrompt = confirm("You really to Want to delete ?");
    if (alertPrompt) {
      try {
        setinsideLoading(true);
        const { data } = await axios.post(
          backendUrl + "/api/admin/del-doctor",
          { docId },
          {
            headers: {
              token: adminToken,
            },
          }
        );

        if (data.success) {
          getAllDoctors();
          adminDashboardDetails();
          toast.success(data.message);
          setinsideLoading(false);
        } else {
          toast.error(data.message);
          setinsideLoading(false);
        }
      } catch (error) {
        setinsideLoading(false);
        toast.error(error.message);
      }
    }
  };

  return (
    <AdminContextProvider.Provider
      value={{
        delDoctorAcc,
        backendUrl,
        adminToken,
        setAdminToken,
        slotDateFormat,
        getAllDoctors,
        Doctors,
        adminDashboardDetails,
        DashboardDetails,
        changeAvailability,
        getAppointments,
        appointments,
        ageCalculator,
        isLoading,
        setLoading,
        cancelAppointment
      }}
    >
      {children}
    </AdminContextProvider.Provider>
  );
};

export default AdminContext;
