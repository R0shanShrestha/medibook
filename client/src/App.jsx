import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
