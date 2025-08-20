import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";

const Signup = () => {
  const { signupUser } = useContext(AuthContextProvider);
  const Fullname = useRef();
  const Email = useRef();
  const Password = useRef();
  const [userType, setUserType] = useState("patient");

  const submitData = (e) => {
    e.preventDefault();
    let dataObj = {
      Email: Email.current.value,
      Passowrd: Password.current.value,
      Fullname: Fullname.current.value,
      Type: userType,
    };
    signupUser(dataObj);
  };

  return (
    <div className="flex justify-center p-1 h-[80vh] items-center">
      <div className="flex border border-emerald-200 shadow-md p-10 flex-col gap-4 rounded-xl h-fit w-[400px]">
        <div className="head">
          <h1 className="text-xl font-semibold text-emerald-600">
            Create Account
          </h1>
          <p className="text-slate-400 text-sm">
            Please sign up to book appointment
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="field text-slate-600 flex flex-col">
            <label htmlFor="FullName">Full Name</label>
            <input
              ref={Fullname}
              type="text"
              id="FullName"
              className="border outline-none p-2 rounded w-full"
            />
          </div>
          <div className="field text-slate-600 flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              ref={Email}
              type="email"
              id="Email"
              className="border outline-none p-2 rounded w-full"
            />
          </div>
          <div className="field text-slate-600 flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              ref={Password}
              type="password"
              id="password"
              className="border outline-none p-2 rounded w-full"
            />
          </div>

          {/* Doctor/Patient buttons just above Create Account */}
          <div className="flex  gap-2 mt-2 mb-2">
            <button
              type="button"
              onClick={() => setUserType("doctor")}
              className={`px-3 py-1 rounded text-sm font-semibold border ${
                userType === "doctor"
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "text-emerald-600 border-emerald-400"
              }`}
            >
              Doctor
            </button>
            <button
              type="button"
              onClick={() => setUserType("patient")}
              className={`px-3 py-1 rounded text-sm font-semibold border ${
                userType === "patient"
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "text-emerald-600 border-emerald-400"
              }`}
            >
              Patient
            </button>
          </div>

          <div className="field text-slate-600 flex flex-col">
            <button
              onClick={(e) => submitData(e)}
              className="border hover:bg-emerald-900 transition-all duration-300 p-2 rounded bg-emerald-400 text-white font-semibold"
            >
              Create Account
            </button>
          </div>

          <div className="field text-slate-600 flex flex-col pt-3 text-sm mt-3 border-t-2">
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="text-red-400">
                Login
              </Link>{" "}
              here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
