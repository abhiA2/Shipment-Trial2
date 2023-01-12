import React from "react";
import Heading from "../../../../../components/common/Heading";
import Back from "../../../../../components/common/Back.jsx";
import img from "../../../../../.././public/images/AboutPage/about.jpg";
import styled from "styled-components";
const HeroSection = () => {
  return (
    <Wrapper>
      <div className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />

        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./images/AboutPage/about.jpg" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .about {
    margin-bottom: 120px;
    padding: 0;
    margin: 0;
  }
  .about .heading {
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
  }
  .about p {
    font-size: 15px;
    padding-right: 30px;
    margin-bottom: 20px;
    line-height: 30px;
  }
  @media screen and (max-width: 768px) {
    .about .container {
      flex-direction: column;
    }
    .about p {
      padding: 0;
    }
    .about .container img {
      margin-top: 50px;
    }
  }
`;

export default HeroSection;
