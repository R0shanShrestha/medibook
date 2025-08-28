import React, { useContext, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminContextProvider } from "../../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContextProvider } from "../../context/AppContext";
import { DoctorContextProvider } from "../../context/DoctorContext";
import { useEffect } from "react";
import Loading from "../../components/Loading";

const Login = () => {
  const { state, setstate } = useContext(AppContextProvider);
  const nav = useNavigate();
  const { backendUrl, adminToken, setAdminToken } =
    useContext(AdminContextProvider);
  const { doctorToken, setDoctorToken } = useContext(DoctorContextProvider);

  const Email = useRef();
  const Password = useRef();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (adminToken) {
      nav("/admin/dashboard");
    }
    if (doctorToken) {
      nav("/doctor/dashboard");
    }
  }, [doctorToken, adminToken]);

  const submitData = async (e) => {
    e.preventDefault();
    if (state === "Admin") {
      let dataObj = {
        email: Email.current.value,
        password: Password.current.value,
      };

      setLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/admin/login",
        dataObj
      );

      if (data.success) {
        setstate("Admin");
        localStorage.setItem("adminToken", data.token);
        setAdminToken(data.token);
        toast.success(data.success);
        setLoading(false);
        nav("/admin/dashboard");
      } else {
        setLoading(false);
        toast.error(data.message);
      }

      Email.current.value = "";
      Password.current.value = "";
    } else {
      let dataObj = {
        email: Email.current.value,
        password: Password.current.value,
      };

      setLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/doctor/login",
        dataObj
      );

      if (data.success) {
        localStorage.setItem("doctorToken", data.token);
        setstate("Doctor");
        setDoctorToken(data.token);
        toast.success(data.success);
        setLoading(false);
        nav("/doctor/dashboard");
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    }
  };

  return (
    <div className="flex justify-center p-1  h-[80vh] items-center">
      <div className="flex border w-[400px] border-emerald-200 shadow-md p-10 flex-col gap-4 rounded-xl h-fit">
        <div className="head">
          <h1 className="text-2xl font-semibold text-emerald-600">
            {" "}
            <span className="font-bold text-emerald-800">{state}</span> Login
          </h1>
          <p className="text-slate-400 text-sm">
            login to medibook {state} panel
          </p>
        </div>
        {isLoading && <Loading />}
        {!isLoading && (
          <form action="#" className="flex flex-col gap-4">
            <div className="field text-slate-600 flex flex-col">
              <label htmlFor="Email">Email</label>
              <input
                ref={Email}
                type="email"
                id="Email"
                className="border outline-none  p-2 rounded w-full "
              />
            </div>
            <div className="field text-slate-600 flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                ref={Password}
                type="password"
                id="password"
                className="border outline-none  p-2 rounded w-full "
              />
            </div>
            <div className="field z-20 relative text-slate-600 flex flex-col">
              <button
                onClick={(e) => {
                  submitData(e);
                }}
                className="cursor-pointer hover:bg-emerald-900  transition-all duration-300 p-2 rounded bg-emerald-400 text-white font-semibold"
              >
                Login
              </button>
            </div>
            <div className="field z10 text-slate-600 flex flex-col pt-3 text-sm mt-3 border-t-2">
              {state == "Admin" ? (
                <p>
                  Doctor Login{" "}
                  <span
                    onClick={() => setstate("Doctor")}
                    className="font-semibold cursor-pointer  hover:text-blue-800 text-blue-500"
                  >
                    Click here
                  </span>
                </p>
              ) : (
                <p>
                  Admin Login{" "}
                  <span
                    onClick={() => setstate("Admin")}
                    className="font-semibold cursor-pointer  hover:text-blue-800 text-blue-500"
                  >
                    Click here
                  </span>
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
