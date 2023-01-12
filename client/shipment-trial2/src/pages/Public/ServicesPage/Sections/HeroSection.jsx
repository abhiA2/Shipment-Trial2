import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeroImage from "../../../../../assets/img/ServicesHero2.jpg";
const HeroSection = () => {
  return (
    <Wrapper>
      <div className="home">
        <div className="hero-image">
          <img src={HeroImage} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .home {
    position: relative;
  }
  .home .hero-image {
    margin: 0;
    height: 40vh;
    width: 100wh;
  }
  @media screen and (max-width: 768px) {
    .home .container {
      flex-direction: column;
    }
    .home p {
      padding: 0;
    }
    .home .container img {
      margin-top: 50px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
  }
`;

export default HeroSection;
