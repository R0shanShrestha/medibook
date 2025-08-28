import { useContext, useEffect, useState } from "react";
import { AppContextProvider } from "../../context/AppContext";
import DocCard from "./DocCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { images } from "../../utils/constant";
const RelatedDoc = ({ specialize, docId }) => {
  const { Doctors, isLoading } = useContext(AppContextProvider);

  const [relDoc, setRelDoc] = useState([]);

  const fetchRelDoc = async () => {
    const RelDocArr = Doctors.filter(
      (doc) => doc._id != docId && doc.specializedIn == specialize && doc
    );
    setRelDoc(RelDocArr);
  };

  useEffect(() => {
    fetchRelDoc();
  }, [specialize, Doctors, docId]);
  return (
    <div className=" flex gap-30 flex-wrap">
      {isLoading ? (
        <div className="w-full  items-center justify-center flex">
          <img
            src={images.loading}
            alt="Loading ..."
            className="max-w-[400px] object-cover "
          />
        </div>
      ) : relDoc ? (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
        >
          {relDoc.map((doctor, idx) => (
            <SwiperSlide key={idx} style={{ width: "220px" }}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center p-4">
                <DocCard doctor={doctor} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>
          <h1>Related Specializiation Doctor not Found</h1>
        </div>
      )}
    </div>
  );
};

export default RelatedDoc;
