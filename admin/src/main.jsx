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
import Doctors from "./pages/adminpage/Doctor/Doctors.jsx";
import DoctorDashboardItems from "./pages/Doctor/DoctorDashboardItems.jsx";
import MyAppointmentpage from "./pages/Doctor/MyAppointmentpage.jsx";
import AddDoctor from "./pages/adminpage/Doctor/AddDoctor.jsx";
import Patients from "./pages/Doctor/Patient/Patients.jsx";
import DoctorProfile from "./pages/Doctor/DoctorProfile.jsx";

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
      //Admin Routes

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
      //Doctor Routes
      {
        path: "/doctor/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/doctor/dashboard",
            element: <DoctorDashboardItems />,
          },
          {
            path: "/doctor/dashboard/appointment",
            element: <MyAppointmentpage />,
          },
          {
            path: "/doctor/dashboard/patients",
            element: <Patients />,
          },
          {
            path: "/doctor/dashboard/profile",
            element: <DoctorProfile />,
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
