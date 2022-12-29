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
import store from "./store/index";
import Orders from "./pages/Protected/Orders/orders";
import "./App.css";
// import store from "./store";
import { connect } from "react-redux";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import auth from "./api/auth";
import UserPage from "./pages/Protected/UserPage/userPage";
// import { isLogged } from "../../../server/middlewares";

const App = ({ authToken, user, login, logout }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (authToken) {
      // verify the token and set isAuthenticated to true if it is valid
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

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
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <UserPage />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
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

// import React, { useState, useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Routes, Route, Link, useLocation } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// // import Login from "./components/Login";
// // import Register from "./components/Register";
// import About from "./pages/AboutPage/About";
// import Home from "./pages/HomePage/Home";
// import Services from "./pages/Services";

// import Contact from "./pages/ContactPage/Contact";

// import SignUp from "./pages/SignUp/SignUp";

// import SignIn from "./pages/SignIn/SignIn";
// import { ThemeProvider } from "styled-components";

// // import Home from "./components/Home";
// // import Profile from "./components/Profile";
// // import BoardUser from "./components/BoardUser";
// // import BoardModerator from "./components/BoardModerator";
// // import BoardAdmin from "./components/BoardAdmin";

// import { logout } from "./actions/auth";
// import { clearMessage } from "./actions/message";
// import Dashboard from "./pages/Dashboard/Dashboard";

// const App = () => {
//   const theme = {
//     colors: {
//       heading: "rgb(24 24 29)",
//       text: "rgb(24 24 29)",
//       white: "#fff",
//       black: " #212529",
//       helper: "#8490ff",
//       bg: "rgb(249 249 255)",
//       footer_bg: "#0a1435",
//       btn: "rgb(98 84 243)",
//       border: "rgba(98, 84, 243, 0.5)",
//       hr: "#ffffff",
//       gradient:
//         "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
//       shadow:
//         "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
//       shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
//     },
//     media: { mobile: "768px", tab: "998px" },
//   };
//   const [showModeratorBoard, setShowModeratorBoard] = useState(false);
//   const [showAdminBoard, setShowAdminBoard] = useState(false);

//   const { user: currentUser } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   let location = useLocation();

//   useEffect(() => {
//     if (["/login", "/register"].includes(location.pathname)) {
//       dispatch(clearMessage()); // clear message when changing location
//     }
//   }, [dispatch, location]);

//   const logOut = useCallback(() => {
//     dispatch(logout());
//   }, [dispatch]);

//   useEffect(() => {
//     if (currentUser) {
//       setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
//       setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
//     } else {
//       setShowModeratorBoard(false);
//       setShowAdminBoard(false);
//     }
//   }, [currentUser]);

//   return (
//     <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <Link to={"/"} className="navbar-brand">
//           bezKoder
//         </Link>
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to={"/"} className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/about"} className="nav-link">
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/services"} className="nav-link">
//               Services
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/contact"} className="nav-link">
//               Contact
//             </Link>
//           </li>

//           {showModeratorBoard && (
//             <li className="nav-item">
//               <Link to={"/mod"} className="nav-link">
//                 Moderator Board
//               </Link>
//             </li>
//           )}

//           {showAdminBoard && (
//             <li className="nav-item">
//               <Link to={"/admin"} className="nav-link">
//                 Admin Board
//               </Link>
//             </li>
//           )}

//           {currentUser && (
//             <li className="nav-item">
//               <Link to={"/user"} className="nav-link">
//                 User
//               </Link>
//             </li>
//           )}
//         </div>

//         {currentUser ? (
//           <div className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to={"/dashboard"} className="nav-link">
//                 {currentUser.username}
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a href="/login" className="nav-link" onClick={logOut}>
//                 LogOut
//               </a>
//             </li>
//           </div>
//         ) : (
//           <div className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to={"/login"} className="nav-link">
//                 Login
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to={"/signUp"} className="nav-link">
//                 Sign Up
//               </Link>
//             </li>
//           </div>
//         )}
//       </nav>

//       <ThemeProvider theme={theme}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/signUp/" element={<SignUp />} />
//           <Route path="/login" element={<SignIn />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default App;
