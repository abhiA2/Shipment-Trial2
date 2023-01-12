import Back from "../../../../../components/common/Back";
import Heading from "../../../../../components/common/Heading";
import "./HeroSection.css";
import styled from "styled-components";
import HeroImage from "../../../../../images/HeroSlider1.jpg";
const HeroSection = () => {
  return (
    // <div className="hero-image">
    //   <img src={HeroImage} alt="hero-Image" />
    //   <div className="hero-text">
    //     <h1>Welcome To Home Page</h1>
    //     <button>Know more</button>
    //   </div>
    // </div>
    <Wrapper>
      <div className="home">
        <Back name="Ship N Stock" title="We are here" cover={HeroImage} />
        <div>
          <Heading
            title="Providing you with the best"
            subtitle="Welcome to Services Page"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .home {
    margin-bottom: 120px;
    padding: 8;
    margin: 5;
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
