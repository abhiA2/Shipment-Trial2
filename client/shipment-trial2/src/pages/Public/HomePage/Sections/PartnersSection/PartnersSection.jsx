import React, { useState, useEffect } from "react";
import Heading from "../../../../../components/common/Heading";
import Logo1 from "../../../../../components/data/Icons/HomePage/Maersk.jpg";
import Logo2 from "../../../../../components/data/Icons/HomePage/Ups.jpg";
import Logo3 from "../../../../../components/data/Icons/HomePage/Ceva.png";
import Logo4 from "../../../../../components/data/Icons/HomePage/Logo3.webp";
import Logo5 from "../../../../../components/data/Icons/HomePage/DHL.png";
import "./PartnersSection.css";

const logos = [
  {
    src: Logo1,
    alt: "Company 1 Logo",
  },
  {
    src: Logo2,
    alt: "Company 2 Logo",
  },
  {
    src: Logo3,
    alt: "Company 3 Logo",
  },
  {
    src: Logo4,
    alt: "Company 4 Logo",
  },
  {
    src: Logo5,
    alt: "Company 5 Logo",
  },
];

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex === logos.length - 1 ? 0 : currentIndex + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="logo-slideshow-container">
      <Heading title="Our Partners" subtitle="Lorem Ipsum" />
      <div className="logo-slideshow">
        <img
          src={logos[currentIndex].src}
          alt={logos[currentIndex].alt}
          className="logo-slideshow__logo"
        />
      </div>
    </div>
  );
};

export default PartnersSection;
