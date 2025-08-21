import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Doctor from "./pages/Doctor/Doctor.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Error from "./pages/error/Error.jsx";
import About from "./pages/About/About.jsx";
import Profile from "./pages/UserPage/Profile.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import AppointmentPage from "./pages/Appointment/AppointmentPage.jsx";
import AppContext from "./context/AppContext.jsx";

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
        path: "/appointment/doctor/:doctorId",
        element: <AppointmentPage />,
      },
    ],
  },
  // {
  //   path: "/doctor/dashboard/",
  //   element: <DoctorDashboard />,
  //   children: [
  //     {
  //       path: "/doctor/dashboard/",
  //       element: <DoctorDashboardItems />,
  //     },

  //     {
  //       path: "/doctor/dashboard/appointments",
  //       element: <MyAppointmentpage />,
  //     },

  //     {
  //       path: "/doctor/dashboard/patients",
  //       element: <Patient />,
  //     },
  //     {
  //       path: "/doctor/dashboard/profile",
  //       element: <DoctorProfile />,
  //     },
  //   ],
  // },

  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AppContext>
    <RouterProvider router={routes} />
  </AppContext>
);
