import React from "react";
import { MdDelete } from "react-icons/md";

const DoctorCard = ({ doctor, changeAvailability, onDelete, onClick }) => {
  let { image, name, specializedIn, available, _id } = doctor;

  return (
    <div className="shadow-md border-emerald-200 h-fit overflow-hidden min-w-[200px] max-w-[500px] flex flex-col gap-2 cursor-pointer rounded-xl hover:shadow-xl border relative" onClick={onClick}>
      
      <img
        src={image}
        alt={name || "Not found"}
        className="min-w-[200px] max-w-[200px] h-[130px] md:h-[200px] object-cover object-top"
      />

      <div
        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md text-red-500 hover:bg-red-100 transition-colors duration-200"
        onClick={() => {onDelete(_id)}}
      >
        <MdDelete size={24} />
      </div>

      {/* Info Section */}
      <div className="text-sm flex flex-col p-2">
        <div className="mt-1">
          <p className="font-semibold text-slate-800 text-xl">{name}</p>
          <p className="text-slate-700">{specializedIn}</p>
          <p className="p-1 flex items-center gap-2">
            <input
              onChange={() => changeAvailability(_id)}
              type="checkbox"
              name="available"
              id={`available-${_id}`}
              checked={available}
            />
            <label htmlFor={`available-${_id}`}>Available</label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
