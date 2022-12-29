import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import store from "../store/index";
const Navbar = () => {
  const Nav = styled.nav`
    .navbar-list {
      grid-area: nav;
      display: grid;
      grid-template-columns: repeat(6, auto);
      align-items: center;
      justify-content: center;
      gap: 4.8rem;
      li {
        list-style: none;
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
  `;

  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/register">
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/login">
              SignIn
            </NavLink>
          </li>
          <li>
            {/* <span
              className="navbar-link"
              onClick={() => store.dispatch({ type: "LOGOUT" })}
            >
              LOGOUT
            </span> */}
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
