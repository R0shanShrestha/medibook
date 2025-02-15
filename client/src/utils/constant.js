import logo from "../assets/Logo/3.png";
import doctor1 from "../assets/Doctors/1.avif";
import doctor2 from "../assets/Doctors/2.webp";
import banner1 from "../assets/Banner/doctoringrp.png";
import advbanner from "../assets/Banner/1.png";
import speciality1 from "../assets/SpecialityImgs/1.jpg";
import speciality2 from "../assets/SpecialityImgs/2.jpg";
import speciality3 from "../assets/SpecialityImgs/3.jpg";
import speciality4 from "../assets/SpecialityImgs/4.webp";
import speciality5 from "../assets/SpecialityImgs/5.jpg";
import speciality6 from "../assets/SpecialityImgs/6.jpg";
// import doctor2 from "";

export const images = [
  {
    logo: logo,
  },
  {
    doctors: [doctor1, doctor2],
  },
  {
    hero: banner1,
  },
  {
    adv: advbanner,
  },
];

export const speciality = [
  {
    label: "dermatologist",
    img: speciality1,
  },
  {
    label: "gynecologist",
    img: speciality2,
  },
  {
    label: "Neurologist",
    img: speciality3,
  },
  {
    label: "General Physician",
    img: speciality6,
  },
  {
    label: "pediatricians",
    img: speciality5,
  },
];

export const TopDoctors = [
  {
    img: doctor1,
    name: "Dr.Cristina Shrestha",
    specilizedIn: "Neurologist",
    stuatus: true,
  },
  {
    img: doctor2,
    name: "Dr.Manabi Shrestha",
    specilizedIn: "dermatologist",
    stuatus: false,
  },
  {
    img: doctor1,
    name: "Dr.Cristina Shrestha",
    specilizedIn: "Neurologist",
    stuatus: true,
  },
  {
    img: doctor2,
    name: "Dr.Manabi Shrestha",
    specilizedIn: "gynecologist",
    stuatus: false,
  },
  {
    img: doctor1,
    name: "Dr.Cristina Shrestha",
    specilizedIn: "General Physician",
    stuatus: true,
  },
];
export const AllDoctors = [
  {
    img: doctor1,
    name: "Dr.Cristina Shrestha",
    specilizedIn: "Neurologist",
    stuatus: true,
    rating: 2,
  },
  {
    img: doctor2,
    name: "Dr.Manabi Shrestha",
    specilizedIn: "gynecologist",
    stuatus: false,
    rating: 1,
  },
  {
    img: doctor1,
    name: "Dr.Cristina Shrestha",
    specilizedIn: "General Physician",
    stuatus: true,
    rating: 1,
  },
  {
    img: doctor2,
    name: "Dr.Manabi Shrestha",
    specilizedIn: "dermatologist",
    stuatus: false,
    rating: 1,
  },
  {
    img: doctor1,
    name: "Dr.Cristina Shrestha",
    specilizedIn: "pediatricians",
    stuatus: true,
    rating: 1,
  },
];
