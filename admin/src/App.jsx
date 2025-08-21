import React from "react";
import Login from "./pages/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AppContextProvider } from "./context/AppContext";
import { AdminContextProvider } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Dashboard from "./pages/adminpage/Dashboard/Dashboard";

const App = () => {
  const { adbackendUrl, adminToken, setAdminToken } =
    useContext(AdminContextProvider);

  return adminToken ? (
    <div >
      {/* <Navbar /> */}
      <Outlet />
      <ToastContainer />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
