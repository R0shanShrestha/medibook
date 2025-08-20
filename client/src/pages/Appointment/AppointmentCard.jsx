import React from "react";

const AppointmentCard = ({
  DocImg,
  name,
  speclistIn,
  address,
  appointmentDate,
  onCancel,
  onPay,
}) => {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-5 flex flex-col gap-4">
      
      {/* Doctor Image */}
      <div className="flex items-center gap-4">
        <img
          src={DocImg}
          alt={name}
          className="w-16 h-16 object-cover rounded-full border-2 border-emerald-300"
        />
        <div className="flex flex-col">
          <h3 className="text-emerald-800 font-bold text-lg">{name}</h3>
          <p className="text-slate-600 text-sm">{speclistIn}</p>
        </div>
      </div>

      {/* Appointment Info */}
      <div className="text-slate-600 text-sm">
        <p>{address}</p>
        <p className="text-gray-500 text-xs">{appointmentDate}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-3">
        <button
          onClick={onPay}
          className="flex-1 bg-emerald-600 text-white rounded-xl py-2 text-sm font-medium hover:bg-emerald-700 transition-colors"
        >
          Pay Online
        </button>
        <button
          onClick={onCancel}
          className="flex-1 border-2 border-red-500 text-red-500 rounded-xl py-2 text-sm font-medium hover:bg-red-500 hover:text-white transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
