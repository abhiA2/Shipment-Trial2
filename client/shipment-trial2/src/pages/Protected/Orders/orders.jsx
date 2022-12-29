// import React, { useState } from "react";
// import Sidebar from "../Dashboard/Sidebar/sidebar";
// import "./orders.css";
// // import Stepbar from "./Stepbar/stepbar";

// var next_click = document.querySelectorAll(".next_button");
// // console.log(next_click);
// var main_form = document.querySelectorAll(".main");
// var step_list = document.querySelectorAll(".progress-bar li");
// var num = document.querySelector(".step-number");
// let formnumber = 0;

// const Orders = () => {
//   const [firstName, setFirstName] = useState("");

//   next_click.forEach(function (next_click_form) {
//     // console.log(next_click_form);
//     if (next_click_form) {
//       next_click_form.addEventListener("click", function () {
//         if (!validateform()) {
//           return false;
//         }
//         formnumber++;
//         updateform();
//         progress_forward();
//         contentchange();
//       });
//     }
//   });

//   var back_click = document.querySelectorAll(".back_button");
//   back_click.forEach(function (back_click_form) {
//     if (back_click_form) {
//       back_click_form.addEventListener("click", function () {
//         formnumber--;
//         updateform();
//         progress_backward();
//         contentchange();
//       });
//     }
//   });

//   var username = document.querySelector("#user_name");
//   var shownname = document.querySelector(".shown_name");

//   var submit_click = document.querySelectorAll(".submit_button");
//   submit_click.forEach(function (submit_click_form) {
//     if (submit_click_form) {
//       submit_click_form.addEventListener("click", function () {
//         shownname.innerHTML = username.value;
//         formnumber++;
//         updateform();
//       });
//     }
//   });

//   var heart = document.querySelector(".fa-heart");
//   if (heart) {
//     heart.addEventListener("click", function () {
//       heart.classList.toggle("heart");
//     });
//   }

//   var share = document.querySelector(".fa-share-alt");
//   if (share) {
//     share.addEventListener("click", function () {
//       share.classList.toggle("share");
//     });
//   }

//   function updateform() {
//     main_form.forEach(function (mainform_number) {
//       mainform_number.classList.remove("active");
//     });
//     main_form[formnumber].classList.add("active");
//   }

//   function progress_forward() {
//     step_list.forEach((list) => {
//       list.classList.remove("active");
//     });

//     num.innerHTML = formnumber + 1;
//     step_list[formnumber].classList.add("active");
//   }

//   function progress_backward() {
//     var form_num = formnumber + 1;
//     step_list[form_num].classList.remove("active");
//     num.innerHTML = form_num;
//   }

//   var step_num_content = document.querySelectorAll(".step-number-content");

//   function contentchange() {
//     step_num_content.forEach(function (content) {
//       content.classList.remove("active");
//       content.classList.add("d-none");
//     });
//     step_num_content[formnumber].classList.add("active");
//   }

//   function validateform() {
//     var validate = true;
//     var validate_inputs = document.querySelectorAll(".main.active input");
//     validate_inputs.forEach(function (vaildate_input) {
//       vaildate_input.classList.remove("warning");
//       if (vaildate_input.hasAttribute("require")) {
//         if (vaildate_input.value.length == 0) {
//           validate = false;
//           vaildate_input.classList.add("warning");
//         }
//       }
//     });
//     return validate;
//   }

//   return (
//     <div className="container">
//       <div className="card">
//         <div className="form">
//           <div className="left-side">
//             <div className="left-heading"></div>
//             <div className="steps-content"></div>
//             <ul className="progress-bar">
//               <li className="active">Buyer Details</li>
//               <li>Order Details</li>
//               <li>Shipment Details</li>
//               <li>Shipping Partner</li>
//               <li>Place Order</li>
//             </ul>
//           </div>
//           <div className="right-side">
//             {/* <div className="main active">
//               <small>
//                 <i className="fa fa-smile-o"></i>
//               </small>
//               <div className="text">
//                 <h2>Buyer Shipping Details</h2>
//               </div>
//               <div className="input-text">
//                 <div className="input-div">
//                   <input
//                     type="text"
//                     required
//                     require
//                     id="user_name"
//                     onChange={(e) => setFirstName(e.target.value)}
//                     value={firstName}
//                   />
//                   <span htmlFor="user_name">First Name</span>
//                 </div>
//                 <div className="input-div">
//                   <input type="text" />
//                   <span>Last Name</span>
//                 </div>
//               </div>
//               <div className="input-text">
//                 <div className="input-div">
//                   <input type="number" required require />
//                   <span>Phone number</span>
//                 </div>
//                 <div className="input-div">
//                   <input type="text" required require />
//                   <span>E-mail Address</span>
//                 </div>
//               </div>
//               <div className="input-text">
//                 <div className="input-div">
//                   <select>
//                     <option>Select Country</option>
//                     <option>India</option>
//                     <option>France</option>
//                     <option>UK</option>
//                     <option>USA</option>
//                     <option>Germany</option>
//                     <option>Russia</option>
//                     <option>China</option>
//                     <option>Japan</option>
//                     <option>Pakistan</option>
//                   </select>
//                 </div>
//                 <div className="input-div">
//                   <select>
//                     <option>Select City</option>
//                     <option>New Delhi</option>
//                     <option>Paris</option>
//                     <option>London</option>
//                     <option>Washington D.C.</option>
//                     <option>Berlin</option>
//                     <option>Moscow</option>
//                     <option>Bejing</option>
//                     <option>Tokyo</option>
//                     <option>Islamabad</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="buttons">
//                 <button className="next_button">Next Step</button>
//               </div>
//             </div> */}

//             {/* <div
//               className="w-100 row address_section"
//               id="buyer_shipping_details"
//             >
//               <div className="pb-8 pb-lg-10">
//                 <h3 className="fw-bolder d-flex align-items-center text-dark border-end-0">
//                   Buyer Shipping Details
//                 </h3>
//               </div> */}
//             <div className="fv-row row mb-8 fv-plugins-icon-container">
//               <div className="col-lg-4">
//                 <label className="form-label mb-3 required">First Name</label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_firstname"
//                   placeholder=""
//                   value={firstName}
//                   onChange={(e) => e.target.value}
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="col-lg-4">
//                 <label className="form-label mb-3 required">Last name</label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_lastname"
//                   placeholder=""
//                   value=""
//                   onChange={(e) => e.target.value}
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="col-lg-4">
//                 <label className="form-label mb-3 required">Mobile No.</label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_mobile"
//                   id="customer_shipping_mobile"
//                   placeholder=""
//                   value=""
//                   onChange={(e) => e.target.value}
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//             </div>
//             <div className="fv-row row mb-8 fv-plugins-icon-container">
//               <div className="col-lg-4">
//                 <label className="form-label mb-3">Alternate Mobile No.</label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_alternate_mobile"
//                   placeholder=""
//                   value=""
//                   onChange={(e) => e.target.value}
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="col-lg-8">
//                 <label className="form-label mb-3 required">Email Id</label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_email"
//                   placeholder=""
//                   value=""
//                   onChange={() => e.target.value}
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//             </div>
//             <div className="fv-row row mb-8 fv-plugins-icon-container">
//               <div className="col-lg-12">
//                 <label className="form-label mb-3 required">Country</label>
//                 <select
//                   className="form-select form-select-solid select2-hidden-accessible"
//                   data-control="select2"
//                   data-placeholder="Select Country"
//                   name="customer_shipping_country_code"
//                   data-select2-id="select2-data-1-rivz"
//                   tabIndex="-1"
//                   aria-hidden="true"
//                 >
//                   <option data-select2-id="select2-data-3-8ofs"></option>
//                   <option value="AF">Afghanistan (AFG) </option>
//                   <option value="AX">Aland Islands (ALA) </option>
//                   <option value="AL">Albania (ALB) </option>
//                   <option value="DZ">Algeria (DZA) </option>
//                   <option value="AS">American Samoa (ASM) </option>
//                   <option value="AD">Andorra (AND) </option>
//                   <option value="AO">Angola (AGO) </option>
//                   <option value="AI">Anguilla (AIA) </option>
//                   <option value="AQ">Antarctica (ATA) </option>
//                   <option value="AG">Antigua And Barbuda (ATG) </option>
//                   <option value="AR">Argentina (ARG) </option>
//                   <option value="AM">Armenia (ARM) </option>
//                   <option value="AW">Aruba (ABW) </option>
//                   <option value="AU">Australia (AUS) </option>
//                   <option value="AT">Austria (AUT) </option>
//                   <option value="AZ">Azerbaijan (AZE) </option>
//                   <option value="BS">Bahamas The (BHS) </option>
//                   <option value="BH">Bahrain (BHR) </option>
//                   <option value="BD">Bangladesh (BGD) </option>
//                   <option value="BB">Barbados (BRB) </option>
//                   <option value="BY">Belarus (BLR) </option>
//                   <option value="BE">Belgium (BEL) </option>
//                   <option value="BZ">Belize (BLZ) </option>
//                   <option value="BJ">Benin (BEN) </option>
//                   <option value="BM">Bermuda (BMU) </option>
//                   <option value="BT">Bhutan (BTN) </option>
//                   <option value="BO">Bolivia (BOL) </option>
//                   <option value="BA">Bosnia and Herzegovina (BIH) </option>
//                   <option value="BW">Botswana (BWA) </option>
//                   <option value="BV">Bouvet Island (BVT) </option>
//                   <option value="BR">Brazil (BRA) </option>
//                   <option value="IO">
//                     British Indian Ocean Territory (IOT){" "}
//                   </option>
//                   <option value="BN">Brunei (BRN) </option>
//                   <option value="BG">Bulgaria (BGR) </option>
//                   <option value="BF">Burkina Faso (BFA) </option>
//                   <option value="BI">Burundi (BDI) </option>
//                   <option value="KH">Cambodia (KHM) </option>
//                   <option value="CM">Cameroon (CMR) </option>
//                   <option value="CA">Canada (CAN) </option>
//                   <option value="CV">Cape Verde (CPV) </option>
//                   <option value="KY">Cayman Islands (CYM) </option>
//                   <option value="CF">Central African Republic (CAF) </option>
//                   <option value="TD">Chad (TCD) </option>
//                   <option value="CL">Chile (CHL) </option>
//                   <option value="CN">China (CHN) </option>
//                   <option value="CX">Christmas Island (CXR) </option>
//                   <option value="CC">Cocos (Keeling) Islands (CCK) </option>
//                   <option value="CO">Colombia (COL) </option>
//                   <option value="KM">Comoros (COM) </option>
//                   <option value="CG">Congo (COG) </option>
//                   <option value="CD">
//                     Democratic Republic of the Congo (COD){" "}
//                   </option>
//                   <option value="CK">Cook Islands (COK) </option>
//                   <option value="CR">Costa Rica (CRI) </option>
//                   <option value="CI">Cote D'Ivoire (Ivory Coast) (CIV) </option>
//                   <option value="HR">Croatia (HRV) </option>
//                   <option value="CU">Cuba (CUB) </option>
//                   <option value="CY">Cyprus (CYP) </option>
//                   <option value="CZ">Czech Republic (CZE) </option>
//                   <option value="DK">Denmark (DNK) </option>
//                   <option value="DJ">Djibouti (DJI) </option>
//                   <option value="DM">Dominica (DMA) </option>
//                   <option value="DO">Dominican Republic (DOM) </option>
//                   <option value="TL">East Timor (TLS) </option>
//                   <option value="EC">Ecuador (ECU) </option>
//                   <option value="EG">Egypt (EGY) </option>
//                   <option value="SV">El Salvador (SLV) </option>
//                   <option value="GQ">Equatorial Guinea (GNQ) </option>
//                   <option value="ER">Eritrea (ERI) </option>
//                   <option value="EE">Estonia (EST) </option>
//                   <option value="ET">Ethiopia (ETH) </option>
//                   <option value="FK">Falkland Islands (FLK) </option>
//                   <option value="FO">Faroe Islands (FRO) </option>
//                   <option value="FJ">Fiji Islands (FJI) </option>
//                   <option value="FI">Finland (FIN) </option>
//                   <option value="FR">France (FRA) </option>
//                   <option value="GF">French Guiana (GUF) </option>
//                   <option value="PF">French Polynesia (PYF) </option>
//                   <option value="TF">French Southern Territories (ATF) </option>
//                   <option value="GA">Gabon (GAB) </option>
//                   <option value="GM">Gambia The (GMB) </option>
//                   <option value="GE">Georgia (GEO) </option>
//                   <option value="DE">Germany (DEU) </option>
//                   <option value="GH">Ghana (GHA) </option>
//                   <option value="GI">Gibraltar (GIB) </option>
//                   <option value="GR">Greece (GRC) </option>
//                   <option value="GL">Greenland (GRL) </option>
//                   <option value="GD">Grenada (GRD) </option>
//                   <option value="GP">Guadeloupe (GLP) </option>
//                   <option value="GU">Guam (GUM) </option>
//                   <option value="GT">Guatemala (GTM) </option>
//                   <option value="GG">Guernsey and Alderney (GGY) </option>
//                   <option value="GN">Guinea (GIN) </option>
//                   <option value="GW">Guinea-Bissau (GNB) </option>
//                   <option value="GY">Guyana (GUY) </option>
//                   <option value="HT">Haiti (HTI) </option>
//                   <option value="HM">
//                     Heard Island and McDonald Islands (HMD){" "}
//                   </option>
//                   <option value="HN">Honduras (HND) </option>
//                   <option value="HK">Hong Kong S.A.R. (HKG) </option>
//                   <option value="HU">Hungary (HUN) </option>
//                   <option value="IS">Iceland (ISL) </option>
//                   <option value="IN">India (IND) </option>
//                   <option value="ID">Indonesia (IDN) </option>
//                   <option value="IR">Iran (IRN) </option>
//                   <option value="IQ">Iraq (IRQ) </option>
//                   <option value="IE">Ireland (IRL) </option>
//                   <option value="IL">Israel (ISR) </option>
//                   <option value="IT">Italy (ITA) </option>
//                   <option value="JM">Jamaica (JAM) </option>
//                   <option value="JP">Japan (JPN) </option>
//                   <option value="JE">Jersey (JEY) </option>
//                   <option value="JO">Jordan (JOR) </option>
//                   <option value="KZ">Kazakhstan (KAZ) </option>
//                   <option value="KE">Kenya (KEN) </option>
//                   <option value="KI">Kiribati (KIR) </option>
//                   <option value="KP">North Korea (PRK) </option>
//                   <option value="KR">South Korea (KOR) </option>
//                   <option value="KW">Kuwait (KWT) </option>
//                   <option value="KG">Kyrgyzstan (KGZ) </option>
//                   <option value="LA">Laos (LAO) </option>
//                   <option value="LV">Latvia (LVA) </option>
//                   <option value="LB">Lebanon (LBN) </option>
//                   <option value="LS">Lesotho (LSO) </option>
//                   <option value="LR">Liberia (LBR) </option>
//                   <option value="LY">Libya (LBY) </option>
//                   <option value="LI">Liechtenstein (LIE) </option>
//                   <option value="LT">Lithuania (LTU) </option>
//                   <option value="LU">Luxembourg (LUX) </option>
//                   <option value="MO">Macau S.A.R. (MAC) </option>
//                   <option value="MK">Macedonia (MKD) </option>
//                   <option value="MG">Madagascar (MDG) </option>
//                   <option value="MW">Malawi (MWI) </option>
//                   <option value="MY">Malaysia (MYS) </option>
//                   <option value="MV">Maldives (MDV) </option>
//                   <option value="ML">Mali (MLI) </option>
//                   <option value="MT">Malta (MLT) </option>
//                   <option value="IM">Man (Isle of) (IMN) </option>
//                   <option value="MH">Marshall Islands (MHL) </option>
//                   <option value="MQ">Martinique (MTQ) </option>
//                   <option value="MR">Mauritania (MRT) </option>
//                   <option value="MU">Mauritius (MUS) </option>
//                   <option value="YT">Mayotte (MYT) </option>
//                   <option value="MX">Mexico (MEX) </option>
//                   <option value="FM">Micronesia (FSM) </option>
//                   <option value="MD">Moldova (MDA) </option>
//                   <option value="MC">Monaco (MCO) </option>
//                   <option value="MN">Mongolia (MNG) </option>
//                   <option value="ME">Montenegro (MNE) </option>
//                   <option value="MS">Montserrat (MSR) </option>
//                   <option value="MA">Morocco (MAR) </option>
//                   <option value="MZ">Mozambique (MOZ) </option>
//                   <option value="MM">Myanmar (MMR) </option>
//                   <option value="NA">Namibia (NAM) </option>
//                   <option value="NR">Nauru (NRU) </option>
//                   <option value="NP">Nepal (NPL) </option>
//                   <option value="BQ">
//                     Bonaire, Sint Eustatius and Saba (BES){" "}
//                   </option>
//                   <option value="NL">Netherlands (NLD) </option>
//                   <option value="NC">New Caledonia (NCL) </option>
//                   <option value="NZ">New Zealand (NZL) </option>
//                   <option value="NI">Nicaragua (NIC) </option>
//                   <option value="NE">Niger (NER) </option>
//                   <option value="NG">Nigeria (NGA) </option>
//                   <option value="NU">Niue (NIU) </option>
//                   <option value="NF">Norfolk Island (NFK) </option>
//                   <option value="MP">Northern Mariana Islands (MNP) </option>
//                   <option value="NO">Norway (NOR) </option>
//                   <option value="OM">Oman (OMN) </option>
//                   <option value="PK">Pakistan (PAK) </option>
//                   <option value="PW">Palau (PLW) </option>
//                   <option value="PS">
//                     Palestinian Territory Occupied (PSE){" "}
//                   </option>
//                   <option value="PA">Panama (PAN) </option>
//                   <option value="PG">Papua new Guinea (PNG) </option>
//                   <option value="PY">Paraguay (PRY) </option>
//                   <option value="PE">Peru (PER) </option>
//                   <option value="PH">Philippines (PHL) </option>
//                   <option value="PN">Pitcairn Island (PCN) </option>
//                   <option value="PL">Poland (POL) </option>
//                   <option value="PT">Portugal (PRT) </option>
//                   <option value="PR">Puerto Rico (PRI) </option>
//                   <option value="QA">Qatar (QAT) </option>
//                   <option value="RE">Reunion (REU) </option>
//                   <option value="RO">Romania (ROU) </option>
//                   <option value="RU">Russia (RUS) </option>
//                   <option value="RW">Rwanda (RWA) </option>
//                   <option value="SH">Saint Helena (SHN) </option>
//                   <option value="KN">Saint Kitts And Nevis (KNA) </option>
//                   <option value="LC">Saint Lucia (LCA) </option>
//                   <option value="PM">Saint Pierre and Miquelon (SPM) </option>
//                   <option value="VC">
//                     Saint Vincent And The Grenadines (VCT){" "}
//                   </option>
//                   <option value="BL">Saint-Barthelemy (BLM) </option>
//                   <option value="MF">Saint-Martin (French part) (MAF) </option>
//                   <option value="WS">Samoa (WSM) </option>
//                   <option value="SM">San Marino (SMR) </option>
//                   <option value="ST">Sao Tome and Principe (STP) </option>
//                   <option value="SA">Saudi Arabia (SAU) </option>
//                   <option value="SN">Senegal (SEN) </option>
//                   <option value="RS">Serbia (SRB) </option>
//                   <option value="SC">Seychelles (SYC) </option>
//                   <option value="SL">Sierra Leone (SLE) </option>
//                   <option value="SG">Singapore (SGP) </option>
//                   <option value="SK">Slovakia (SVK) </option>
//                   <option value="SI">Slovenia (SVN) </option>
//                   <option value="SB">Solomon Islands (SLB) </option>
//                   <option value="SO">Somalia (SOM) </option>
//                   <option value="ZA">South Africa (ZAF) </option>
//                   <option value="GS">South Georgia (SGS) </option>
//                   <option value="SS">South Sudan (SSD) </option>
//                   <option value="ES">Spain (ESP) </option>
//                   <option value="LK">Sri Lanka (LKA) </option>
//                   <option value="SD">Sudan (SDN) </option>
//                   <option value="SR">Suriname (SUR) </option>
//                   <option value="SJ">
//                     Svalbard And Jan Mayen Islands (SJM){" "}
//                   </option>
//                   <option value="SZ">Swaziland (SWZ) </option>
//                   <option value="SE">Sweden (SWE) </option>
//                   <option value="CH">Switzerland (CHE) </option>
//                   <option value="SY">Syria (SYR) </option>
//                   <option value="TW">Taiwan (TWN) </option>
//                   <option value="TJ">Tajikistan (TJK) </option>
//                   <option value="TZ">Tanzania (TZA) </option>
//                   <option value="TH">Thailand (THA) </option>
//                   <option value="TG">Togo (TGO) </option>
//                   <option value="TK">Tokelau (TKL) </option>
//                   <option value="TO">Tonga (TON) </option>
//                   <option value="TT">Trinidad And Tobago (TTO) </option>
//                   <option value="TN">Tunisia (TUN) </option>
//                   <option value="TR">Turkey (TUR) </option>
//                   <option value="TM">Turkmenistan (TKM) </option>
//                   <option value="TC">Turks And Caicos Islands (TCA) </option>
//                   <option value="TV">Tuvalu (TUV) </option>
//                   <option value="UG">Uganda (UGA) </option>
//                   <option value="UA">Ukraine (UKR) </option>
//                   <option value="AE">United Arab Emirates (ARE) </option>
//                   <option value="GB">United Kingdom (GBR) </option>
//                   <option value="US">
//                     United States (Less than 5kg) (USA){" "}
//                   </option>
//                   <option value="UM">
//                     United States Minor Outlying Islands (UMI){" "}
//                   </option>
//                   <option value="UY">Uruguay (URY) </option>
//                   <option value="UZ">Uzbekistan (UZB) </option>
//                   <option value="VU">Vanuatu (VUT) </option>
//                   <option value="VA">
//                     Vatican City State (Holy See) (VAT){" "}
//                   </option>
//                   <option value="VE">Venezuela (VEN) </option>
//                   <option value="VN">Vietnam (VNM) </option>
//                   <option value="VG">Virgin Islands (British) (VGB) </option>
//                   <option value="VI">Virgin Islands (US) (VIR) </option>
//                   <option value="WF">Wallis And Futuna Islands (WLF) </option>
//                   <option value="EH">Western Sahara (ESH) </option>
//                   <option value="YE">Yemen (YEM) </option>
//                   <option value="ZM">Zambia (ZMB) </option>
//                   <option value="ZW">Zimbabwe (ZWE) </option>
//                   <option value="XK">Kosovo (XKX) </option>
//                   <option value="CW">Curaçao (CUW) </option>
//                   <option value="SX">Sint Maarten (Dutch part) (SXM) </option>
//                   <option value="S1">
//                     United States USA 5kg+ Zone 1 (Zip Codes 01000 to 20000
//                     Only) (US1){" "}
//                   </option>
//                   <option value="S2">
//                     United States USA 5kg+ Zone 2 (Zip Codes 20001 to 50000
//                     Only) (US2){" "}
//                   </option>
//                   <option value="S3">
//                     United States USA 5kg+ Zone 3 (Zip Codes 50001 to 99000
//                     Only) (US3){" "}
//                   </option>
//                   <option value="SP">
//                     United States USA 5kg+ (Pre Labelled, Linehaul &amp;
//                     Handover Only) (USP){" "}
//                   </option>
//                 </select>
//                 {/* <span
//                     className="select2 select2-container select2-container--bootstrap5"
//                     dir="ltr"
//                     data-select2-id="select2-data-2-ebsw"
//                     style="width: 100%;"
//                   >
//                     <span className="selection">
//                       <span
//                         className="select2-selection select2-selection--single form-select form-select-solid"
//                         role="combobox"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                         tabIndex="0"
//                         aria-disabled="false"
//                         aria-labelledby="select2-customer_shipping_country_code-5e-container"
//                         aria-controls="select2-customer_shipping_country_code-5e-container"
//                       >
//                         <span
//                           className="select2-selection__rendered"
//                           id="select2-customer_shipping_country_code-5e-container"
//                           role="textbox"
//                           aria-readonly="true"
//                           title="Select Country"
//                         >
//                           <span className="select2-selection__placeholder">
//                             Select Country
//                           </span>
//                         </span>
//                         <span
//                           className="select2-selection__arrow"
//                           role="presentation"
//                         >
//                           <b role="presentation"></b>
//                         </span>
//                       </span>
//                     </span>
//                     <span
//                       className="dropdown-wrapper"
//                       aria-hidden="true"
//                     ></span>
//                   </span> */}
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//             </div>
//             <div
//               className="fv-row row mb-8 fv-plugins-icon-container"
//               id="billing_additional"
//             >
//               <div className="col-lg-6">
//                 <label className="form-label mb-3 required">
//                   <span className="label_address">Address 1</span>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_address"
//                   placeholder=""
//                   value=""
//                   onChange={(e) => e.target.value}
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="col-lg-6">
//                 <label className="form-label mb-3">
//                   <span className="label_address_2">Landmark</span>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_address_2"
//                   placeholder=""
//                   value=""
//                   onChange={(e) => e.target.value}
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//             </div>
//             <div className="fv-row row mb-8 fv-plugins-icon-container">
//               <div className="col-lg-12">
//                 <label className="form-label mb-3 required">
//                   <span className="label_address_3">Address 2</span>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_address_3"
//                   placeholder=""
//                   value=""
//                   onChange={(e) => e.target.value}
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//             </div>
//             <div className="fv-row row mb-8 fv-plugins-icon-container">
//               <div className="col-lg-4">
//                 <label className="form-label mb-3 required">Pincode</label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_postcode"
//                   placeholder=""
//                   value=""
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="col-lg-4">
//                 <label className="form-label mb-3 required">City</label>
//                 <input
//                   type="text"
//                   className="form-control form-control"
//                   name="customer_shipping_city"
//                   placeholder=""
//                   value=""
//                 />
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="col-lg-4">
//                 <label className="form-label mb-3 required">State</label>
//                 <select
//                   className="form-select form-select-solid select2-hidden-accessible"
//                   data-control="select2"
//                   data-placeholder="Select State"
//                   id="customer_shipping_state_id"
//                   name="customer_shipping_state_id"
//                   data-select2-id="select2-data-customer_shipping_state_id"
//                   tabIndex="-1"
//                   aria-hidden="true"
//                 ></select>
//                 {/* <span
//                     className="select2 select2-container select2-container--bootstrap5"
//                     dir="ltr"
//                     data-select2-id="select2-data-4-l6zh"
//                     style="width: 100%;"
//                   >
//                     <span className="selection">
//                       <span
//                         className="select2-selection select2-selection--single form-select form-select-solid"
//                         role="combobox"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                         tabIndex="0"
//                         aria-disabled="false"
//                         aria-labelledby="select2-customer_shipping_state_id-container"
//                         aria-controls="select2-customer_shipping_state_id-container"
//                       >
//                         <span
//                           className="select2-selection__rendered"
//                           id="select2-customer_shipping_state_id-container"
//                           role="textbox"
//                           aria-readonly="true"
//                           title="Select State"
//                         >
//                           <span className="select2-selection__placeholder">
//                             Select State
//                           </span>
//                         </span>
//                         <span
//                           className="select2-selection__arrow"
//                           role="presentation"
//                         >
//                           <b role="presentation"></b>
//                         </span>
//                       </span>
//                     </span>
//                     <span
//                       className="dropdown-wrapper"
//                       aria-hidden="true"
//                     ></span>
//                   </span> */}
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//             </div>
//             <div className="fv-row mb-8 fv-plugins-icon-container">
//               <label className="form-check form-check-custom form-check-solid">
//                 <input
//                   className="form-check-input"
//                   checked=""
//                   type="checkbox"
//                   name="customer_shipping_billing_same"
//                   onChange={(e) => e.target.value}
//                 />
//                 <span className="form-check-label fw-bold">
//                   Shipping &amp; Billing Address are same.
//                 </span>
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </label>
//             </div>
//             <div className="buttons">
//               <button className="next_button">Next Step</button>
//             </div>
//           </div>

//           <div className="main">
//             <small>
//               <i className="fa fa-smile-o"></i>
//             </small>
//             <div className="text">
//               <h2>Education</h2>
//               <p>Inform companies about your education life.</p>
//             </div>
//             <div className="input-text">
//               <div className="input-div">
//                 <input type="text" required require />
//                 <span>School Name</span>
//               </div>
//               <div className="input-div">
//                 <input type="text" required require />
//                 <span>Board Name</span>
//               </div>
//             </div>
//             <div className="input-text">
//               <div className="input-div">
//                 <input type="text" required require />
//                 <span>College/University name</span>
//               </div>
//             </div>
//             <div className="input-text">
//               <div className="input-div">
//                 <select>
//                   <option>Select Course</option>
//                   <option>BCA</option>
//                   <option>B-TECH</option>
//                   <option>BA</option>
//                   <option>B-COM</option>
//                   <option>B-SC</option>
//                   <option>MBA</option>
//                   <option>MCA</option>
//                   <option>M-COM</option>
//                   <option>M-TECH</option>
//                 </select>
//               </div>
//             </div>
//             <div className="buttons button_space">
//               <button className="back_button">Back</button>
//               <button className="next_button">Next Step</button>
//             </div>
//           </div>
//           <div className="main">
//             <small>
//               <i className="fa fa-smile-o"></i>
//             </small>
//             <div className="text">
//               <h2>Work Experiences</h2>
//               <p>Can you talk about your past work experience?</p>
//             </div>
//             <div className="input-text">
//               <div className="input-div">
//                 <input type="text" required require />
//                 <span>Experience 1</span>
//               </div>
//               <div className="input-div">
//                 <input type="text" required require />
//                 <span>Position</span>
//               </div>
//             </div>
//             <div className="input-text">
//               <div className="input-div">
//                 <input type="text" required />
//                 <span>Experience 2</span>
//               </div>
//               <div className="input-div">
//                 <input type="text" required />
//                 <span>Position</span>
//               </div>
//             </div>
//             <div className="input-text">
//               <div className="input-div">
//                 <input type="text" required />
//                 <span>Experience 3</span>
//               </div>
//               <div className="input-div">
//                 <input type="text" required />
//                 <span>Position</span>
//               </div>
//             </div>
//             <div className="buttons button_space">
//               <button className="back_button">Back</button>
//               <button className="next_button">Next Step</button>
//             </div>
//           </div>

//           <div className="main">
//             <small>
//               <i className="fa fa-smile-o"></i>
//             </small>
//             <div className="text">
//               <h2>User Photo</h2>
//               <p>Upload your profile picture and share yourself.</p>
//             </div>
//             <div className="user_card">
//               <span></span>
//               <div className="circle">
//                 <span>
//                   <img src="https://i.imgur.com/hnwphgM.jpg" />
//                 </span>
//               </div>
//               <div className="social">
//                 <span>
//                   <i className="fa fa-share-alt"></i>
//                 </span>
//                 <span>
//                   <i className="fa fa-heart"></i>
//                 </span>
//               </div>
//               <div className="user_name">
//                 <h3>Peter Hawkins</h3>
//                 <div className="detail">
//                   <p>
//                     <a href="#">Izmar,Turkey</a>Hiring
//                   </p>
//                   <p>17 last day . 94Apply</p>
//                 </div>
//               </div>
//             </div>
//             <div className="buttons button_space">
//               <button className="back_button">Back</button>
//               <button className="submit_button">Submit</button>
//             </div>
//           </div>
//           <div className="main">
//             <svg
//               className="checkmark"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 52 52"
//             >
//               <circle
//                 className="checkmark__circle"
//                 cx="26"
//                 cy="26"
//                 r="25"
//                 fill="none"
//               />
//               <path
//                 className="checkmark__check"
//                 fill="none"
//                 d="M14.1 27.2l7.1 7.2 16.7-16.8"
//               />
//             </svg>

//             <div className="text congrats">
//               <h2>Congratulations!</h2>
//               <p>
//                 Thanks Mr./Mrs. <span className="shown_name"></span> your
//                 information have been submitted successfully for the future
//                 reference we will contact you soon.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Orders;

// //Type 2

import React from "react";

const Orders = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Multi Columns Form</h5>
      <form className="row g-3">
        <div className="col-md-12">
          {" "}
          <label for="inputName5" className="form-label">
            Your Name
          </label>{" "}
          <input type="text" className="form-control" id="inputName5" />
        </div>
        <div className="col-md-6">
          {" "}
          <label for="inputEmail5" className="form-label">
            Email
          </label>{" "}
          <input type="email" className="form-control" id="inputEmail5" />
        </div>
        <div className="col-md-6">
          {" "}
          <label for="inputPassword5" className="form-label">
            Password
          </label>{" "}
          <input type="password" className="form-control" id="inputPassword5" />
        </div>
        <div className="col-12">
          {" "}
          <label for="inputAddress5" className="form-label">
            Address
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="inputAddres5s"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          {" "}
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          {" "}
          <label for="inputCity" className="form-label">
            City
          </label>{" "}
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          {" "}
          <label for="inputState" className="form-label">
            State
          </label>{" "}
          <select id="inputState" className="form-select">
            <option selected="">Choose...</option>
            <option>...</option>{" "}
          </select>
        </div>
        <div className="col-md-2">
          {" "}
          <label for="inputZip" className="form-label">
            Zip
          </label>{" "}
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            {" "}
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />{" "}
            <label className="form-check-label" for="gridCheck">
              {" "}
              Check me out{" "}
            </label>
          </div>
        </div>
        <div className="text-center">
          {" "}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>{" "}
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
        </div>
      </form>
    </div>

    // <div>
    //   <div
    //     className="content d-flex flex-column flex-column-fluid"
    //     id="kt_content"
    //   >
    //     <div className="post d-flex flex-column-fluid" id="kt_post">
    //       <div id="kt_content_container" className="container-xxl">
    //         <div
    //           className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
    //           id="kt_add_order"
    //           data-kt-stepper="true"
    //         >
    //           <div className="card d-flex flex-center flex-items-center align-items-center flex-row col-lg-3 col-sm-12 me-9">
    //             <div className="card-body">
    //               <div className="stepper-nav">
    //                 <div
    //                   className="stepper-item current"
    //                   data-kt-stepper-element="nav"
    //                   data-kt-stepper-action="step"
    //                 >
    //                   <div className="stepper-line w-30px"></div>
    //                   <div className="stepper-icon w-30px h-30px">
    //                     <i className="stepper-check fas fa-check"></i>
    //                     <span className="stepper-number">1</span>
    //                   </div>
    //                   <div className="stepper-label">
    //                     <h3 className="stepper-title">Buyer Details </h3>
    //                   </div>
    //                 </div>
    //                 <div
    //                   className="stepper-item"
    //                   data-kt-stepper-element="nav"
    //                   data-kt-stepper-action="step"
    //                 >
    //                   <div className="stepper-line w-30px"></div>
    //                   <div className="stepper-icon w-30px h-30px">
    //                     <i className="stepper-check fas fa-check"></i>
    //                     <span className="stepper-number">2</span>
    //                   </div>
    //                   <div className="stepper-label">
    //                     <h3 className="stepper-title">Order Details</h3>
    //                   </div>
    //                 </div>
    //                 <div
    //                   className="stepper-item"
    //                   data-kt-stepper-element="nav"
    //                   data-kt-stepper-action="step"
    //                 >
    //                   <div className="stepper-line w-30px"></div>
    //                   <div className="stepper-icon w-30px h-30px">
    //                     <i className="stepper-check fas fa-check"></i>
    //                     <span className="stepper-number">3</span>
    //                   </div>
    //                   <div className="stepper-label">
    //                     <h3 className="stepper-title">Shipment Details</h3>
    //                   </div>
    //                 </div>
    //                 <div
    //                   className="stepper-item"
    //                   data-kt-stepper-element="nav"
    //                   data-kt-stepper-action="step"
    //                 >
    //                   <div className="stepper-line w-30px"></div>
    //                   <div className="stepper-icon w-30px h-30px">
    //                     <i className="stepper-check fas fa-check"></i>
    //                     <span className="stepper-number">4</span>
    //                   </div>
    //                   <div className="stepper-label">
    //                     <h3 className="stepper-title">Shipping Partner</h3>
    //                   </div>
    //                 </div>
    //                 <div
    //                   className="stepper-item"
    //                   data-kt-stepper-element="nav"
    //                   data-kt-stepper-action="step"
    //                 >
    //                   <div className="stepper-line w-30px"></div>
    //                   <div className="stepper-icon w-30px h-30px">
    //                     <i className="stepper-check fas fa-check"></i>
    //                     <span className="stepper-number">5</span>
    //                   </div>
    //                   <div className="stepper-label">
    //                     <h3 className="stepper-title">Place Order</h3>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="card d-flex flex-row-fluid flex-start">
    //             <form
    //               className="card-body py-10 col-12 px-9"
    //               novalidate="novalidate"
    //               id="add_order"
    //             >
    //               <div className="mb-5">
    //                 <div
    //                   id="addStep1"
    //                   className="flex-column current addStep1 fv-plugins-bootstrap5 fv-plugins-framework"
    //                   data-kt-stepper-element="content"
    //                 >
    //                   <div
    //                     className="w-100 row address_section"
    //                     id="buyer_shipping_details"
    //                   >
    //                     <div className="pb-10 pb-lg-10">
    //                       <h3 className="fw-bolder d-flex align-items-center text-dark border-end-0">
    //                         Buyer Shipping Details
    //                       </h3>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           First Name
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_firstname"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           Last name
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_lastname"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           Mobile No.
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_mobile"
    //                           id="customer_shipping_mobile"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3">
    //                           Alternate Mobile No.
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_alternate_mobile"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-8">
    //                         <label className="form-label mb-3 required">
    //                           Email Id
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_email"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-12">
    //                         <label className="form-label mb-3 required">
    //                           Country
    //                         </label>
    //                         <select
    //                           className="form-select form-select-solid select2-hidden-accessible"
    //                           data-control="select2"
    //                           data-placeholder="Select Country"
    //                           name="customer_shipping_country_code"
    //                           data-select2-id="select2-data-1-vt0h"
    //                           tabindex="-1"
    //                           aria-hidden="true"
    //                         >
    //                           <option data-select2-id="select2-data-3-ts3q"></option>
    //                           <option value="AF">Afghanistan (AFG) </option>
    //                           <option value="AX">Aland Islands (ALA) </option>
    //                           <option value="AL">Albania (ALB) </option>
    //                           <option value="DZ">Algeria (DZA) </option>
    //                           <option value="AS">American Samoa (ASM) </option>
    //                           <option value="AD">Andorra (AND) </option>
    //                           <option value="AO">Angola (AGO) </option>
    //                           <option value="AI">Anguilla (AIA) </option>
    //                           <option value="AQ">Antarctica (ATA) </option>
    //                           <option value="AG">
    //                             Antigua And Barbuda (ATG){" "}
    //                           </option>
    //                           <option value="AR">Argentina (ARG) </option>
    //                           <option value="AM">Armenia (ARM) </option>
    //                           <option value="AW">Aruba (ABW) </option>
    //                           <option value="AU">Australia (AUS) </option>
    //                           <option value="AT">Austria (AUT) </option>
    //                           <option value="AZ">Azerbaijan (AZE) </option>
    //                           <option value="BS">Bahamas The (BHS) </option>
    //                           <option value="BH">Bahrain (BHR) </option>
    //                           <option value="BD">Bangladesh (BGD) </option>
    //                           <option value="BB">Barbados (BRB) </option>
    //                           <option value="BY">Belarus (BLR) </option>
    //                           <option value="BE">Belgium (BEL) </option>
    //                           <option value="BZ">Belize (BLZ) </option>
    //                           <option value="BJ">Benin (BEN) </option>
    //                           <option value="BM">Bermuda (BMU) </option>
    //                           <option value="BT">Bhutan (BTN) </option>
    //                           <option value="BO">Bolivia (BOL) </option>
    //                           <option value="BA">
    //                             Bosnia and Herzegovina (BIH){" "}
    //                           </option>
    //                           <option value="BW">Botswana (BWA) </option>
    //                           <option value="BV">Bouvet Island (BVT) </option>
    //                           <option value="BR">Brazil (BRA) </option>
    //                           <option value="IO">
    //                             British Indian Ocean Territory (IOT){" "}
    //                           </option>
    //                           <option value="BN">Brunei (BRN) </option>
    //                           <option value="BG">Bulgaria (BGR) </option>
    //                           <option value="BF">Burkina Faso (BFA) </option>
    //                           <option value="BI">Burundi (BDI) </option>
    //                           <option value="KH">Cambodia (KHM) </option>
    //                           <option value="CM">Cameroon (CMR) </option>
    //                           <option value="CA">Canada (CAN) </option>
    //                           <option value="CV">Cape Verde (CPV) </option>
    //                           <option value="KY">Cayman Islands (CYM) </option>
    //                           <option value="CF">
    //                             Central African Republic (CAF){" "}
    //                           </option>
    //                           <option value="TD">Chad (TCD) </option>
    //                           <option value="CL">Chile (CHL) </option>
    //                           <option value="CN">China (CHN) </option>
    //                           <option value="CX">
    //                             Christmas Island (CXR){" "}
    //                           </option>
    //                           <option value="CC">
    //                             Cocos (Keeling) Islands (CCK){" "}
    //                           </option>
    //                           <option value="CO">Colombia (COL) </option>
    //                           <option value="KM">Comoros (COM) </option>
    //                           <option value="CG">Congo (COG) </option>
    //                           <option value="CD">
    //                             Democratic Republic of the Congo (COD){" "}
    //                           </option>
    //                           <option value="CK">Cook Islands (COK) </option>
    //                           <option value="CR">Costa Rica (CRI) </option>
    //                           <option value="CI">
    //                             Cote D'Ivoire (Ivory Coast) (CIV){" "}
    //                           </option>
    //                           <option value="HR">Croatia (HRV) </option>
    //                           <option value="CU">Cuba (CUB) </option>
    //                           <option value="CY">Cyprus (CYP) </option>
    //                           <option value="CZ">Czech Republic (CZE) </option>
    //                           <option value="DK">Denmark (DNK) </option>
    //                           <option value="DJ">Djibouti (DJI) </option>
    //                           <option value="DM">Dominica (DMA) </option>
    //                           <option value="DO">
    //                             Dominican Republic (DOM){" "}
    //                           </option>
    //                           <option value="TL">East Timor (TLS) </option>
    //                           <option value="EC">Ecuador (ECU) </option>
    //                           <option value="EG">Egypt (EGY) </option>
    //                           <option value="SV">El Salvador (SLV) </option>
    //                           <option value="GQ">
    //                             Equatorial Guinea (GNQ){" "}
    //                           </option>
    //                           <option value="ER">Eritrea (ERI) </option>
    //                           <option value="EE">Estonia (EST) </option>
    //                           <option value="ET">Ethiopia (ETH) </option>
    //                           <option value="FK">
    //                             Falkland Islands (FLK){" "}
    //                           </option>
    //                           <option value="FO">Faroe Islands (FRO) </option>
    //                           <option value="FJ">Fiji Islands (FJI) </option>
    //                           <option value="FI">Finland (FIN) </option>
    //                           <option value="FR">France (FRA) </option>
    //                           <option value="GF">French Guiana (GUF) </option>
    //                           <option value="PF">
    //                             French Polynesia (PYF){" "}
    //                           </option>
    //                           <option value="TF">
    //                             French Southern Territories (ATF){" "}
    //                           </option>
    //                           <option value="GA">Gabon (GAB) </option>
    //                           <option value="GM">Gambia The (GMB) </option>
    //                           <option value="GE">Georgia (GEO) </option>
    //                           <option value="DE">Germany (DEU) </option>
    //                           <option value="GH">Ghana (GHA) </option>
    //                           <option value="GI">Gibraltar (GIB) </option>
    //                           <option value="GR">Greece (GRC) </option>
    //                           <option value="GL">Greenland (GRL) </option>
    //                           <option value="GD">Grenada (GRD) </option>
    //                           <option value="GP">Guadeloupe (GLP) </option>
    //                           <option value="GU">Guam (GUM) </option>
    //                           <option value="GT">Guatemala (GTM) </option>
    //                           <option value="GG">
    //                             Guernsey and Alderney (GGY){" "}
    //                           </option>
    //                           <option value="GN">Guinea (GIN) </option>
    //                           <option value="GW">Guinea-Bissau (GNB) </option>
    //                           <option value="GY">Guyana (GUY) </option>
    //                           <option value="HT">Haiti (HTI) </option>
    //                           <option value="HM">
    //                             Heard Island and McDonald Islands (HMD){" "}
    //                           </option>
    //                           <option value="HN">Honduras (HND) </option>
    //                           <option value="HK">
    //                             Hong Kong S.A.R. (HKG){" "}
    //                           </option>
    //                           <option value="HU">Hungary (HUN) </option>
    //                           <option value="IS">Iceland (ISL) </option>
    //                           <option value="IN">India (IND) </option>
    //                           <option value="ID">Indonesia (IDN) </option>
    //                           <option value="IR">Iran (IRN) </option>
    //                           <option value="IQ">Iraq (IRQ) </option>
    //                           <option value="IE">Ireland (IRL) </option>
    //                           <option value="IL">Israel (ISR) </option>
    //                           <option value="IT">Italy (ITA) </option>
    //                           <option value="JM">Jamaica (JAM) </option>
    //                           <option value="JP">Japan (JPN) </option>
    //                           <option value="JE">Jersey (JEY) </option>
    //                           <option value="JO">Jordan (JOR) </option>
    //                           <option value="KZ">Kazakhstan (KAZ) </option>
    //                           <option value="KE">Kenya (KEN) </option>
    //                           <option value="KI">Kiribati (KIR) </option>
    //                           <option value="KP">North Korea (PRK) </option>
    //                           <option value="KR">South Korea (KOR) </option>
    //                           <option value="KW">Kuwait (KWT) </option>
    //                           <option value="KG">Kyrgyzstan (KGZ) </option>
    //                           <option value="LA">Laos (LAO) </option>
    //                           <option value="LV">Latvia (LVA) </option>
    //                           <option value="LB">Lebanon (LBN) </option>
    //                           <option value="LS">Lesotho (LSO) </option>
    //                           <option value="LR">Liberia (LBR) </option>
    //                           <option value="LY">Libya (LBY) </option>
    //                           <option value="LI">Liechtenstein (LIE) </option>
    //                           <option value="LT">Lithuania (LTU) </option>
    //                           <option value="LU">Luxembourg (LUX) </option>
    //                           <option value="MO">Macau S.A.R. (MAC) </option>
    //                           <option value="MK">Macedonia (MKD) </option>
    //                           <option value="MG">Madagascar (MDG) </option>
    //                           <option value="MW">Malawi (MWI) </option>
    //                           <option value="MY">Malaysia (MYS) </option>
    //                           <option value="MV">Maldives (MDV) </option>
    //                           <option value="ML">Mali (MLI) </option>
    //                           <option value="MT">Malta (MLT) </option>
    //                           <option value="IM">Man (Isle of) (IMN) </option>
    //                           <option value="MH">
    //                             Marshall Islands (MHL){" "}
    //                           </option>
    //                           <option value="MQ">Martinique (MTQ) </option>
    //                           <option value="MR">Mauritania (MRT) </option>
    //                           <option value="MU">Mauritius (MUS) </option>
    //                           <option value="YT">Mayotte (MYT) </option>
    //                           <option value="MX">Mexico (MEX) </option>
    //                           <option value="FM">Micronesia (FSM) </option>
    //                           <option value="MD">Moldova (MDA) </option>
    //                           <option value="MC">Monaco (MCO) </option>
    //                           <option value="MN">Mongolia (MNG) </option>
    //                           <option value="ME">Montenegro (MNE) </option>
    //                           <option value="MS">Montserrat (MSR) </option>
    //                           <option value="MA">Morocco (MAR) </option>
    //                           <option value="MZ">Mozambique (MOZ) </option>
    //                           <option value="MM">Myanmar (MMR) </option>
    //                           <option value="NA">Namibia (NAM) </option>
    //                           <option value="NR">Nauru (NRU) </option>
    //                           <option value="NP">Nepal (NPL) </option>
    //                           <option value="BQ">
    //                             Bonaire, Sint Eustatius and Saba (BES){" "}
    //                           </option>
    //                           <option value="NL">Netherlands (NLD) </option>
    //                           <option value="NC">New Caledonia (NCL) </option>
    //                           <option value="NZ">New Zealand (NZL) </option>
    //                           <option value="NI">Nicaragua (NIC) </option>
    //                           <option value="NE">Niger (NER) </option>
    //                           <option value="NG">Nigeria (NGA) </option>
    //                           <option value="NU">Niue (NIU) </option>
    //                           <option value="NF">Norfolk Island (NFK) </option>
    //                           <option value="MP">
    //                             Northern Mariana Islands (MNP){" "}
    //                           </option>
    //                           <option value="NO">Norway (NOR) </option>
    //                           <option value="OM">Oman (OMN) </option>
    //                           <option value="PK">Pakistan (PAK) </option>
    //                           <option value="PW">Palau (PLW) </option>
    //                           <option value="PS">
    //                             Palestinian Territory Occupied (PSE){" "}
    //                           </option>
    //                           <option value="PA">Panama (PAN) </option>
    //                           <option value="PG">
    //                             Papua new Guinea (PNG){" "}
    //                           </option>
    //                           <option value="PY">Paraguay (PRY) </option>
    //                           <option value="PE">Peru (PER) </option>
    //                           <option value="PH">Philippines (PHL) </option>
    //                           <option value="PN">Pitcairn Island (PCN) </option>
    //                           <option value="PL">Poland (POL) </option>
    //                           <option value="PT">Portugal (PRT) </option>
    //                           <option value="PR">Puerto Rico (PRI) </option>
    //                           <option value="QA">Qatar (QAT) </option>
    //                           <option value="RE">Reunion (REU) </option>
    //                           <option value="RO">Romania (ROU) </option>
    //                           <option value="RU">Russia (RUS) </option>
    //                           <option value="RW">Rwanda (RWA) </option>
    //                           <option value="SH">Saint Helena (SHN) </option>
    //                           <option value="KN">
    //                             Saint Kitts And Nevis (KNA){" "}
    //                           </option>
    //                           <option value="LC">Saint Lucia (LCA) </option>
    //                           <option value="PM">
    //                             Saint Pierre and Miquelon (SPM){" "}
    //                           </option>
    //                           <option value="VC">
    //                             Saint Vincent And The Grenadines (VCT){" "}
    //                           </option>
    //                           <option value="BL">
    //                             Saint-Barthelemy (BLM){" "}
    //                           </option>
    //                           <option value="MF">
    //                             Saint-Martin (French part) (MAF){" "}
    //                           </option>
    //                           <option value="WS">Samoa (WSM) </option>
    //                           <option value="SM">San Marino (SMR) </option>
    //                           <option value="ST">
    //                             Sao Tome and Principe (STP){" "}
    //                           </option>
    //                           <option value="SA">Saudi Arabia (SAU) </option>
    //                           <option value="SN">Senegal (SEN) </option>
    //                           <option value="RS">Serbia (SRB) </option>
    //                           <option value="SC">Seychelles (SYC) </option>
    //                           <option value="SL">Sierra Leone (SLE) </option>
    //                           <option value="SG">Singapore (SGP) </option>
    //                           <option value="SK">Slovakia (SVK) </option>
    //                           <option value="SI">Slovenia (SVN) </option>
    //                           <option value="SB">Solomon Islands (SLB) </option>
    //                           <option value="SO">Somalia (SOM) </option>
    //                           <option value="ZA">South Africa (ZAF) </option>
    //                           <option value="GS">South Georgia (SGS) </option>
    //                           <option value="SS">South Sudan (SSD) </option>
    //                           <option value="ES">Spain (ESP) </option>
    //                           <option value="LK">Sri Lanka (LKA) </option>
    //                           <option value="SD">Sudan (SDN) </option>
    //                           <option value="SR">Suriname (SUR) </option>
    //                           <option value="SJ">
    //                             Svalbard And Jan Mayen Islands (SJM){" "}
    //                           </option>
    //                           <option value="SZ">Swaziland (SWZ) </option>
    //                           <option value="SE">Sweden (SWE) </option>
    //                           <option value="CH">Switzerland (CHE) </option>
    //                           <option value="SY">Syria (SYR) </option>
    //                           <option value="TW">Taiwan (TWN) </option>
    //                           <option value="TJ">Tajikistan (TJK) </option>
    //                           <option value="TZ">Tanzania (TZA) </option>
    //                           <option value="TH">Thailand (THA) </option>
    //                           <option value="TG">Togo (TGO) </option>
    //                           <option value="TK">Tokelau (TKL) </option>
    //                           <option value="TO">Tonga (TON) </option>
    //                           <option value="TT">
    //                             Trinidad And Tobago (TTO){" "}
    //                           </option>
    //                           <option value="TN">Tunisia (TUN) </option>
    //                           <option value="TR">Turkey (TUR) </option>
    //                           <option value="TM">Turkmenistan (TKM) </option>
    //                           <option value="TC">
    //                             Turks And Caicos Islands (TCA){" "}
    //                           </option>
    //                           <option value="TV">Tuvalu (TUV) </option>
    //                           <option value="UG">Uganda (UGA) </option>
    //                           <option value="UA">Ukraine (UKR) </option>
    //                           <option value="AE">
    //                             United Arab Emirates (ARE){" "}
    //                           </option>
    //                           <option value="GB">United Kingdom (GBR) </option>
    //                           <option value="US">
    //                             United States (Less than 5kg) (USA){" "}
    //                           </option>
    //                           <option value="UM">
    //                             United States Minor Outlying Islands (UMI){" "}
    //                           </option>
    //                           <option value="UY">Uruguay (URY) </option>
    //                           <option value="UZ">Uzbekistan (UZB) </option>
    //                           <option value="VU">Vanuatu (VUT) </option>
    //                           <option value="VA">
    //                             Vatican City State (Holy See) (VAT){" "}
    //                           </option>
    //                           <option value="VE">Venezuela (VEN) </option>
    //                           <option value="VN">Vietnam (VNM) </option>
    //                           <option value="VG">
    //                             Virgin Islands (British) (VGB){" "}
    //                           </option>
    //                           <option value="VI">
    //                             Virgin Islands (US) (VIR){" "}
    //                           </option>
    //                           <option value="WF">
    //                             Wallis And Futuna Islands (WLF){" "}
    //                           </option>
    //                           <option value="EH">Western Sahara (ESH) </option>
    //                           <option value="YE">Yemen (YEM) </option>
    //                           <option value="ZM">Zambia (ZMB) </option>
    //                           <option value="ZW">Zimbabwe (ZWE) </option>
    //                           <option value="XK">Kosovo (XKX) </option>
    //                           <option value="CW">Curaçao (CUW) </option>
    //                           <option value="SX">
    //                             Sint Maarten (Dutch part) (SXM){" "}
    //                           </option>
    //                           <option value="S1">
    //                             United States USA 5kg+ Zone 1 (Zip Codes 01000
    //                             to 20000 Only) (US1){" "}
    //                           </option>
    //                           <option value="S2">
    //                             United States USA 5kg+ Zone 2 (Zip Codes 20001
    //                             to 50000 Only) (US2){" "}
    //                           </option>
    //                           <option value="S3">
    //                             United States USA 5kg+ Zone 3 (Zip Codes 50001
    //                             to 99000 Only) (US3){" "}
    //                           </option>
    //                           <option value="SP">
    //                             United States USA 5kg+ (Pre Labelled, Linehaul
    //                             &amp; Handover Only) (USP){" "}
    //                           </option>
    //                         </select>
    //                         <span
    //                           className="select2 select2-container select2-container--bootstrap5"
    //                           dir="ltr"
    //                           data-select2-id="select2-data-2-ig8a"
    //                           style={{ width: "100%" }}
    //                         >
    //                           <span className="selection">
    //                             <span
    //                               className="select2-selection select2-selection--single form-select form-select-solid"
    //                               role="combobox"
    //                               aria-haspopup="true"
    //                               aria-expanded="false"
    //                               tabindex="0"
    //                               aria-disabled="false"
    //                               aria-labelledby="select2-customer_shipping_country_code-hz-container"
    //                               aria-controls="select2-customer_shipping_country_code-hz-container"
    //                             >
    //                               <span
    //                                 className="select2-selection__rendered"
    //                                 id="select2-customer_shipping_country_code-hz-container"
    //                                 role="textbox"
    //                                 aria-readonly="true"
    //                                 title="Select Country"
    //                               >
    //                                 <span className="select2-selection__placeholder">
    //                                   Select Country
    //                                 </span>
    //                               </span>
    //                               <span
    //                                 className="select2-selection__arrow"
    //                                 role="presentation"
    //                               >
    //                                 <b role="presentation"></b>
    //                               </span>
    //                             </span>
    //                           </span>
    //                           <span
    //                             className="dropdown-wrapper"
    //                             aria-hidden="true"
    //                           ></span>
    //                         </span>
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div
    //                       className="fv-row row mb-8 fv-plugins-icon-container"
    //                       id="billing_additional"
    //                     >
    //                       <div className="col-lg-6">
    //                         <label className="form-label mb-3 required">
    //                           <span className="label_address">Address 1</span>
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_address"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-6">
    //                         <label className="form-label mb-3">
    //                           <span className="label_address_2">Landmark</span>
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_address_2"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-12">
    //                         <label className="form-label mb-3 required">
    //                           <span className="label_address_3">Address 2</span>
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_address_3"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           Pincode
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_postcode"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           City
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_shipping_city"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           State
    //                         </label>
    //                         <select
    //                           className="form-select form-select-solid select2-hidden-accessible"
    //                           data-control="select2"
    //                           data-placeholder="Select State"
    //                           id="customer_shipping_state_id"
    //                           name="customer_shipping_state_id"
    //                           data-select2-id="select2-data-customer_shipping_state_id"
    //                           tabindex="-1"
    //                           aria-hidden="true"
    //                         ></select>
    //                         <span
    //                           className="select2 select2-container select2-container--bootstrap5"
    //                           dir="ltr"
    //                           data-select2-id="select2-data-4-nu7l"
    //                           style={{ width: "100%" }}
    //                         >
    //                           <span className="selection">
    //                             <span
    //                               className="select2-selection select2-selection--single form-select form-select-solid"
    //                               role="combobox"
    //                               aria-haspopup="true"
    //                               aria-expanded="false"
    //                               tabindex="0"
    //                               aria-disabled="false"
    //                               aria-labelledby="select2-customer_shipping_state_id-container"
    //                               aria-controls="select2-customer_shipping_state_id-container"
    //                             >
    //                               <span
    //                                 className="select2-selection__rendered"
    //                                 id="select2-customer_shipping_state_id-container"
    //                                 role="textbox"
    //                                 aria-readonly="true"
    //                                 title="Select State"
    //                               >
    //                                 <span className="select2-selection__placeholder">
    //                                   Select State
    //                                 </span>
    //                               </span>
    //                               <span
    //                                 className="select2-selection__arrow"
    //                                 role="presentation"
    //                               >
    //                                 <b role="presentation"></b>
    //                               </span>
    //                             </span>
    //                           </span>
    //                           <span
    //                             className="dropdown-wrapper"
    //                             aria-hidden="true"
    //                           ></span>
    //                         </span>
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div className="fv-row mb-8 fv-plugins-icon-container">
    //                       <label className="form-check form-check-custom form-check-solid">
    //                         <input
    //                           className="form-check-input"
    //                           checked=""
    //                           type="checkbox"
    //                           name="customer_shipping_billing_same"
    //                         />
    //                         <span className="form-check-label fw-bold">
    //                           Shipping &amp; Billing Address are same.
    //                         </span>
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </label>
    //                     </div>
    //                   </div>
    //                   <div
    //                     className="w-100 row address_section"
    //                     style={{ display: "none" }}
    //                     id="buyer_billing_details"
    //                   >
    //                     <div className="pt-10 pb-10 pb-lg-10">
    //                       <h3 className="fw-bolder d-flex align-items-center text-dark">
    //                         Buyer Billing Details
    //                       </h3>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           First Name
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_billing_firstname"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           Last name
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_billing_lastname"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           Mobile No.
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_billing_mobile"
    //                           id="customer_billing_mobile"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-12">
    //                         <label className="form-label mb-3 required">
    //                           Country
    //                         </label>
    //                         <select
    //                           className="form-select form-select-solid select2-hidden-accessible"
    //                           data-control="select2"
    //                           data-placeholder="Select Country"
    //                           name="customer_billing_country_code"
    //                           data-select2-id="select2-data-5-n3s0"
    //                           tabindex="-1"
    //                           aria-hidden="true"
    //                         >
    //                           <option data-select2-id="select2-data-7-pa12"></option>
    //                           <option value="AF">Afghanistan (AFG) </option>
    //                           <option value="AX">Aland Islands (ALA) </option>
    //                           <option value="AL">Albania (ALB) </option>
    //                           <option value="DZ">Algeria (DZA) </option>
    //                           <option value="AS">American Samoa (ASM) </option>
    //                           <option value="AD">Andorra (AND) </option>
    //                           <option value="AO">Angola (AGO) </option>
    //                           <option value="AI">Anguilla (AIA) </option>
    //                           <option value="AQ">Antarctica (ATA) </option>
    //                           <option value="AG">
    //                             Antigua And Barbuda (ATG){" "}
    //                           </option>
    //                           <option value="AR">Argentina (ARG) </option>
    //                           <option value="AM">Armenia (ARM) </option>
    //                           <option value="AW">Aruba (ABW) </option>
    //                           <option value="AU">Australia (AUS) </option>
    //                           <option value="AT">Austria (AUT) </option>
    //                           <option value="AZ">Azerbaijan (AZE) </option>
    //                           <option value="BS">Bahamas The (BHS) </option>
    //                           <option value="BH">Bahrain (BHR) </option>
    //                           <option value="BD">Bangladesh (BGD) </option>
    //                           <option value="BB">Barbados (BRB) </option>
    //                           <option value="BY">Belarus (BLR) </option>
    //                           <option value="BE">Belgium (BEL) </option>
    //                           <option value="BZ">Belize (BLZ) </option>
    //                           <option value="BJ">Benin (BEN) </option>
    //                           <option value="BM">Bermuda (BMU) </option>
    //                           <option value="BT">Bhutan (BTN) </option>
    //                           <option value="BO">Bolivia (BOL) </option>
    //                           <option value="BA">
    //                             Bosnia and Herzegovina (BIH){" "}
    //                           </option>
    //                           <option value="BW">Botswana (BWA) </option>
    //                           <option value="BV">Bouvet Island (BVT) </option>
    //                           <option value="BR">Brazil (BRA) </option>
    //                           <option value="IO">
    //                             British Indian Ocean Territory (IOT){" "}
    //                           </option>
    //                           <option value="BN">Brunei (BRN) </option>
    //                           <option value="BG">Bulgaria (BGR) </option>
    //                           <option value="BF">Burkina Faso (BFA) </option>
    //                           <option value="BI">Burundi (BDI) </option>
    //                           <option value="KH">Cambodia (KHM) </option>
    //                           <option value="CM">Cameroon (CMR) </option>
    //                           <option value="CA">Canada (CAN) </option>
    //                           <option value="CV">Cape Verde (CPV) </option>
    //                           <option value="KY">Cayman Islands (CYM) </option>
    //                           <option value="CF">
    //                             Central African Republic (CAF){" "}
    //                           </option>
    //                           <option value="TD">Chad (TCD) </option>
    //                           <option value="CL">Chile (CHL) </option>
    //                           <option value="CN">China (CHN) </option>
    //                           <option value="CX">
    //                             Christmas Island (CXR){" "}
    //                           </option>
    //                           <option value="CC">
    //                             Cocos (Keeling) Islands (CCK){" "}
    //                           </option>
    //                           <option value="CO">Colombia (COL) </option>
    //                           <option value="KM">Comoros (COM) </option>
    //                           <option value="CG">Congo (COG) </option>
    //                           <option value="CD">
    //                             Democratic Republic of the Congo (COD){" "}
    //                           </option>
    //                           <option value="CK">Cook Islands (COK) </option>
    //                           <option value="CR">Costa Rica (CRI) </option>
    //                           <option value="CI">
    //                             Cote D'Ivoire (Ivory Coast) (CIV){" "}
    //                           </option>
    //                           <option value="HR">Croatia (HRV) </option>
    //                           <option value="CU">Cuba (CUB) </option>
    //                           <option value="CY">Cyprus (CYP) </option>
    //                           <option value="CZ">Czech Republic (CZE) </option>
    //                           <option value="DK">Denmark (DNK) </option>
    //                           <option value="DJ">Djibouti (DJI) </option>
    //                           <option value="DM">Dominica (DMA) </option>
    //                           <option value="DO">
    //                             Dominican Republic (DOM){" "}
    //                           </option>
    //                           <option value="TL">East Timor (TLS) </option>
    //                           <option value="EC">Ecuador (ECU) </option>
    //                           <option value="EG">Egypt (EGY) </option>
    //                           <option value="SV">El Salvador (SLV) </option>
    //                           <option value="GQ">
    //                             Equatorial Guinea (GNQ){" "}
    //                           </option>
    //                           <option value="ER">Eritrea (ERI) </option>
    //                           <option value="EE">Estonia (EST) </option>
    //                           <option value="ET">Ethiopia (ETH) </option>
    //                           <option value="FK">
    //                             Falkland Islands (FLK){" "}
    //                           </option>
    //                           <option value="FO">Faroe Islands (FRO) </option>
    //                           <option value="FJ">Fiji Islands (FJI) </option>
    //                           <option value="FI">Finland (FIN) </option>
    //                           <option value="FR">France (FRA) </option>
    //                           <option value="GF">French Guiana (GUF) </option>
    //                           <option value="PF">
    //                             French Polynesia (PYF){" "}
    //                           </option>
    //                           <option value="TF">
    //                             French Southern Territories (ATF){" "}
    //                           </option>
    //                           <option value="GA">Gabon (GAB) </option>
    //                           <option value="GM">Gambia The (GMB) </option>
    //                           <option value="GE">Georgia (GEO) </option>
    //                           <option value="DE">Germany (DEU) </option>
    //                           <option value="GH">Ghana (GHA) </option>
    //                           <option value="GI">Gibraltar (GIB) </option>
    //                           <option value="GR">Greece (GRC) </option>
    //                           <option value="GL">Greenland (GRL) </option>
    //                           <option value="GD">Grenada (GRD) </option>
    //                           <option value="GP">Guadeloupe (GLP) </option>
    //                           <option value="GU">Guam (GUM) </option>
    //                           <option value="GT">Guatemala (GTM) </option>
    //                           <option value="GG">
    //                             Guernsey and Alderney (GGY){" "}
    //                           </option>
    //                           <option value="GN">Guinea (GIN) </option>
    //                           <option value="GW">Guinea-Bissau (GNB) </option>
    //                           <option value="GY">Guyana (GUY) </option>
    //                           <option value="HT">Haiti (HTI) </option>
    //                           <option value="HM">
    //                             Heard Island and McDonald Islands (HMD){" "}
    //                           </option>
    //                           <option value="HN">Honduras (HND) </option>
    //                           <option value="HK">
    //                             Hong Kong S.A.R. (HKG){" "}
    //                           </option>
    //                           <option value="HU">Hungary (HUN) </option>
    //                           <option value="IS">Iceland (ISL) </option>
    //                           <option value="IN">India (IND) </option>
    //                           <option value="ID">Indonesia (IDN) </option>
    //                           <option value="IR">Iran (IRN) </option>
    //                           <option value="IQ">Iraq (IRQ) </option>
    //                           <option value="IE">Ireland (IRL) </option>
    //                           <option value="IL">Israel (ISR) </option>
    //                           <option value="IT">Italy (ITA) </option>
    //                           <option value="JM">Jamaica (JAM) </option>
    //                           <option value="JP">Japan (JPN) </option>
    //                           <option value="JE">Jersey (JEY) </option>
    //                           <option value="JO">Jordan (JOR) </option>
    //                           <option value="KZ">Kazakhstan (KAZ) </option>
    //                           <option value="KE">Kenya (KEN) </option>
    //                           <option value="KI">Kiribati (KIR) </option>
    //                           <option value="KP">North Korea (PRK) </option>
    //                           <option value="KR">South Korea (KOR) </option>
    //                           <option value="KW">Kuwait (KWT) </option>
    //                           <option value="KG">Kyrgyzstan (KGZ) </option>
    //                           <option value="LA">Laos (LAO) </option>
    //                           <option value="LV">Latvia (LVA) </option>
    //                           <option value="LB">Lebanon (LBN) </option>
    //                           <option value="LS">Lesotho (LSO) </option>
    //                           <option value="LR">Liberia (LBR) </option>
    //                           <option value="LY">Libya (LBY) </option>
    //                           <option value="LI">Liechtenstein (LIE) </option>
    //                           <option value="LT">Lithuania (LTU) </option>
    //                           <option value="LU">Luxembourg (LUX) </option>
    //                           <option value="MO">Macau S.A.R. (MAC) </option>
    //                           <option value="MK">Macedonia (MKD) </option>
    //                           <option value="MG">Madagascar (MDG) </option>
    //                           <option value="MW">Malawi (MWI) </option>
    //                           <option value="MY">Malaysia (MYS) </option>
    //                           <option value="MV">Maldives (MDV) </option>
    //                           <option value="ML">Mali (MLI) </option>
    //                           <option value="MT">Malta (MLT) </option>
    //                           <option value="IM">Man (Isle of) (IMN) </option>
    //                           <option value="MH">
    //                             Marshall Islands (MHL){" "}
    //                           </option>
    //                           <option value="MQ">Martinique (MTQ) </option>
    //                           <option value="MR">Mauritania (MRT) </option>
    //                           <option value="MU">Mauritius (MUS) </option>
    //                           <option value="YT">Mayotte (MYT) </option>
    //                           <option value="MX">Mexico (MEX) </option>
    //                           <option value="FM">Micronesia (FSM) </option>
    //                           <option value="MD">Moldova (MDA) </option>
    //                           <option value="MC">Monaco (MCO) </option>
    //                           <option value="MN">Mongolia (MNG) </option>
    //                           <option value="ME">Montenegro (MNE) </option>
    //                           <option value="MS">Montserrat (MSR) </option>
    //                           <option value="MA">Morocco (MAR) </option>
    //                           <option value="MZ">Mozambique (MOZ) </option>
    //                           <option value="MM">Myanmar (MMR) </option>
    //                           <option value="NA">Namibia (NAM) </option>
    //                           <option value="NR">Nauru (NRU) </option>
    //                           <option value="NP">Nepal (NPL) </option>
    //                           <option value="BQ">
    //                             Bonaire, Sint Eustatius and Saba (BES){" "}
    //                           </option>
    //                           <option value="NL">Netherlands (NLD) </option>
    //                           <option value="NC">New Caledonia (NCL) </option>
    //                           <option value="NZ">New Zealand (NZL) </option>
    //                           <option value="NI">Nicaragua (NIC) </option>
    //                           <option value="NE">Niger (NER) </option>
    //                           <option value="NG">Nigeria (NGA) </option>
    //                           <option value="NU">Niue (NIU) </option>
    //                           <option value="NF">Norfolk Island (NFK) </option>
    //                           <option value="MP">
    //                             Northern Mariana Islands (MNP){" "}
    //                           </option>
    //                           <option value="NO">Norway (NOR) </option>
    //                           <option value="OM">Oman (OMN) </option>
    //                           <option value="PK">Pakistan (PAK) </option>
    //                           <option value="PW">Palau (PLW) </option>
    //                           <option value="PS">
    //                             Palestinian Territory Occupied (PSE){" "}
    //                           </option>
    //                           <option value="PA">Panama (PAN) </option>
    //                           <option value="PG">
    //                             Papua new Guinea (PNG){" "}
    //                           </option>
    //                           <option value="PY">Paraguay (PRY) </option>
    //                           <option value="PE">Peru (PER) </option>
    //                           <option value="PH">Philippines (PHL) </option>
    //                           <option value="PN">Pitcairn Island (PCN) </option>
    //                           <option value="PL">Poland (POL) </option>
    //                           <option value="PT">Portugal (PRT) </option>
    //                           <option value="PR">Puerto Rico (PRI) </option>
    //                           <option value="QA">Qatar (QAT) </option>
    //                           <option value="RE">Reunion (REU) </option>
    //                           <option value="RO">Romania (ROU) </option>
    //                           <option value="RU">Russia (RUS) </option>
    //                           <option value="RW">Rwanda (RWA) </option>
    //                           <option value="SH">Saint Helena (SHN) </option>
    //                           <option value="KN">
    //                             Saint Kitts And Nevis (KNA){" "}
    //                           </option>
    //                           <option value="LC">Saint Lucia (LCA) </option>
    //                           <option value="PM">
    //                             Saint Pierre and Miquelon (SPM){" "}
    //                           </option>
    //                           <option value="VC">
    //                             Saint Vincent And The Grenadines (VCT){" "}
    //                           </option>
    //                           <option value="BL">
    //                             Saint-Barthelemy (BLM){" "}
    //                           </option>
    //                           <option value="MF">
    //                             Saint-Martin (French part) (MAF){" "}
    //                           </option>
    //                           <option value="WS">Samoa (WSM) </option>
    //                           <option value="SM">San Marino (SMR) </option>
    //                           <option value="ST">
    //                             Sao Tome and Principe (STP){" "}
    //                           </option>
    //                           <option value="SA">Saudi Arabia (SAU) </option>
    //                           <option value="SN">Senegal (SEN) </option>
    //                           <option value="RS">Serbia (SRB) </option>
    //                           <option value="SC">Seychelles (SYC) </option>
    //                           <option value="SL">Sierra Leone (SLE) </option>
    //                           <option value="SG">Singapore (SGP) </option>
    //                           <option value="SK">Slovakia (SVK) </option>
    //                           <option value="SI">Slovenia (SVN) </option>
    //                           <option value="SB">Solomon Islands (SLB) </option>
    //                           <option value="SO">Somalia (SOM) </option>
    //                           <option value="ZA">South Africa (ZAF) </option>
    //                           <option value="GS">South Georgia (SGS) </option>
    //                           <option value="SS">South Sudan (SSD) </option>
    //                           <option value="ES">Spain (ESP) </option>
    //                           <option value="LK">Sri Lanka (LKA) </option>
    //                           <option value="SD">Sudan (SDN) </option>
    //                           <option value="SR">Suriname (SUR) </option>
    //                           <option value="SJ">
    //                             Svalbard And Jan Mayen Islands (SJM){" "}
    //                           </option>
    //                           <option value="SZ">Swaziland (SWZ) </option>
    //                           <option value="SE">Sweden (SWE) </option>
    //                           <option value="CH">Switzerland (CHE) </option>
    //                           <option value="SY">Syria (SYR) </option>
    //                           <option value="TW">Taiwan (TWN) </option>
    //                           <option value="TJ">Tajikistan (TJK) </option>
    //                           <option value="TZ">Tanzania (TZA) </option>
    //                           <option value="TH">Thailand (THA) </option>
    //                           <option value="TG">Togo (TGO) </option>
    //                           <option value="TK">Tokelau (TKL) </option>
    //                           <option value="TO">Tonga (TON) </option>
    //                           <option value="TT">
    //                             Trinidad And Tobago (TTO){" "}
    //                           </option>
    //                           <option value="TN">Tunisia (TUN) </option>
    //                           <option value="TR">Turkey (TUR) </option>
    //                           <option value="TM">Turkmenistan (TKM) </option>
    //                           <option value="TC">
    //                             Turks And Caicos Islands (TCA){" "}
    //                           </option>
    //                           <option value="TV">Tuvalu (TUV) </option>
    //                           <option value="UG">Uganda (UGA) </option>
    //                           <option value="UA">Ukraine (UKR) </option>
    //                           <option value="AE">
    //                             United Arab Emirates (ARE){" "}
    //                           </option>
    //                           <option value="GB">United Kingdom (GBR) </option>
    //                           <option value="US">United States (USA) </option>
    //                           <option value="UM">
    //                             United States Minor Outlying Islands (UMI){" "}
    //                           </option>
    //                           <option value="UY">Uruguay (URY) </option>
    //                           <option value="UZ">Uzbekistan (UZB) </option>
    //                           <option value="VU">Vanuatu (VUT) </option>
    //                           <option value="VA">
    //                             Vatican City State (Holy See) (VAT){" "}
    //                           </option>
    //                           <option value="VE">Venezuela (VEN) </option>
    //                           <option value="VN">Vietnam (VNM) </option>
    //                           <option value="VG">
    //                             Virgin Islands (British) (VGB){" "}
    //                           </option>
    //                           <option value="VI">
    //                             Virgin Islands (US) (VIR){" "}
    //                           </option>
    //                           <option value="WF">
    //                             Wallis And Futuna Islands (WLF){" "}
    //                           </option>
    //                           <option value="EH">Western Sahara (ESH) </option>
    //                           <option value="YE">Yemen (YEM) </option>
    //                           <option value="ZM">Zambia (ZMB) </option>
    //                           <option value="ZW">Zimbabwe (ZWE) </option>
    //                           <option value="XK">Kosovo (XKX) </option>
    //                           <option value="CW">Curaçao (CUW) </option>
    //                           <option value="SX">
    //                             Sint Maarten (Dutch part) (SXM){" "}
    //                           </option>
    //                           <option value="S1">United States (US1) </option>
    //                           <option value="S2">United States (US2) </option>
    //                           <option value="S3">United States (US3) </option>
    //                           <option value="SP">United States (USP) </option>
    //                         </select>
    //                         <span
    //                           className="select2 select2-container select2-container--bootstrap5"
    //                           dir="ltr"
    //                           data-select2-id="select2-data-6-m7lb"
    //                           style={{ width: "100%" }}
    //                         >
    //                           <span className="selection">
    //                             <span
    //                               className="select2-selection select2-selection--single form-select form-select-solid"
    //                               role="combobox"
    //                               aria-haspopup="true"
    //                               aria-expanded="false"
    //                               tabindex="0"
    //                               aria-disabled="false"
    //                               aria-labelledby="select2-customer_billing_country_code-w7-container"
    //                               aria-controls="select2-customer_billing_country_code-w7-container"
    //                             >
    //                               <span
    //                                 className="select2-selection__rendered"
    //                                 id="select2-customer_billing_country_code-w7-container"
    //                                 role="textbox"
    //                                 aria-readonly="true"
    //                                 title="Select Country"
    //                               >
    //                                 <span className="select2-selection__placeholder">
    //                                   Select Country
    //                                 </span>
    //                               </span>
    //                               <span
    //                                 className="select2-selection__arrow"
    //                                 role="presentation"
    //                               >
    //                                 <b role="presentation"></b>
    //                               </span>
    //                             </span>
    //                           </span>
    //                           <span
    //                             className="dropdown-wrapper"
    //                             aria-hidden="true"
    //                           ></span>
    //                         </span>
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div
    //                       className="fv-row row mb-8 fv-plugins-icon-container"
    //                       id="billing_additional"
    //                     >
    //                       <div className="col-lg-6">
    //                         <label className="form-label mb-3 required">
    //                           <span className="label_address">
    //                             House Number
    //                           </span>
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_billing_address"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-6">
    //                         <label className="form-label mb-3">
    //                           <span className="label_address_2">
    //                             Street Name
    //                           </span>
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_billing_address_2"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-12">
    //                         <label className="form-label mb-3 required">
    //                           <span className="label_address_3">Locality</span>
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_billing_address_3"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3 required">
    //                           Pincode
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_billing_postcode"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3">City</label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="customer_billing_city"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-4">
    //                         <label className="form-label mb-3">State</label>
    //                         <select
    //                           className="form-select form-select-solid select2-hidden-accessible"
    //                           data-control="select2"
    //                           data-placeholder="Select State"
    //                           id="customer_billing_state_id"
    //                           name="customer_billing_state_id"
    //                           data-select2-id="select2-data-customer_billing_state_id"
    //                           tabindex="-1"
    //                           aria-hidden="true"
    //                         >
    //                           <option data-select2-id="select2-data-9-tmnj"></option>
    //                         </select>
    //                         <span
    //                           className="select2 select2-container select2-container--bootstrap5"
    //                           dir="ltr"
    //                           data-select2-id="select2-data-8-t9l9"
    //                           style={{ width: "100%" }}
    //                         >
    //                           <span className="selection">
    //                             <span
    //                               className="select2-selection select2-selection--single form-select form-select-solid"
    //                               role="combobox"
    //                               aria-haspopup="true"
    //                               aria-expanded="false"
    //                               tabindex="0"
    //                               aria-disabled="false"
    //                               aria-labelledby="select2-customer_billing_state_id-container"
    //                               aria-controls="select2-customer_billing_state_id-container"
    //                             >
    //                               <span
    //                                 className="select2-selection__rendered"
    //                                 id="select2-customer_billing_state_id-container"
    //                                 role="textbox"
    //                                 aria-readonly="true"
    //                                 title="Select State"
    //                               >
    //                                 <span className="select2-selection__placeholder">
    //                                   Select State
    //                                 </span>
    //                               </span>
    //                               <span
    //                                 className="select2-selection__arrow"
    //                                 role="presentation"
    //                               >
    //                                 <b role="presentation"></b>
    //                               </span>
    //                             </span>
    //                           </span>
    //                           <span
    //                             className="dropdown-wrapper"
    //                             aria-hidden="true"
    //                           ></span>
    //                         </span>
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div></div>
    //                 </div>
    //                 {/* <div
    //                   className="flex-column addStep2 fv-plugins-bootstrap5 fv-plugins-framework"
    //                   data-kt-stepper-element="content"
    //                 >
    //                   <div className="w-100">
    //                     <div className="pb-10 pb-lg-15">
    //                       <h2 className="fw-bolder text-dark">Order Details</h2>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-3">
    //                         <label className="form-label mb-3 required">
    //                           Invoice No.
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="vendor_invoice_no"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-3">
    //                         <label className="form-label mb-3 required">
    //                           Invoice Date
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="vendor_order_date"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                       <div className="col-lg-3">
    //                         <label className="form-label mb-3 required">
    //                           Invoice Currency
    //                         </label>
    //                         <select
    //                           className="form-select form-select-solid select2-hidden-accessible"
    //                           data-control="select2"
    //                           data-placeholder="Currency"
    //                           name="currency_code"
    //                           data-select2-id="select2-data-10-eiar"
    //                           tabindex="-1"
    //                           aria-hidden="true"
    //                         >
    //                           <option
    //                             selected=""
    //                             value="INR"
    //                             data-select2-id="select2-data-12-l2lc"
    //                           >
    //                             INR
    //                           </option>
    //                           <option value="USD">USD</option>
    //                           <option value="EUR">EUR</option>
    //                           <option value="GBP">GBP</option>
    //                           <option value="CAD">CAD</option>
    //                         </select>
    //                         <span
    //                           className="select2 select2-container select2-container--bootstrap5"
    //                           dir="ltr"
    //                           data-select2-id="select2-data-11-uemj"
    //                           style={{ width: "100%" }}
    //                         >
    //                           <span className="selection">
    //                             <span
    //                               className="select2-selection select2-selection--single form-select form-select-solid"
    //                               role="combobox"
    //                               aria-haspopup="true"
    //                               aria-expanded="false"
    //                               tabindex="0"
    //                               aria-disabled="false"
    //                               aria-labelledby="select2-currency_code-ky-container"
    //                               aria-controls="select2-currency_code-ky-container"
    //                             >
    //                               <span
    //                                 className="select2-selection__rendered"
    //                                 id="select2-currency_code-ky-container"
    //                                 role="textbox"
    //                                 aria-readonly="true"
    //                                 title="INR"
    //                               >
    //                                 INR
    //                               </span>
    //                               <span
    //                                 className="select2-selection__arrow"
    //                                 role="presentation"
    //                               >
    //                                 <b role="presentation"></b>
    //                               </span>
    //                             </span>
    //                           </span>
    //                           <span
    //                             className="dropdown-wrapper"
    //                             aria-hidden="true"
    //                           ></span>
    //                         </span>
    //                       </div>
    //                       <div className="col-lg-3">
    //                         <label className="form-label mb-3">
    //                           Order Id/Ref. Id
    //                         </label>
    //                         <input
    //                           type="text"
    //                           className="form-control form-control"
    //                           name="vendor_reference_order_id"
    //                           placeholder=""
    //                           value=""
    //                         />
    //                         <div className="fv-plugins-message-container invalid-feedback"></div>
    //                       </div>
    //                     </div>
    //                     <div className="w-100 mb-10">
    //                       <div className="pt-10 pb-10 pb-lg-10">
    //                         <h3 className="fw-bolder d-flex align-items-center text-dark">
    //                           Item Details
    //                         </h3>
    //                       </div>
    //                       <div id="kt_docs_repeater_basic">
    //                         <div className="form-group">
    //                           <div data-repeater-list="vendor_order_item">
    //                             <div
    //                               data-repeater-item=""
    //                               className="form-group fv-row row mb-4 fv-plugins-icon-container"
    //                             >
    //                               <div className="col-lg-3">
    //                                 <label className="form-label required">
    //                                   Product Name
    //                                 </label>
    //                                 <input
    //                                   type="text"
    //                                   name="vendor_order_item[0][vendor_order_item_name]"
    //                                   data-validationarr="productTitle"
    //                                   className="form-control mb-2 mb-md-0"
    //                                 />
    //                                 <div className="fv-plugins-message-container invalid-feedback"></div>
    //                               </div>
    //                               <div className="col-lg-3">
    //                                 <label className="form-label">SKU</label>
    //                                 <input
    //                                   type="text"
    //                                   name="vendor_order_item[0][vendor_order_item_sku]"
    //                                   data-validationarr="productSKU"
    //                                   className="form-control mb-2 mb-md-0"
    //                                 />
    //                                 <div className="fv-plugins-message-container invalid-feedback"></div>
    //                               </div>
    //                               <div className="col-lg-2">
    //                                 <label className="form-label required">
    //                                   HSN
    //                                 </label>
    //                                 <input
    //                                   type="text"
    //                                   name="vendor_order_item[0][vendor_order_item_hsn]"
    //                                   data-validationarr="productHSN"
    //                                   className="form-control mb-2 mb-md-0"
    //                                 />
    //                                 <div className="fv-plugins-message-container invalid-feedback"></div>
    //                               </div>
    //                               <div className="col-lg-1">
    //                                 <label className="form-label required">
    //                                   Qty
    //                                 </label>
    //                                 <input
    //                                   type="text"
    //                                   name="vendor_order_item[0][vendor_order_item_quantity]"
    //                                   data-validationarr="productQTY"
    //                                   className="form-control mb-2 mb-md-0"
    //                                 />
    //                                 <div className="fv-plugins-message-container invalid-feedback"></div>
    //                               </div>
    //                               <div className="col-lg-2">
    //                                 <label className="form-label required">
    //                                   Unit Price(
    //                                   <span className="display_currency">
    //                                     INR
    //                                   </span>
    //                                   )
    //                                 </label>
    //                                 <input
    //                                   type="text"
    //                                   name="vendor_order_item[0][vendor_order_item_unit_price]"
    //                                   data-validationarr="productUnitPrice"
    //                                   className="form-control mb-2 mb-md-0"
    //                                 />
    //                                 <div className="fv-plugins-message-container invalid-feedback"></div>
    //                               </div>
    //                               <div className="col-md-1"></div>
    //                             </div>
    //                           </div>
    //                         </div>
    //                         <div className="form-group mt-5">
    //                           <a
    //                             href="javascript:;"
    //                             data-repeater-create=""
    //                             className="btn btn-light-primary"
    //                           >
    //                             <i className="la la-plus"></i>Add
    //                           </a>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div></div>
    //                 </div>
    //                 <div
    //                   className="flex-column addStep3 fv-plugins-bootstrap5 fv-plugins-framework"
    //                   data-kt-stepper-element="content"
    //                 >
    //                   <div className="w-100">
    //                     <div className="pb-10 pb-lg-12">
    //                       <h2 className="fw-bolder text-dark">
    //                         Shipment Details
    //                       </h2>
    //                       <div className="text-muted fw-bold fs-6">
    //                         If you need more info, please check out
    //                         <a href="#" className="link-primary fw-bolder">
    //                           Help Page
    //                         </a>
    //                         .
    //                       </div>
    //                     </div>
    //                     <div className="fv-row row mb-8 fv-plugins-icon-container">
    //                       <div className="col-lg-3">
    //                         <label className="form-label mb-3 required">
    //                           Actual Weight
    //                         </label>
    //                         <div className="input-group has-validation">
    //                           <input
    //                             type="text"
    //                             className="form-control form-control"
    //                             name="package_weight"
    //                           />
    //                           <span className="input-group-text">KG</span>
    //                           <div className="fv-plugins-message-container invalid-feedback"></div>
    //                         </div>
    //                       </div>
    //                       <div className="col-lg-3">
    //                         <label className="form-label mb-3 required">
    //                           Length
    //                         </label>
    //                         <div className="input-group has-validation">
    //                           <input
    //                             type="text"
    //                             className="form-control form-control"
    //                             name="package_length"
    //                           />
    //                           <span className="input-group-text">CM</span>
    //                           <div className="fv-plugins-message-container invalid-feedback"></div>
    //                         </div>
    //                       </div>
    //                       <div className="col-lg-3">
    //                         <label className="form-label mb-3 required">
    //                           Breadth
    //                         </label>
    //                         <div className="input-group has-validation">
    //                           <input
    //                             type="text"
    //                             className="form-control form-control"
    //                             name="package_breadth"
    //                           />
    //                           <span className="input-group-text">CM</span>
    //                           <div className="fv-plugins-message-container invalid-feedback"></div>
    //                         </div>
    //                       </div>
    //                       <div className="col-lg-3">
    //                         <label className="form-label mb-3 required">
    //                           Height
    //                         </label>
    //                         <div className="input-group has-validation">
    //                           <input
    //                             type="text"
    //                             className="form-control form-control"
    //                             name="package_height"
    //                           />
    //                           <span className="input-group-text">CM</span>
    //                           <div className="fv-plugins-message-container invalid-feedback"></div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <input type="hidden" name="csbv" value="0" />
    //                   <div></div>
    //                 </div>
    //                 <div
    //                   className="flex-column addStep5 fv-plugins-bootstrap5 fv-plugins-framework"
    //                   data-kt-stepper-element="content"
    //                 >
    //                   <div className="w-100">
    //                     <div className="pb-10 pb-lg-15">
    //                       <h2 className="fw-bolder text-dark">
    //                         Select Shipping Partner
    //                       </h2>
    //                       <div className="text-muted fw-bold fs-7">
    //                         All shipments via ShipGlobal Direct service are
    //                         Delivered Duty Paid (DDP), hence no extra duty will
    //                         be billed on the consignee or the shipper. Rates are
    //                         inclusive of covid &amp; fuel surcharge, exclusive
    //                         of GST and ex-Delhi Hub.
    //                       </div>
    //                       <br />
    //                       <div className="text-muted fw-bold fs-6">
    //                         If you need more info, please call/whatsapp at
    //                         <a
    //                           target="_blank"
    //                           href="https://shipglobal.in/contact/"
    //                           className="text-primary fw-bolder"
    //                         >
    //                           +91 9811098919
    //                         </a>
    //                         .
    //                       </div>
    //                     </div>
    //                     <div id="getShipper">
    //                       <div className="overlay overlay-block">
    //                         <div
    //                           id="ship-loader"
    //                           className="overlay-layer card-rounded bg-dark bg-opacity-5"
    //                         >
    //                           <div
    //                             className="spinner-border text-primary"
    //                             role="status"
    //                           >
    //                             <span className="visually-hidden">
    //                               Loading...
    //                             </span>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div></div>
    //                 </div>
    //                 <div
    //                   className="flex-column addStep6"
    //                   data-kt-stepper-element="content"
    //                 >
    //                   <div className="w-100">
    //                     <div className="pb-10 pb-lg-12">
    //                       <h2 className="fw-bolder text-dark">Order Details</h2>
    //                     </div>
    //                     <div id="orderdetails">
    //                       <div className="overlay overlay-block">
    //                         <div
    //                           id="ship-loader"
    //                           className="overlay-layer card-rounded bg-dark bg-opacity-5"
    //                         >
    //                           <div
    //                             className="spinner-border text-primary"
    //                             role="status"
    //                           >
    //                             <span className="visually-hidden">
    //                               Loading...
    //                             </span>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="d-flex flex-stack pt-10">
    //                 <div className="mr-2">
    //                   <button
    //                     type="button"
    //                     className="btn btn-lg btn-light-primary me-3"
    //                     data-kt-stepper-action="previous"
    //                   >
    //                     <span className="svg-icon svg-icon-4 me-1">
    //                       <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         width="24"
    //                         height="24"
    //                         viewBox="0 0 24 24"
    //                         fill="none"
    //                       >
    //                         <rect
    //                           opacity="0.5"
    //                           x="6"
    //                           y="11"
    //                           width="13"
    //                           height="2"
    //                           rx="1"
    //                           fill="black"
    //                         ></rect>
    //                         <path
    //                           d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
    //                           fill="black"
    //                         ></path>
    //                       </svg>
    //                     </span>
    //                     Back
    //                   </button>
    //                 </div>
    //                 <div>
    //                   <button
    //                     type="button"
    //                     id="submit_add_order"
    //                     className="btn btn-lg btn-success me-3"
    //                     data-kt-stepper-action="submit"
    //                   >
    //                     <span className="indicator-label">
    //                       Pay &amp; Add Order
    //                     </span>
    //                     <span className="indicator-progress">
    //                       Processing{" "}
    //                       <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
    //                     </span>
    //                   </button>
    //                   <button
    //                     type="button"
    //                     className="btn btn-lg btn-primary"
    //                     data-kt-stepper-action="next"
    //                   >
    //                     Continue
    //                   </button>
    //                 </div> */}
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Orders;
