import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="src/images/logo.jpg" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  height: 80px;
  // display: flex;
  // justify-content: center;
  // align=-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.bg};

  .logo {
    height: 40px;
    width: 40px;
  }
`;

export default Header;
