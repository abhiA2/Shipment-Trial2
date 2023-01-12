import React, { useState } from "react";
import "./navbar2.css";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>S</span>hip
            <span>N</span>
            <span></span>Stocks
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">services</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
            <li>
              <a href="/register">SignUp</a>
            </li>
            <li>
              <a href="/login">SignIn</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <div className="hamburger-menu">
            <Link to onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
