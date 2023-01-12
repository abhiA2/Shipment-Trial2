import React from "react";
import styled from "styled-components";
import Heading from "../../../../../components/common/Heading";
import { awards } from "../../../../../components/data/data";
import AwardImage from "../../../../../images/Home-award.jpg";
import "./Awards.css";
const Awards = () => {
  return (
    <div className="award-section-container">
      <h2>Award Title</h2>
      <div className="award-section">
        <div className="award-section__text">
          <ul>
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul>
        </div>
        <div className="award-section__image">
          <img src={AwardImage} alt="Award Image" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
