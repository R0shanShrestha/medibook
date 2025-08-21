import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AdminContext from "./context/AdminContext.jsx";
import DoctorContext from "./context/DoctorContext.jsx";
import AppContext from "./context/AppContext.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/adminpage/Dashboard/Dashboard.jsx";
import DashboardItems from "./pages/adminpage/Dashboard/DashboardItems.jsx";
import Appointments from "./pages/adminpage/Appointments/Appointments.jsx";
import AddDoctor from "./pages/adminpage/Doctor/AddDoctor.jsx";
import Doctors from "./pages/adminpage/Doctor/Doctors.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/admin/dashboard",
            element: <DashboardItems />,
          },
          {
            path: "/admin/dashboard/appointment",
            element: <Appointments />,
          },
          {
            path: "/admin/dashboard/add-doctor",
            element: <AddDoctor />,
          },
          {
            path: "/admin/dashboard/doctors",
            element: <Doctors />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminContext>
      <DoctorContext>
        <AppContext>
          <RouterProvider router={routes} />
        </AppContext>
      </DoctorContext>
    </AdminContext>
  </StrictMode>
);
