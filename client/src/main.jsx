import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Doctors from "./pages/AllDoctors/Doctors.jsx";
import DoctorContext from "./context/doctorContext.jsx";
import DoctorDashboard from "./pages/DoctorDashboard/DoctorDashboard.jsx";

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
        path: "/dashboard",
        element: <DoctorDashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <DoctorContext>
    <RouterProvider router={routes} />
  </DoctorContext>
);
