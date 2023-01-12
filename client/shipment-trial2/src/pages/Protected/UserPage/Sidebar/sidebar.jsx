// import React from "react";
// // import "./sidebar  1.css";
// import Orders from "../../Orders/orders";
// const Sidebar = ({ setActiveLink }) => {
//   const handleClick = (e) => {
//     setActiveLink(e.target.id);
//   };
//   // setActiveLink(null);

//   return (
//     // <div className="sidebar">
//     //   <Link href="#" id="dashboard" onClick={handleClick}>
//     //     Dashboard
//     //   </Link>
//     //   <Link href="#" id="link1" onClick={handleClick}>
//     //     Orders
//     //     {/* <select>
//     //       <option value="heading1">Add</option>
//     //     </select> */}
//     //   </Link>
//     //   <Link href="#" id="link2" onClick={handleClick}>
//     //     Drafts
//     //   </Link>
//     //   <Link href="#" id="link3" onClick={handleClick}>
//     //     OrderStatus
//     //   </Link>
//     // </div>

//     <aside id="sidebar" className="sidebar">
//       <ul className="sidebar-nav" id="sidebar-nav">
//         <li className="nav-item">
//           {" "}
//           <Link className="nav-link " href="#">
//             {" "}
//             <i className="bi bi-grid"></i> <span>Dashboard</span>{" "}
//           </Link>
//         </li>
//         <li className="nav-item">
//           {" "}
//           <Link className="nav-link" href="#" id="link1">
//             {" "}
//             <i className="bi bi-grid"></i> <span>Orders</span>
//           </Link>
//         </li>
//         <li className="nav-item">
//           {" "}
//           <Link className="nav-link " href="#" id="link2">
//             {" "}
//             <i className="bi bi-grid"></i> <span>Drafts</span>
//           </Link>
//         </li>
//         <li className="nav-item">
//           {" "}
//           <Link className="nav-link " href="#" id="link3">
//             {" "}
//             <i className="bi bi-grid"></i> <span>Order Status</span>
//           </Link>
//         </li>

//         {/*
//         <li className="nav-item">
//         {" "}
//         <Link
//         className="nav-link collapsed"
//         data-bs-target="#forms-nav"
//         data-bs-toggle="collapse"
//         href="#"
//         aria-expanded="false"
//         >
//             {" "}
//             <i className="bi bi-journal-text"></i>
//             <span>Forms</span>
//             <i className="bi bi-chevron-down ms-auto"></i>{" "}
//             </Link>
//             <ul
//             id="forms-nav"
//             className="nav-content collapse "
//             data-bs-parent="#sidebar-nav"
//             >
//             <li>
//             {" "}
//             <Link href="forms-elements.html">
//             {" "}
//             <i className="bi bi-circle"></i>
//             <span>Form Elements</span>{" "}
//             </Link>
//             </li>
//             <li>
//             {" "}
//             <Link href="forms-layouts.html">
//             {" "}
//             <i className="bi bi-circle"></i>
//             <span>Form Layouts</span>{" "}
//             </Link>
//             </li>
//             <li>
//             {" "}
//             <Link href="forms-editors.html">
//             {" "}
//             <i className="bi bi-circle"></i>
//             <span>Form Editors</span>{" "}
//             </Link>
//             </li>
//             <li>
//             {" "}
//             <Link href="forms-validation.html">
//             {" "}
//             <i className="bi bi-circle"></i>
//             <span>Form Validation</span>{" "}
//             </Link>
//             </li>
//             </ul>
//             </li>

//             <li className="nav-item">
//             {" "}
//             <Link
//             className="nav-link collapsed"
//             data-bs-target="#tables-nav"
//             data-bs-toggle="collapse"
//             href="#"
//             aria-expanded="false"
//             >
//             {" "}
//             <i className="bi bi-layout-text-window-reverse"></i>
//             <span>Tables</span>
//             <i className="bi bi-chevron-down ms-auto"></i>{" "}
//             </Link>
//             <ul
//             id="tables-nav"
//             className="nav-content collapse "
//             data-bs-parent="#sidebar-nav"
//             >
//             <li>
//             {" "}
//               <Link href="tables-general.html">
//               {" "}
//               <i className="bi bi-circle"></i>
//               <span>General Tables</span>{" "}
//               </Link>
//               </li>
//               <li>
//               {" "}
//               <Link href="tables-data.html">
//               {" "}
//               <i className="bi bi-circle"></i>
//               <span>Data Tables</span>{" "}
//               </Link>
//               </li>
//               </ul>
//               </li>
//               <li className="nav-item">
//               {" "}
//               <Link
//               className="nav-link collapsed"
//               data-bs-target="#charts-nav"
//               data-bs-toggle="collapse"
//               href="#"
//               aria-expanded="false"
//               >
//               {" "}
//               <i className="bi bi-bar-chart"></i>
//               <span>Charts</span>
//               <i className="bi bi-chevron-down ms-auto"></i>{" "}
//               </Link>
//               <ul
//               id="charts-nav"
//               className="nav-content collapse "
//               data-bs-parent="#sidebar-nav"
//               >
//               <li>
//               {" "}
//               <Link href="charts-chartjs.html">
//               {" "}
//               <i className="bi bi-circle"></i>
//               <span>Chart.js</span>{" "}
//               </Link>
//               </li>
//               <li>
//               {" "}
//               <Link href="charts-apexcharts.html">
//               {" "}
//               <i className="bi bi-circle"></i>
//               <span>ApexCharts</span>{" "}
//               </Link>
//               </li>
//               <li>
//               {" "}
//               <Link href="charts-echarts.html">
//               {" "}
//               <i className="bi bi-circle"></i>
//               <span>ECharts</span>{" "}
//               </Link>
//               </li>
//               </ul>
//               </li>
//               <li className="nav-item">
//               {" "}
//               <Link
//               className="nav-link collapsed"
//               data-bs-target="#icons-nav"
//               data-bs-toggle="collapse"
//               href="#"
//               aria-expanded="false"
//               >
//               {" "}
//               <i className="bi bi-gem"></i>
//               <span>Icons</span>
//               <i className="bi bi-chevron-down ms-auto"></i>{" "}
//               </Link>
//               <ul
//               id="icons-nav"
//               className="nav-content collapse "
//               data-bs-parent="#sidebar-nav"
//               >
//               <li>
//               {" "}
//               <Link href="icons-bootstrap.html">
//               {" "}
//               <i className="bi bi-circle"></i>
//               <span>Bootstrap Icons</span>{" "}
//               </Link>
//               </li>
//               <li>
//               {" "}
//               <Link href="icons-remix.html">
//               {" "}
//               <i className="bi bi-circle"></i>
//               <span>Remix Icons</span>{" "}
//               </Link>
//               </li>
//             <li>
//             {" "}
//             <Link href="icons-boxicons.html">
//             {" "}
//             <i className="bi bi-circle"></i>
//             <span>Boxicons</span>{" "}
//             </Link>
//             </li>
//             </ul>
//             </li>
//             <li className="nav-heading">Pages</li>
//             <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="users-profile.html">
//             {" "}
//             <i className="bi bi-person"></i> <span>Profile</span>{" "}
//             </Link>
//             </li>
//             <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-faq.html">
//             {" "}
//             <i className="bi bi-question-circle"></i> <span>F.A.Q</span>{" "}
//             </Link>
//             </li>
//             <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-contact.html">
//             {" "}
//             <i className="bi bi-envelope"></i> <span>Contact</span>{" "}
//             </Link>
//             </li>
//             <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-register.html">
//             {" "}
//             <i className="bi bi-card-list"></i> <span>Register</span>{" "}
//             </Link>
//             </li>
//             <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-login.html">
//             {" "}
//             <i className="bi bi-box-arrow-in-right"></i> <span>Login</span>{" "}
//             </Link>
//             </li>
//             <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-error-404.html">
//             {" "}
//             <i className="bi bi-dash-circle"></i> <span>Error 404</span>{" "}
//             </Link>
//             </li>
//             <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-blank.html">
//             {" "}
//             <i className="bi bi-file-earmark"></i> <span>Blank</span>{" "}
//             </Link>
//           </li> */}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

//Take 2
// import React from "react";
// import { Link } from "react-router-dom";
// const sidebar = () => {
//   return (
//     <div>
//       <aside id="sidebar" className="sidebar">
//         <ul className="sidebar-nav" id="sidebar-nav">
//           <li className="nav-item">
//             {" "}
//             <Link className="nav-link " to="@">
//               {" "}
//               <i className="bi bi-grid"></i> <span>Dashboard</span>{" "}
//             </Link>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link
//               className="nav-link collapsed"
//               data-bs-target="#components-nav"
//               data-bs-toggle="collapse"
//               href="#"
//             >
//               {" "}
//               <i className="bi bi-menu-button-wide"></i>
//               <span>Components</span>
//               <i className="bi bi-chevron-down ms-auto"></i>{" "}
//             </Link>
//             <ul
//               id="components-nav"
//               className="nav-content collapse "
//               data-bs-parent="#sidebar-nav"
//             >
//               <li>
//                 {" "}
//                 <Link href="components-alerts.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Alerts</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-accordion.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Accordion</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-badges.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Badges</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-breadcrumbs.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Breadcrumbs</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-buttons.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Buttons</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-cards.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Cards</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-carousel.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Carousel</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-list-group.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>List group</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-modal.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Modal</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-tabs.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Tabs</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-pagination.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Pagination</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-progress.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Progress</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-spinners.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Spinners</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="components-tooltips.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Tooltips</span>{" "}
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link
//               className="nav-link collapsed"
//               data-bs-target="#forms-nav"
//               data-bs-toggle="collapse"
//               href="#"
//             >
//               {" "}
//               <i className="bi bi-journal-text"></i>
//               <span>Forms</span>
//               <i className="bi bi-chevron-down ms-auto"></i>{" "}
//             </Link>
//             <ul
//               id="forms-nav"
//               className="nav-content collapse "
//               data-bs-parent="#sidebar-nav"
//             >
//               <li>
//                 {" "}
//                 <Link href="forms-elements.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Form Elements</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="forms-layouts.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Form Layouts</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="forms-editors.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Form Editors</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="forms-validation.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Form Validation</span>{" "}
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link
//               className="nav-link collapsed"
//               data-bs-target="#tables-nav"
//               data-bs-toggle="collapse"
//               href="#"
//             >
//               {" "}
//               <i className="bi bi-layout-text-window-reverse"></i>
//               <span>Tables</span>
//               <i className="bi bi-chevron-down ms-auto"></i>{" "}
//             </Link>
//             <ul
//               id="tables-nav"
//               className="nav-content collapse "
//               data-bs-parent="#sidebar-nav"
//             >
//               <li>
//                 {" "}
//                 <Link href="tables-general.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>General Tables</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="tables-data.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Data Tables</span>{" "}
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link
//               className="nav-link collapsed"
//               data-bs-target="#charts-nav"
//               data-bs-toggle="collapse"
//               href="#"
//             >
//               {" "}
//               <i className="bi bi-bar-chart"></i>
//               <span>Charts</span>
//               <i className="bi bi-chevron-down ms-auto"></i>{" "}
//             </Link>
//             <ul
//               id="charts-nav"
//               className="nav-content collapse "
//               data-bs-parent="#sidebar-nav"
//             >
//               <li>
//                 {" "}
//                 <Link href="charts-chartjs.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Chart.js</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="charts-apexcharts.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>ApexCharts</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="charts-echarts.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>ECharts</span>{" "}
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link
//               className="nav-link collapsed"
//               data-bs-target="#icons-nav"
//               data-bs-toggle="collapse"
//               href="#"
//             >
//               {" "}
//               <i className="bi bi-gem"></i>
//               <span>Icons</span>
//               <i className="bi bi-chevron-down ms-auto"></i>{" "}
//             </Link>
//             <ul
//               id="icons-nav"
//               className="nav-content collapse "
//               data-bs-parent="#sidebar-nav"
//             >
//               <li>
//                 {" "}
//                 <Link href="icons-bootstrap.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Bootstrap Icons</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="icons-remix.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Remix Icons</span>{" "}
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href="icons-boxicons.html">
//                   {" "}
//                   <i className="bi bi-circle"></i>
//                   <span>Boxicons</span>{" "}
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li className="nav-heading">Pages</li>
//           <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="users-profile.html">
//               {" "}
//               <i className="bi bi-person"></i> <span>Profile</span>{" "}
//             </Link>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-faq.html">
//               {" "}
//               <i className="bi bi-question-circle"></i> <span>F.A.Q</span>{" "}
//             </Link>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-contact.html">
//               {" "}
//               <i className="bi bi-envelope"></i> <span>Contact</span>{" "}
//             </Link>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-register.html">
//               {" "}
//               <i className="bi bi-card-list"></i> <span>Register</span>{" "}
//             </Link>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-login.html">
//               {" "}
//               <i className="bi bi-box-arrow-in-right"></i> <span>Login</span>{" "}
//             </Link>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-error-404.html">
//               {" "}
//               <i className="bi bi-dash-circle"></i> <span>Error 404</span>{" "}
//             </Link>
//           </li>
//           <li className="nav-item">
//             {" "}
//             <Link className="nav-link collapsed" href="pages-blank.html">
//               {" "}
//               <i className="bi bi-file-earmark"></i> <span>Blank</span>{" "}
//             </Link>
//           </li>
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default sidebar;

//Take 3
// import React, { useState } from "react";
// import Dashboard from "../../Dashboard/dashboard";
// import Orders from "../../Orders/orders";
// import Drafts from "../../Drafts/drafts";
// import "./sidebar3.css";
// const Sidebar = () => {
//   const [activeLink, setActiveLink] = useState("dashboard");
//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div>
//       <div className="sidebar">
//         <ul className="sidebar-links">
//           <li
//             onClick={() => handleLinkClick("dashboard")}
//             className={activeLink === "dashboard" ? "active" : ""}
//           >
//             <a href="#">Dashboard</a>
//           </li>
//           <li
//             onClick={() => handleLinkClick("order")}
//             className={activeLink === "order" ? "active" : ""}
//           >
//             <a href="#">Orders</a>
//           </li>
//           <li
//             onClick={() => handleLinkClick("drafts")}
//             className={activeLink === "drafts" ? "active" : ""}
//           >
//             <a href="#">Draafts</a>
//           </li>
//           <li
//             onClick={() => handleLinkClick("contact")}
//             className={activeLink === "contact" ? "active" : ""}
//           >
//             <a href="#">Order Status</a>
//           </li>
//         </ul>
//       </div>
//       <div className="main-content">
//         {activeLink === "dashboard" && <Dashboard />}
//         {activeLink === "order" && <Orders />}
//         {activeLink === "drafts" && <Drafts />}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

//Take 4
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar1.css";

// import image from "image path";

const Sidebar = (props) => {
  const [isNotActive, setNotActive] = useState("true");
  const [isDropdownActive, setDropdownActive] = useState("false");
  var barsIcon = <i className="fas fa-bars"></i>;
  var crossIcon = <i className="fas fa-times-circle"></i>;
  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className={isNotActive ? "active" : ""}>
          <button
            type="button"
            id="sidebarCollapse"
            onClick={() => setNotActive(!isNotActive)}
            className="btn btn-custom"
          >
            <span className={isNotActive ? "" : "hidden"}>{barsIcon}</span>
            <span className={isNotActive ? "hidden" : ""}>{crossIcon}</span>
          </button>
          <div className="sidebar-header">
            {/* <img
              src={image}
              className="rounded-circle usr-image"
              height={isNotActive ? "20" : "70"}
              width={isNotActive ? "20" : "70"}
            ></img> */}
            <h3>User Name</h3>
          </div>

          <ul className="list-unstyled components">
            <li className="list-item">
              <i className="fas fa-briefcase icon-color"></i>
              <Link to="/members">Members</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-building icon-color"></i>
              <Link to="/organizations">Organizations</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-user-alt icon-color"></i>
              <Link
                to="/portfolio"
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
                onClick={() => setDropdownActive(!isDropdownActive)}
              >
                My Space
              </Link>
              <ul
                className={
                  isDropdownActive ? "list-unstyled  collapse" : "list-unstyled"
                }
                id="homeSubmenu"
              >
                <li className="dropdown-item">
                  <Link to="/portfolio">Portfolio</Link>
                  <a href="#">Portfolio</a>
                </li>
                <li className="dropdown-item">
                  <Link to="/personal-details">Personal Details</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/additional-info">Additional Info</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/personal-background">Personal Background</Link>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <i className="fas fa-history icon-color"></i>
              <Link to="/request-history">Request History</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-sitemap icon-color"></i>
              <Link to="/organization-profile">Organization</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
