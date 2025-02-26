import { User2Icon } from "lucide-react";
import React from "react";

const AddDoctor = () => {
  return (
    <div className="p-2 w-fit h-full overflow-y-scroll no-scroller ">
      <div className="flex w-full p-5 pb-3 border-b-2 ">
        <h1 className="text-xl text-slate-800">Add Doctor</h1>
      </div>
      <div className="flex flex-col  p-2 ">
        <form action="#" className=" w-fit  rounded-md shadow-md  p-2 ">
          <div className="field  flex flex-col md:flex-row p-1   md:items-center gap-2">
            <span className="border w-fit  p-10 text-xl rounded-full bg-slate-200 text-slate-400">
              <User2Icon size={30} />
            </span>
            <label htmlFor="#" className="flex flex-col gap-2 text-slate-400">
              <span className="text-xl ">Upload doctor picture</span>
              <input type="file" className=" text-sm " />
            </label>
          </div>

          {/* Fields  & buttons */}
          <div className="flex w-full pt-3  flex-wrap gap-3 md:p-2 ">
            <div className="field p-2  md:w-[35%] flex  flex-col text-slate-500 font-light">
              <label htmlFor="#">Doctor Name</label>
              <input
                type="text"
                placeholder="Name"
                className=" border w-full p-2 rounded-md "
              />
            </div>
            <div className="field p-2 md:w-[35%] flex  flex-col text-slate-500 font-light">
              <label htmlFor="#">Speciality</label>
              <select name="speciality" id="speciality" className="border p-2">
                <option value="General physican">General physican</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="field p-2 md:w-[35%] flex  flex-col text-slate-500 font-light">
              <label htmlFor="#">Doctor Email</label>
              <input
                type="email"
                placeholder="Your email"
                className=" border w-full p-2 rounded-md "
              />
            </div>

            <div className="field p-2 md:w-[35%] flex  flex-col text-slate-500 font-light">
              <label htmlFor="#">Education</label>
              <input
                type="text"
                placeholder="Education"
                className=" border w-full p-2 rounded-md "
              />
            </div>
            <div className="field p-2 md:w-[35%] justify-center flex  flex-col text-slate-500 font-light">
              <label htmlFor="#">Doctor password</label>
              <input
                type="password"
                placeholder="Password"
                className=" border w-full p-2 rounded-md "
              />
            </div>
            <div className="field p-2 md:w-[35%] flex  flex-col text-slate-500 font-light">
              <label htmlFor="#">Address</label>
              <textarea
                placeholder="Address"
                className=" border w-full p-2 rounded-md "
              />
            </div>
            <div className="field p-2 md:w-[35%] flex  flex-col text-slate-500 font-light">
              <label htmlFor="#">Experience</label>
              <input
                type="text"
                placeholder="Experience"
                className=" border w-full p-2 rounded-md "
              />
            </div>
            <div className="field p-2 md:w-[35%] flex  flex-col text-slate-500 font-light">
              <label htmlFor="#">Fees</label>
              <input
                type="text"
                placeholder="Your fees"
                className=" border w-full p-2 rounded-md "
              />
            </div>
            <div className="field p-2 w-[70%] flex  flex-col text-slate-500 font-light">
              <label htmlFor="#">About me</label>
              <textarea
                type="text"
                placeholder="Write about yourself"
                className=" border w-full p-2 rounded-md "
              />
            </div>
          </div>

          <div className="field ps-5 pb-5 ">
            <button className="border p-3 rounded-md text-sm bg-emerald-400 text-white ps-4 pr-4 hover:bg-emerald-500 ">
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
