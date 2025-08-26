import React, { useContext, useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import { AppContextProvider } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const { backendUri, token, getDoctorsData } = useContext(AppContextProvider);


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
      const { data } = await axios.get(
        backendUri + "/api/user/list-appointment",
        { headers: { token } }
      );

      if (data.success) {
        setAppointments(data.appointments.reverse());
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointId) => {
    try {
      const { data } = await axios.post(
        backendUri + "/api/user/cancel-appointment",
        { appointId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getAppointments();
        getDoctorsData();
      } else {
        console.log(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onPay = async (appointId) => {
    try {
      const { data } = await axios.post(
        backendUri + "/api/user/pay-appointment",
        { appointId },
        { headers: { token } }
      );

      if (data.success) {
        toast.warn(data.message);
        getAppointments();
        getDoctorsData();
      } else {
        console.log(data.message);
      }
    } catch (error) {
      toast.error(error.message);
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
          {appointments &&
            appointments?.map((doc, idx) => (
              <div key={idx} className="w-full">
                <AppointmentCard
                  appointId={doc._id}
                  DocImg={doc.docData.image}
                  name={doc.docData.name}
                  education={doc.docData.education}
                  specializedIn={doc.docData.specializedIn}
                  address={doc.docData.address}
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
            ))}

          {appointments == "" && (
            <p className="text-slate-600 ">No Appointment yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
