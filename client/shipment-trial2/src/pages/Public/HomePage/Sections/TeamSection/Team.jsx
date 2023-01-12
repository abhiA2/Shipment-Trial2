import React from "react";
import Heading from "../../../../../components/common/Heading";
import { team } from "../../../../../components/data/data";
import styled from "styled-components";
import Card1 from "../../../../../images/HomePage/Card1.jpg";
import Carousel from "../../../../../components/common/Carousel/carousel";
const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>
      </section>
      <div className="carousalDiv">
        <Carousel />
      </div>
    </>
  );
};

export default Team;
