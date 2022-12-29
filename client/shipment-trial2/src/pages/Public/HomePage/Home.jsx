import React from "react";
import Awards from "./Sections/AwardsSection/Awards";
import Hero from "./Sections/HeroSection/Hero";
import Team from "./Sections/TeamSection/Team";
const Home = () => {
  return (
    <div>
      <Hero />
      <Awards />
      <Team />
    </div>
  );
};

export default Home;
