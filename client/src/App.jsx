import React, { useContext } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import MobileNav from "./components/Header/MobileNav";
import { DoctorContextProvider } from "./context/DoctorContext";
import Footer from "./components/Footer/Footer";
const App = () => {
  const { navSwitch, setnavSwitch } = useContext(DoctorContextProvider);
  return (
    <>
      {navSwitch ? (
        <MobileNav NavSwitchHandler={setnavSwitch} />
      ) : (
        <Header NavSwitchHandler={setnavSwitch} />
      )}
      <Outlet />

      <div className="hidden md:flex">
        <Footer />
      </div>
    </>
  );
};

export default App;
