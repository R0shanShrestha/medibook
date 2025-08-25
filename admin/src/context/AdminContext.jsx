import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContextProvider = createContext({
  Doctors: [],
  adminToken: "",
  DashboardDetails: "",
  backendUrl: "",
  adminDashboardDetails: () => {},
  changeAvailability: () => {},
  cancelAppointment: () => {},
  getAllDoctors: () => {},
  ageCalculator: () => {},
  slotDateFormat: () => {},
  appointments: "",
  getAppointments: () => {},
  setAdminToken: () => {},
  delDoctorAcc: () => {},
});
const AdminContext = ({ children }) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") ? localStorage.getItem("adminToken") : ""
  );
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [Doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [DashboardDetails, setDashBoardDetails] = useState([]);

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/all-doctors", {
        headers: {
          token: adminToken,
        },
      });

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailability = async (id) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/change-availability",
        { doctId: id },
        { headers: { token: adminToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getAllDoctors();
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
        backendUrl + "/api/admin/all-appointments",
        { headers: { token: adminToken } }
      );

      if (data.success) {
        setAppointments(data.appointments.reverse());
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
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
  const cancelAppointment = async (appointId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/cancel-appointment",
        { appointId },
        { headers: { token: adminToken } }
      );

      if (data.success) {
        getAppointments();
        adminDashboardDetails();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const adminDashboardDetails = async () => {
    try {
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
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const delDoctorAcc = async (docId) => {
    const alertPrompt = confirm("You really to Want to delete ?");
    if (alertPrompt) {
      try {
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
        } else {
          toast.error(data.message);
        }
      } catch (error) {
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
        cancelAppointment,
        ageCalculator,
      }}
    >
      {children}
    </AdminContextProvider.Provider>
  );
};

export default AdminContext;
