import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContextProvider = createContext({
  Doctors: [],
  changeAvailability: () => {},
  getAllDoctors: () => {},
});
const AdminContext = ({ children }) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [Doctors, setDoctors] = useState([]);

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/all-doctors", {
        headers: {
          token: adminToken,
        },
      });

      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {}
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

  return (
    <AdminContextProvider.Provider
      value={{
        backendUrl,
        adminToken,
        setAdminToken,
        getAllDoctors,
        Doctors,
        changeAvailability,
      }}
    >
      {children}
    </AdminContextProvider.Provider>
  );
};

export default AdminContext;
