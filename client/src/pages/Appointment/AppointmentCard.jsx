import React from "react";

const AppointmentCard = ({
  DocImg,
  appointId,
  name,
  education,
  specializedIn,
  address,
  appointmentDate,
  bookingDate,
  iscompleted,
  onCancel,
  onPay,
  isCancel,
}) => {
  return (
    <div className="w-full bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="flex-shrink-0">
        <img
          src={DocImg}
          alt={name}
          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-emerald-300"
        />
      </div>

      <div className="flex-1 flex flex-col md:flex-row md:justify-between w-full gap-4">
        <div className="flex flex-col flex-1 gap-1">
          <h3 className="text-emerald-800 font-bold text-lg">{name}</h3>
          <p className="text-slate-600 text-sm font-semibold">
            {education} | {specializedIn}
          </p>
          <p className="text-slate-600 text-sm">
            <span className="font-semibold">Address:</span>{" "}
            {address && (
              <span>
                {" "}
                {address.line1}
                <br />
                {address.line2}
              </span>
            )}
          </p>
          <p className="text-gray-500 text-sm">
            {/* Appointment: {appointmentDate} */}
          </p>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold">Date & Time:</span>{" "}
            {appointmentDate.date} || {appointmentDate.time}
          </p>
        </div>

        <div className="flex flex-col  gap-3 mt-3 md:mt-0 items-start">
          {iscompleted ? (
            <p className="sm:min-w-48 py-2  font-semibold rounded text-green-500 px-2">
              Appointment Completed
            </p>
          ) : isCancel ? (
            <p className="sm:min-w-48 py-2  font-semibold rounded text-red-500 px-2">
              Appointment Cancelled
            </p>
          ) : (
            <button
              onClick={() => {
                onCancel(appointId);
              }}
              className="border-2 border-red-500 text-red-500 font-semibold py-2 px-6 rounded-2xl text-center hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Cancel
            </button>
          )}
          {!isCancel && (
            <button
              onClick={() => {
                onPay(appointId);
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2 px-6 rounded-2xl text-center hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
            >
              Pay Online
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
