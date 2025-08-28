import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContextProvider } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";

const Login = () => {
  const nav = useNavigate();
  const { backendUri, setToken, token } = useContext(AppContextProvider);

  const Email = useRef();
  const Password = useRef();
  useEffect(() => {
    if (localStorage.getItem("Usertoken") || token) {
      nav("/doctors");
    }
  }, [token]);

  const [isLoading, setLoading] = useState(false);
  const submitData = async (e) => {
    e.preventDefault();
    let dataObj = {
      email: Email.current.value,
      password: Password.current.value,
    };

    try {
      setLoading(true);
      const { data } = await axios.post(
        backendUri + "/api/user/login",
        dataObj
      );
      if (data.success) {
        localStorage.setItem("Usertoken", data.token);
        setToken(data.token);
        toast.success(data.message);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(data.message);
      }

      Email.current.value = "";
      Password.current.value = "";
    } catch (error) {
      toast.error(data.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center p-1 h-[80vh] items-center">
      <div className="flex border border-emerald-200 shadow-md p-10 flex-col gap-4 rounded-xl h-fit">
        <div className="head">
          <h1 className="text-xl font-semibold text-emerald-600">Login</h1>
          <p className="text-slate-400 text-sm">
            Please login to book appointment
          </p>
        </div>

        {isLoading && (
          <div>
            <Loading />
          </div>
        )}
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
            <div className="field text-slate-600 flex flex-col">
              <button
                onClick={(e) => {
                  submitData(e);
                }}
                className="border hover:bg-emerald-900 transition-all duration-300 p-2 rounded bg-emerald-400 text-white font-semibold"
              >
                Login
              </button>
            </div>
            <div className="field text-slate-600 flex flex-col pt-3 text-sm mt-3 border-t-2">
              <p>
                If you don't have an account{" "}
                <Link to={"/signup"} className="text-red-400">
                  Sign up
                </Link>{" "}
                here
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
