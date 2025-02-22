import React from "react";
import { images } from "../../utils/constant";
import { BiEdit } from "react-icons/bi";
import EditModel from "./EditModel";

const Profile = () => {
  return (
    <div className="flex flex-col  justify-center p-1">
      <div className="flex w-[70%] p-10  mx-auto flex-col gap-10 relative">
        <div className="userProfileImg flex justify-between">
          <img
            src={images[1].doctors[0]}
            alt="Not found"
            className="w-[200px] h-[200px] object-cover rounded-md"
          />

          <div className="Ico flex items-center hover:bg-slate-800 hover:text-white cursor-pointer h-fit p-2 rounded-md border-slate-500 text-slate-800 justify-center gap-2 border w-fit">
            <span className="font-semibold text-sm">Edit</span>
            <BiEdit size={23} />
          </div>
        </div>

        <div className="userDetails">
          <h1 className="text-3xl font-semibold text-slate-800">User Name</h1>
          <div className="uersinofs">
            {/* contact information */}
            <div className="contactInfo flex  gap-2 flex-col mt-10 p-3">
              <div className="flex flex-col text-slate-600 gap-2">
                <h5 className=" uppercase underline text-xl ">
                  Contact Information
                </h5>
                <div className="field text-sm flex gap-10 ">
                  <p className="flex gap-10 p-2">
                    Email id: <span>tests</span>{" "}
                  </p>
                </div>
                <div className="field text-sm flex gap-10">
                  <p className="flex gap-10 p-2">
                    Phone: <span>+977-9807960410</span>{" "}
                  </p>
                </div>
                <div className="field text-sm flex gap-10">
                  <p className="flex gap-10 p-2">
                    Address: <span>Mechinagar-7, jhapa</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* Basic Information */}

            <div className="basicinfo flex flex-col gap-2 text-slate-600 mt-10  p-3">
              <h5 className="underline text-xl uppercase">
                Basic Infortmation
              </h5>

              <div className="field text-sm flex gap-10">
                <p className="flex gap-10 p-2">
                  Gender: <span>Male</span>{" "}
                </p>
              </div>
              <div className="field text-sm flex gap-10">
                <p className="flex gap-10 p-2">
                  Birthday: <span>14 April, 2006</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Edit model */}
        {/* <EditModel /> */}
      </div>
    </div>
  );
};

export default Profile;
