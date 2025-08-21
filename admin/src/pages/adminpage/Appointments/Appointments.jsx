import React from "react";
import AppointmentList from "./AppointmentList";

const Appointments = () => {
  return (
    <div className="flex flex-col w-full h-full   p-2  overflow-hidden overflow-y-scroll no-scroller ">
      <div className="flex w-full p-5 pb-3 border-b-2 ">
        <h1 className="text-xl text-slate-800">All Appointments</h1>
      </div>
      {/* Appointment Table */}
      <div className="mt-2 h-fit max-h-[80%] no-scroller overflow-hidden overflow-y-scroll">
        <table className="    w-full  overflow-hidden overflow-y-scroll">
          <thead className=" ">
            <tr className="text-[10px] border rounded-md md:text-sm text-slate-700 text-center">
              <th className="p-3">#</th>
              <th className="p-3">Patient</th>
              <th className="p-3">Age</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Fees</th>
            </tr>
          </thead>

          {/* Table datas */}
          <tbody className=" h-[40%]">
            <AppointmentList
              doctorName={"Roshan Shrestha"}
              patientName={"Cristina Shrestha"}
              doctorImg={"#"}
              patientImg={"#"}
              fees={"Rs.5000"}
              sn={1}
              img={"#"}
              age={18}
              datetime={"14th April, 2006 11:52 pm"}
            />
            <AppointmentList
              doctorName={"Roshan Shrestha"}
              patientName={"Cristina Shrestha"}
              doctorImg={""}
              patientImg={"#"}
              fees={"Rs.5000"}
              sn={1}
              img={"#"}
              age={18}
              datetime={"14th April, 2006 11:52 pm"}
            />
            <AppointmentList
              doctorName={"Roshan Shrestha"}
              patientName={"Cristina Shrestha"}
              doctorImg={""}
              patientImg={"#"}
              fees={"Rs.5000"}
              sn={1}
              img={"#"}
              age={18}
              datetime={"14th April, 2006 11:52 pm"}
            />
            <AppointmentList
              doctorName={"Roshan Shrestha"}
              patientName={"Cristina Shrestha"}
              doctorImg={""}
              patientImg={"#"}
              fees={"Rs.5000"}
              sn={1}
              img={"#"}
              age={18}
              datetime={"14th April, 2006 11:52 pm"}
            />
            <AppointmentList
              doctorName={"Roshan Shrestha"}
              patientName={"Cristina Shrestha"}
              doctorImg={""}
              patientImg={"#"}
              fees={"Rs.5000"}
              sn={1}
              img={"#"}
              age={18}
              datetime={"14th April, 2006 11:52 pm"}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
