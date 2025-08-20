import React, { useState } from "react";
import AppointmentCard from "./AppointmentCard";
import { images } from "../../utils/constant";

const Appointment = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      DocImg: images[1].doctors[0],
      name: "Dr. Richard James",
      speclistIn: "General Physician",
      address: "Mechinagar-7, Jhapa",
      appointmentDate: "26 April, 2025, 8:00 AM",
      status: "paid",
    },
    {
      id: 2,
      DocImg: images[1].doctors[1],
      name: "Dr. Sarah Williams",
      speclistIn: "Cardiologist",
      address: "Kathmandu, Nepal",
      appointmentDate: "30 August, 2025, 11:00 AM",
      status: "pending",
    },
    {
      id: 3,
      DocImg: images[1].doctors[2],
      name: "Dr. John Doe",
      speclistIn: "Dermatologist",
      address: "Pokhara, Nepal",
      appointmentDate: "5 September, 2025, 2:00 PM",
      status: "approved",
    },
    {
      id: 4,
      DocImg: images[1].doctors[3],
      name: "Dr. Emily Clark",
      speclistIn: "Pediatrician",
      address: "Biratnagar, Nepal",
      appointmentDate: "12 September, 2025, 9:30 AM",
      status: "rescheduled",
    },
  ]);

  // Cancel appointment handler
  const handleCancel = (id) => {
    setAppointments((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: "canceled" } : app
      )
    );
  };

  return (
    <div className="flex flex-col w-full p-4 pt-24 bg-gradient-to-b from-[#e6f7f4] to-white min-h-screen">
      <div className="flex md:w-[90%] w-full p-8 flex-col gap-8 mx-auto text-slate-800">

        {/* Page Title */}
        <div className="title font-bold text-3xl text-emerald-800 border-b-2 pb-4">
          My Appointments
        </div>

        {/* Horizontal Appointments List */}
        <div className="AppointmentList flex gap-6 overflow-x-auto py-4 scrollbar-hide">
          {appointments.map((app) => (
            <AppointmentCard
              key={app.id}
              DocImg={app.DocImg}
              name={app.name}
              speclistIn={app.speclistIn}
              address={app.address}
              appointmentDate={app.appointmentDate}
              status={app.status}
              onCancel={() => handleCancel(app.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
