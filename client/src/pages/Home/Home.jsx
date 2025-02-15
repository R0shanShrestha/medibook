import React from "react";

import Herosection from "./Herosection";
import Section from "../../components/Section";
import TopDoctorSection from "./TopDoctorSection";
import Banner from "./Banner";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Herosection />
      {/* <div className="border-b border-b-slate-300 pt-10"></div> */}
      <Section />
      <TopDoctorSection />
      <Banner />
      <Footer/>
    </>
  );
};

export default Home;
