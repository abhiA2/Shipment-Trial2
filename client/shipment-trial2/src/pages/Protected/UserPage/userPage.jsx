// import React from "react";
// import Orders from "../Orders/orders";
// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./Sidebar/sidebar";
// import "./dashboard.css";
// const Dashboard = () => {
//   return (
//     <div id="outer-container">
//       <div id="sidebar">
//         <Sidebar />
//       </div>
//       {/* <div id="content"> */}
//       <Routes>
//         <Route path="/orders" element={<Orders />} />
//       </Routes>
//       {/* </div> */}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
// import "./userPage.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/sidebar";
// import MainContent from "./MainContent/MainContent";

const UserPage = ({ activeLink }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {/* <MainContent activeLink={activeLink} /> */}
    </div>
  );
};

export default UserPage;
