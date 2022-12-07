// import { useContext } from "react";
// import { AppContext } from "./context";
import styled from "styled-components";
import { Button } from "../../../../Styles/Button";
import { NavLink } from "react-router-dom";
import CardSection from "../CardSection/CardSection";
// import Hero from "./Sections/HeroSection/Hero";

const Hero = ({ name, image }) => {
  const data = {
    name: "Tejas & Co",
    image: "./images/HomePage/hero1.svg",
  };

  return (
    <div>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">Tejas and Co.</p>
            <h1 className="hero-heading">{name}</h1>
            <p className="hero-para">Welcome to Tejas and Co.</p>
            <Button className="btn signUp-btn">
              <NavLink to="/signUp">SignUp</NavLink>
            </Button>
          </div>
          {/*For Hero-image*/}
          <div className="section-hero-image">
            <picture>
              <img src={data.image} alt="heroImage" className="hero-img" />
            </picture>
          </div>
        </div>
      </Wrapper>
      <CardSection />
    </div>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default Hero;
