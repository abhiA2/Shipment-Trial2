import React from "react";
import styled from "styled-components";
import Heading from "../../../../../components/common/Heading";
import { awards } from "../../../../../components/data/data";

const Awards = () => {
  return (
    <Wrapper className="section">
      <section className="awards padding">
        <div className="container">
          <Heading
            title="Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services"
            subtitle="Our Awards"
          />

          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .awards {
    background-color: #122947;
    color: #fff;
    text-align: center;
  }
  .awards .heading {
    color: #fff;
    display: flex;
    flex-direction: column-reverse;
  }
  .awards .heading p {
    color: #fff;
  }
  .awards .heading h1 {
    color: #fff;
    font-size: 30px;
    font-weight: 400;
  }
  .awards .icon {
    width: 100px;
    height: 100px;
    line-height: 100px;
    margin: auto;
    margin-top: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4% 50%;
    font-size: 32px;
    color: #ffffff;
  }
  .awards h1 {
    font-size: 50px;
  }
  .awards p {
    color: grey;
  }
`;

export default Awards;
