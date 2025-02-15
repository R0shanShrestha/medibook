import React from "react";
import { BsDot } from "react-icons/bs";

const Card = ({ img, status, label, name }) => {
  return (
    <div className=" flex min-w-[210px]  max-w-[260px] rounded-md shadow-md border border-slate-200 flex-col   justify-center items-center cursor-pointer  h-[400px] p-2">
      <div className="w-full h-[70%] hover:shadow-md rounded-md">
        <img src={img} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="info flex flex-col  w-full ps-3 pt-2">
        <div
          className={
            status
              ? "flex items-center text-green-500 justify-center"
              : "flex text-red-500 items-center "
          }
        >
          <BsDot size={40} className="" />{" "}
          {status ? "Available" : "Not Available"}
        </div>
        <h1 className="capitalize font-bold">{name}</h1>
        <p className="capitalize text-slate-500 text-sm">{label}</p>
      </div>
    </div>
  );
};

export default Card;
