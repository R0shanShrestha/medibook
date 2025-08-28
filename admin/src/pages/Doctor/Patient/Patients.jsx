import { DoctorContextProvider } from "../../../context/DoctorContext";
import { AppContextProvider } from "../../../context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, User, Mail, Phone, Calendar } from "lucide-react";
import Loading from "../../../components/Loading";

const Patients = () => {
  const [search, setSearch] = useState("");

  const { doctorToken, dashboard, isLoading, dashboardData } = useContext(
    DoctorContextProvider
  );
  const { settab } = useContext(AppContextProvider);

  const nav = useNavigate();

  useEffect(() => {
    if (!doctorToken) {
      nav("/login");
    }
  }, [doctorToken]);

  useEffect(() => {
    if (doctorToken) {
      dashboardData();
      settab("patients");
    }
  }, [doctorToken]);

  return (
    <div className="w-full min-h-screen p-5 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-700">
            Patients List
          </h1>

          {/* Search */}
          <div className="flex items-center border rounded-xl px-3 py-2 bg-white shadow-sm w-full md:w-1/3">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2 outline-none text-sm"
            />
          </div>
        </div>

        {/* Table / Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoading ? (
            <Loading />
          ) : (
            dashboard?.patients?.map((item) => (
              <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-3 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <User className="text-emerald-600" />
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Mail size={16} />
                  <span>{item.email}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone size={16} />
                  <span>{item.phone}</span>
                </div>

                <button className="mt-3 hidden bg-emerald-700 text-white py-2 px-4 rounded-xl text-sm hover:bg-emerald-800 transition">
                  View Profile
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Patients;
