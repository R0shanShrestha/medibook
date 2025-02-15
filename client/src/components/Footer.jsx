import React from "react";
import { Link } from "react-router-dom";
import { images } from "../utils/constant";
const Footer = () => {
  return (
   <>
    <div className="hidden justify-between ps-28 pt-28 pr-28 lg:flex">
      <div className="flex flex-col">
        <div className="logo">
          <img src={images[0].logo} alt="" />
        </div>
        <p className="w-[400px] text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          deserunt at sit unde officia suscipit quo illum perferendis ullam
          temporibus, natus laudantium aspernatur.
        </p>
      </div>
      <div className="flex flex-col gap-2 pt-3 ">
        <h3 className="text-2xl font-bold uppercase">Company</h3>
        <div className="text-slate-800 flex font-medium flex-col gap-2 text-sm">
          <Link>Home</Link>
          <Link>About us</Link>
          <Link>Delivery</Link>
          <Link>Privacy Policy</Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-3">
        <h3 className="text-2xl font-bold uppercase">Get In touch</h3>
        <div className="font-medium text-sm">
          <p>+977-9807960410</p>
          <p>fakemail@gmail.com</p>
        </div>
      </div>
    </div>
    <div className="text-center border-t-2  pt-5 ms-10 mt-10 mr-10 mb-5 border-t-slate-400">
        <p>Copyright &copy; 2024 @ roshanshrestha401-creation - All ight Reserved</p>
    </div>
   </>
  );
};

export default Footer;
