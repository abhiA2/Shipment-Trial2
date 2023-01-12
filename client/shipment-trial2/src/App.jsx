import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Public/HomePage/Home";
import About from "./pages/Public/AboutPage/About";
import Services from "./pages/Public/ServicesPage/Services";
import Contact from "./pages/Public/ContactPage/Contact";
import Footer from "./components/common/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import SignUp from "./pages/Public/SignUp/SignUp";
import SignIn from "./pages/Public/SignIn/SignIn";
import NotFound from "./pages/NotFound";

import "./App.css";
import { connect } from "react-redux";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import UserPage from "./pages/Protected/UserPage/userPage";

const App = ({ authToken, user, login, logout }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (authToken) {
      // verify the token and set isAuthenticated to true if it is valid
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [authToken]);
  console.log(isAuthenticated);

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/userPage"
            element={
              <ProtectedRoutes>
                <UserPage />
              </ProtectedRoutes>
            }
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

// Map the dispatch functions to props
// for the App component
const mapDispatchToProps = (dispatch) => ({
  login: (authToken, user) => dispatch({ type: "LOGIN", authToken, user }),
  logout: () => dispatch({ type: "LOGOUT" }),
});

// export default App;

// Connect the App component to the store
export default connect(mapStateToProps, mapDispatchToProps)(App);
