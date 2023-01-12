import React from "react";
// import Awards from "./Sections/AwardsSection/Awards";
import CardSection from "./Sections/CardSection/CardSection";
// import CoverageSection from "./Sections/CoverageSection/CoverageSection";
import HeroSection from "./Sections/HeroSection/HeroSection";
import Calculator from "./Sections/RateCalculator/Calculator";
import Team from "./Sections/TeamSection/Team";
import PartnersSection from "./Sections/PartnersSection/PartnersSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <CardSection />
      {/* <Awards /> */}
      <Calculator />
      <Team />
      <PartnersSection />
    </div>
  );
};

export default Home;
