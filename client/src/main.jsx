import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import DoctorContext from "./context/DoctorContext.jsx";
import Doctor from "./pages/Doctor/Doctor.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Error from "./pages/error/Error.jsx";
import About from "./pages/About/About.jsx";
import Profile from "./pages/UserPage/Profile.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import AppointmentPage from "./pages/Appointment/AppointmentPage.jsx";
import AuthContext from "./context/AuthContext.jsx";
import Dashboard from "./Admin/Dashboard/Dashboard.jsx";
import DashboardItems from "./Admin/Dashboard/DashboardItems.jsx";
import AddDoctor from "./Admin/Doctor/AddDoctor.jsx";
import Appointments from "./Admin/Appointments/Appointments.jsx";
import Doctors from "./Admin/Doctor/Doctors.jsx";
import Patient from "./Admin/Patient/Patient.jsx";
import DoctorDashboard from "./Admin/Dashboard/DoctorDashboard.jsx";
import DoctorDashboardItems from "./pages/Doctor/DoctorDashboardItems.jsx";
import MyAppointmentpage from "./pages/Doctor/MyAppointmentpage.jsx";
import DoctorProfile from "./pages/Doctor/DoctorProfile.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <Doctor />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/appointment/0000",
        element: <AppointmentPage />,
      },
    ],
  },
  {
    path: "/doctor/dashboard/",
    element: <DoctorDashboard />,
    children: [
      {
        path: "/doctor/dashboard/",
        element: <DoctorDashboardItems />,
      },

      {
        path: "/doctor/dashboard/appointments",
        element: <MyAppointmentpage />,
      },

      {
        path: "/doctor/dashboard/patients",
        element: <Patient />,
      },
      {
        path: "/doctor/dashboard/profile",
        element: <DoctorProfile />,
      },
    ],
  },
  {
    path: "/admin/dashboard/",
    element: <Dashboard />,
    children: [
      {
        path: "/admin/dashboard/",
        element: <DashboardItems />,
      },
      {
        path: "/admin/dashboard/add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "/admin/dashboard/appointment",
        element: <Appointments />,
      },
      {
        path: "/admin/dashboard/doctors",
        element: <Doctors />,
      },
      {
        path: "/admin/dashboard/patient",
        element: <Patient />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <DoctorContext>
      <RouterProvider router={routes} />
    </DoctorContext>
  </AuthContext>
);
