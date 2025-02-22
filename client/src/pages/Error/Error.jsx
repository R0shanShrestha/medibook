import React from "react";
import { BiLeftArrow, BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full gap-2 h-full flex-col fixed p-10 flex justify-center items-center text-white bg-slate-800 ">
      <div className="absolute top-10 left-10">
        <Link className="flex items-center gap-5 hover:font-bold">
          <span>
            <BiLeftArrowAlt size={25} />
          </span>
          <span>Back</span>
        </Link>
      </div>
      <p className="text-3xl">404 Page not Found 😭</p>
      <p className="text-sm">{document.URL}</p>
    </div>
  );
};

export default Error;
