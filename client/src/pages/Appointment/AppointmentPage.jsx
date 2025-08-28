import { CheckCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { FcAbout } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContextProvider } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import RelatedDoc from "../Doctor/RelatedDoc";
import Loading from "../../components/Loading/Loading";

const AppointmentPage = () => {
  // Doctor info with param
  const { doctorId } = useParams();
  const { Doctors, backendUri, getDoctorsData, token } =
    useContext(AppContextProvider);
  const [docDetails, setDocDetails] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchDocInfo = async () => {
    if (!Doctors.length) {
      // Fetch doctors if not already loaded
      getDoctorsData();
      return;
    }
    const docDetails = Doctors.find((doc) => doc._id == doctorId);
    setDocDetails(docDetails);
  };

  //
  const [doctorSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTIme] = useState("");
  const daysofWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getAvailableSlots = async () => {
    if (!docDetails || !docDetails.slots_booked) return; // ⬅️ prevent crash

    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeslots = [];

      while (currentDate < endTime) {
        let timeFormat = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        const slotDate = day + "_" + month + "_" + year;
        const slotTime = timeFormat;

        const isSlotAvailable = docDetails.slots_booked?.[slotDate]?.includes(
          slotTime
        )
          ? false
          : true;

        if (isSlotAvailable) {
          timeslots.push({
            datetime: new Date(currentDate),
            time: timeFormat,
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((pre) => [...pre, timeslots]);
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login required to Book Appointment");
    }

    try {
      const date = doctorSlots[slotIndex][0].datetime;

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      const slotDate = day + "_" + month + "_" + year;
      if (!slotDate || !slotTime) {
        toast.warn("Date & Time Must Selected");
      } else {
        setLoading(true);

        const { data } = await axios.post(
          backendUri + "/api/user/book-appointment",
          {
            docId: doctorId,
            slotDate,
            slotTime,
          },
          {
            headers: { token },
          }
        );
        if (data.success) {
          toast.success(data.message);
          getDoctorsData();
          setLoading(false);

          nav("/my-appointment");
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctorId, Doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [docDetails]);

  return (
    <div className="flex p-1 flex-col w-full overflow-hidden">
      <div className="flex lg:w-[70%] p-10 w-full mx-auto flex-col">
        <div className="md:p-10 flex md:flex-row flex-col gap-5 md:w-full w-full ">
          <div className="imgBox w-full md:w-[300px] h-[250px] rounded-md ">
            <img
              src={docDetails?.image}
              alt="Not found"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="DocInfo flex border flex-col w-full p-5 rounded-md gap-4 justify-center">
            <div className="text-emerald-800 ">
              <h1 className="font-semibold text-xl flex items-center gap-5">
                {docDetails?.name}
                <span className="text-emerald-600">
                  <CheckCircle size={15} />
                </span>
              </h1>
              <div className="font-medium text-slate-500  items-center text-sm flex gap-3">
                <p className="">
                  {docDetails?.education}-{docDetails?.specializedIn}
                </p>
                <span className="p-2 text-sm rounded-xl">
                  {docDetails?.experience}
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-wrap gap-2">
              <h4 className="flex font-bold text-slate-700 items-center gap-5">
                About <FcAbout />
              </h4>
              <p className="text-sm font-light text-gray-800">
                {docDetails?.bio}
              </p>
            </div>

            <div className="text-slate-700 font-medium">
              <p>
                Appointment fee:{" "}
                <span className="font-bold text-red-400">
                  {docDetails?.fee}
                </span>
              </p>
            </div>
          </div>
        </div>

        {!isLoading && (
          <div className="lg:p-10 flex flex-col lg:items-end">
            <div className="p-5 lg:w-[80%] flex flex-col gap-2">
              <div className="title">
                <h1 className="text-slate-500 font-medium text-xl">
                  Booking Slots
                </h1>
              </div>

              <div className="DateBlock w-full flex items-center flex-wrap">
                {doctorSlots.length &&
                  doctorSlots.map((item, idx) => {
                    return (
                      <div className="dateB p-2 w-fit cursor-pointer" key={idx}>
                        <p
                          className={`rounded-xl border text-sm flex flex-col justify-center "bg-emerald-300  items-center p-2.5 ${
                            slotIndex === idx
                              ? "bg-emerald-800 text-white"
                              : "hover:bg-emerald-800 hover:text-white"
                          } `}
                          onClick={() => setSlotIndex(idx)}
                        >
                          {/*  */}
                          <span>
                            {item[0] && daysofWeek[item[0].datetime.getDay()]}
                          </span>
                          <span>{item[0] && item[0].datetime.getDate()}</span>
                        </p>
                      </div>
                    );
                  })}
              </div>

              <div className=" flex TimeBlock w-full  flex-wrap gap-3 flex-col">
                <h1 className="font-medium text-slate-500">Time</h1>
                <div className="flex flex-wrap">
                  {doctorSlots.length &&
                    doctorSlots[slotIndex].map((item, idx) => (
                      <div className="dateB p-2 w-fit cursor-pointer" key={idx}>
                        <p
                          className={`rounded-3xl border text-sm flex flex-col justify-center items-center p-2 ps-4 pr-4 ${
                            item.time === slotTime
                              ? "bg-emerald-800 text-white"
                              : "hover:bg-emerald-800 hover:text-white"
                          }`}
                          onClick={() => setSlotTIme(item.time)}
                        >
                          <span>{item.time.toLowerCase()}</span>
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bookingBtn w-full p-5">
                {!isLoading && (
                  <button
                    onClick={() => {
                      bookAppointment();
                    }}
                    className="p-4 font-medium w-full md:w-fit rounded-xl ps-6 pr-6 text-sm bg-emerald-800 text-white hover:bg-emerald-900"
                  >
                    Book an appointment
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="lg:p-10 flex flex-col lg:items-end">
            <div className="p-5 lg:w-[80%] items-center justify-center flex flex-col gap-2 ">
              <div className="title">
                <h1 className="text-slate-500 font-medium text-xl">
                  Making A booking Request
                </h1>
              </div>
              <div>
                <Loading />
              </div>
            </div>
          </div>
        )}

        <div className="relateDoctors">
          <div className="p-5 lg:w-[80%] flex flex-col gap-2">
            <div className="title">
              <h1 className="text-slate-500 font-medium text-xl">
                Related Doctors
              </h1>
            </div>
            <RelatedDoc
              docId={doctorId}
              specialize={docDetails?.specializedIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
