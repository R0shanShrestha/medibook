import React, { useContext, useEffect } from "react";
import { AppContextProvider } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Wrapper = ({ children }) => {
  const { token } = useContext(AppContextProvider);
  const nav = useNavigate();
  useEffect(() => {
    if (!token) {
      nav("/login");
    }
  }, [token]);
  return <>{children}</>;
};

export default Wrapper;
