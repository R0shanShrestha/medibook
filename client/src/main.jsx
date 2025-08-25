import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Error from "./pages/error/Error.jsx";
import About from "./pages/About/About.jsx";
import Profile from "./pages/UserPage/Profile.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import AppointmentPage from "./pages/Appointment/AppointmentPage.jsx";
import AppContext from "./context/AppContext.jsx";
import Doctors from "./pages/Doctor/Doctor.jsx";

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
        element: <Doctors />,
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
        path: "/my-appointment",
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
