import React from "react";
import Login from "./pages/Login/Login";
import { ToastContainer, toast } from "react-toastify";

import { Outlet } from "react-router-dom";

const App = () => {
 

  return (
    <div>
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default App;
