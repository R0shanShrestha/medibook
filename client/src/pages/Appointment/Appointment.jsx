import React from "react";
import AppointmentCard from "./AppointmentCard";

const Appointment = () => {
  return (
    <div className="flex flex-col  p-1 ">
      <div className="flex w-[70%] p-10  flex-col gap-10 mx-auto text-slate-800">
        <div className="title font-semibold text-xl text-emerald-400 border-b-2 pb-10">
          <h1>My Appointments</h1>
        </div>
        <div className="AppointmentList flex gap-5 flex-wrap h-[70vh] overflow-hidden overflow-y-scroll">
          <AppointmentCard
            DocImg=""
            name="Dr. Richard James"
            speclistIn="General physican"
            address="Mechinagar-7, jhapa"
            appointmentDate="26 April, 2006, 8:00 am"
            ispaid={true}
          />
          <AppointmentCard
            DocImg=""
            name="Dr. Richard James"
            speclistIn="General physican"
            address="Mechinagar-7, jhapa"
            appointmentDate="26 April, 2006, 8:00 am"
            ispaid={false}
          />
          <AppointmentCard
            DocImg=""
            name="Dr. Richard James"
            speclistIn="General physican"
            address="Mechinagar-7, jhapa"
            appointmentDate="26 April, 2006, 8:00 am"
            ispaid={true}
          />
          <AppointmentCard
            DocImg=""
            name="Dr. Richard James"
            speclistIn="General physican"
            address="Mechinagar-7, jhapa"
            appointmentDate="26 April, 2006, 8:00 am"
            ispaid={false}
          />
          <AppointmentCard
            DocImg=""
            name="Dr. Richard James"
            speclistIn="General physican"
            address="Mechinagar-7, jhapa"
            appointmentDate="26 April, 2006, 8:00 am"
            ispaid={true}
          />
          <AppointmentCard
            DocImg=""
            name="Dr. Richard James"
            speclistIn="General physican"
            address="Mechinagar-7, jhapa"
            appointmentDate="26 April, 2006, 8:00 am"
            ispaid={false}
          />
          <AppointmentCard
            DocImg=""
            name="Dr. Richard James"
            speclistIn="General physican"
            address="Mechinagar-7, jhapa"
            ispaid={false}
            appointmentDate="26 April, 2006, 8:00 am"
          />
          <AppointmentCard
            DocImg=""
            name="Dr. Richard James"
            speclistIn="General physican"
            address="Mechinagar-7, jhapa"
            appointmentDate="26 April, 2006, 8:00 am"
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
