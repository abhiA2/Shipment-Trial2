import React from "react";
import Heading from "../../../../components/common/Heading";
import { team } from "../../../../components/data/data";
import styled from "styled-components";

const Team = () => {
  return (
    <Wrapper>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />

          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <button className="btn3">{val.list} Listings</button>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location-dot"></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button>
                      <i className="fa fa-envelope"></i>
                      Message
                    </button>
                    <button className="btn4">
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .team .box {
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid rgb(62 28 131 / 10%);
    padding: 2rem;
    transition: 0.5s;
  }
  .team .box:hover {
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
    cursor: pointer;
  }
  .team .details {
    text-align: center;
    margin-top: 30px;
  }
  .team .img {
    width: 90px;
    height: 90px;
    margin: auto;
    position: relative;
  }
  .team img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  .team .img i {
    color: #108be7;
    font-size: 17px;
    position: absolute;
    top: 35px;
    right: -10px;
  }
  .team .img::after {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    width: 110px;
    height: 110px;
    border: 5px solid #edf0f5;
    border-radius: 50%;
  }
  .team label {
    display: inline-block;
    margin-top: 20px;
  }
  .team i {
    color: grey;
    margin-right: 5px;
  }
  .team ul {
    display: inline-block;
    margin-top: 10px;
  }
  .team ul li {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    align-items: center;
    background-color: #f4f5f7;
    border-radius: 50%;
    margin: 5px;
  }
  .team .button {
    margin-top: 20px;
  }
  .team .button i {
    color: white;
    font-size: 20px;
  }
`;

export default Team;
