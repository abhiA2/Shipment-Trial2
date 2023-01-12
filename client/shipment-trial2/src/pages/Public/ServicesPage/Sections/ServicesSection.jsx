// import React from "react";
// import styled from "styled-components";
// // import { useGlobalContext } from "../../../context";
// import { NavLink } from "react-router-dom";
// import { Button } from "../../../Styles/Button";

// const Services = () => {
//   // const { services } = useGlobalContext();
//   // console.log(services);

//   return (
//     <Wrapper className="section">
//       <section
//         className="top_panel_image"
//         style={{
//           backgroundImage: `url("https://logistic-company.themerex.net/wp-content/uploads/2016/08/top_bg.jpg")`,
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="top_panel_image_hover"></div>
//         <div className="top_panel_image_header">
//           <h1 itemprop="headline" className="top_panel_image_title entry-title">
//             Logistic Services
//           </h1>

//           <div className="breadcrumbs">
//             <a
//               className="breadcrumbs_item home"
//               href="https://logistic-company.themerex.net/"
//             >
//               Home
//             </a>
//             <span className="breadcrumbs_delimiter"></span>
//             <span className="breadcrumbs_item current">
//               Logistic Services
//             </span>{" "}
//           </div>
//         </div>
//       </section>
//       <h2 className="common-heading">Our Services</h2>
//       <div className="container grid grid-three-column">
//         <div className="row">
//           <div
//             className="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
//             data-aos="zoom-in"
//             data-aos-delay="100"
//           >
//             <div className="icon-box">
//               <div className="icon">
//                 <i className="bx bxl-dribbble"></i>
//               </div>
//               <h4>
//                 <a href="">Lorem Ipsum</a>
//               </h4>
//               <p>
//                 Voluptatum deleniti atque corrupti quos dolores et quas
//                 molestias excepturi
//               </p>
//             </div>
//           </div>
//           <div
//             className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
//             data-aos="zoom-in"
//             data-aos-delay="200"
//           >
//             <div className="icon-box">
//               <div className="icon">
//                 <i className="bx bx-file"></i>
//               </div>
//               <h4>
//                 <a href="">Sed ut perspici</a>
//               </h4>
//               <p>
//                 Duis aute irure dolor in reprehenderit in voluptate velit esse
//                 cillum dolore
//               </p>
//             </div>
//           </div>
//           <div
//             className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           >
//             <div className="icon-box">
//               <div className="icon">
//                 <i className="bx bx-tachometer"></i>
//               </div>
//               <h4>
//                 <a href="">Magni Dolores</a>
//               </h4>
//               <p>
//                 Excepteur sint occaecat cupidatat non proident, sunt in culpa
//                 qui officia
//               </p>
//             </div>
//           </div>
//           <div
//             className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
//             data-aos="zoom-in"
//             data-aos-delay="400"
//           >
//             <div className="icon-box">
//               <div className="icon">
//                 <i className="bx bx-layer"></i>
//               </div>
//               <h4>
//                 <a href="">Nemo Enim</a>
//               </h4>
//               <p>
//                 At vero eos et accusamus et iusto odio dignissimos ducimus qui
//                 blanditiis
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 0;
//   background-color: ${({ theme }) => theme.colors.bg};

//   .top-panel .container {
//     max-width: 120rem;
//   }

//   .card {
//     border: 0.1rem solid rgb(170 170 170 / 40%);
//     .card-data {
//       padding: 0 2rem;
//     }

//     h3 {
//       margin: 2rem 0;
//       font-weight: 300;
//       font-size: 2.4rem;
//     }
//     .btn {
//       margin: 2rem auto;
//       background-color: rgb(0 0 0 / 0%);
//       border: 0.1rem solid rgb(98 84 243);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: rgb(98 84 243);
//       font-size: 1.4rem;

//       &:hover {
//         background-color: rgb(98 84 243);
//         color: #fff;
//       }
//     }
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.tab}) {
//     .grid-three-column {
//       grid-template-columns: 1fr 1fr;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-two-column,
//     .grid-three-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

// export default Services;

//

import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const ServicesSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Features</h1>
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;
export default ServicesSection;
