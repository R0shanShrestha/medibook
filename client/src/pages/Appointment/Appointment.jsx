import React, { useContext, useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import { AppContextProvider } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { images } from "../../utils/constant";
import Loading from "../../components/Loading/Loading";

const Appointment = () => {
  const { backendUri, token, getDoctorsData, isLoading, setLoading } =
    useContext(AppContextProvider);

  const [appointments, setAppointments] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const slotDateFormat = (slotDate) => {
    const dateArr = slotDate.split("_");
    // console.log(datea)
    return dateArr[0] + " " + months[Number(dateArr[1]) - 1] + " " + dateArr[2];
  };

  const getAppointments = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        backendUri + "/api/user/list-appointment",
        { headers: { token } }
      );

      if (data.success) {
        setLoading(false);
        setAppointments(data.appointments.reverse());
      } else {
        setLoading(false);
        console.log(data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointId) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        backendUri + "/api/user/cancel-appointment",
        { appointId },
        { headers: { token } }
      );

      if (data.success) {
        getAppointments();
        getDoctorsData();
        setLoading(false);
        toast.success(data.message);
      } else {
        setLoading(false);
        console.log(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const onPay = async (appointId) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        backendUri + "/api/user/pay-appointment",
        { appointId },
        { headers: { token } }
      );

      if (data.success) {
        toast.warn(data.message);
        getAppointments();
        getDoctorsData();
        setLoading(false);
      } else {
        console.log(data.message);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getAppointments();
    }
  }, [token]);

  return (
    <div className="flex flex-col w-full p-4 pt-24 bg-gradient-to-b from-[#e6f7f4] to-white min-h-screen">
      <div className="flex md:w-[90%] w-full p-8 flex-col gap-8 mx-auto  md:px-20 text-slate-800">
        <div className="title font-bold text-3xl text-emerald-800 border-b-2 pb-4">
          My Appointments
        </div>
        <div className="AppointmentList flex flex-col gap-6 py-4">
          {isLoading ? (
            <div className="w-full  items-center justify-center flex">
              <img
                src={images?.loading}
                alt="Loading ..."
                className="max-w-[400px] object-cover "
              />
            </div>
          ) : (
            appointments &&
            appointments?.map((doc, idx) => (
              <div key={idx} className="w-full">
                <AppointmentCard
                  appointId={doc._id}
                  DocImg={doc.docId.image}
                  name={doc.docId.name}
                  education={doc.docId.education}
                  specializedIn={doc.docId.specializedIn}
                  address={doc.docId.address}
                  appointmentDate={{
                    date: slotDateFormat(doc.slotDate),
                    time: doc.slotTime,
                  }}
                  iscompleted={doc.iscompleted}
                  onPay={onPay}
                  isCancel={doc.cancelled}
                  onCancel={cancelAppointment}
                />
              </div>
            ))
          )}

          {isLoading ? (
            <Loading />
          ) : (
            appointments == "" && (
              <p className="text-slate-600 ">No Appointment yet</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
