import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Profile from "./pages/UserPage/Profile.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import AppointmentPage from "./pages/Appointment/AppointmentPage.jsx";
import AppContext from "./context/AppContext.jsx";
import Doctors from "./pages/Doctor/Doctor.jsx";
import Wrapper from "./wrapper/wrapper.jsx";
import HelpLine from "./pages/Contact/HelpLine.jsx";

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
        path: "/helpLine",
        element: <HelpLine />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: (
          <Wrapper>
            <Profile />
          </Wrapper>
        ),
      },
      {
        path: "/my-appointment",
        element: (
          <Wrapper>
            <Appointment />
          </Wrapper>
        ),
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
]);

createRoot(document.getElementById("root")).render(
  <AppContext>
    <RouterProvider router={routes} />
  </AppContext>
);
