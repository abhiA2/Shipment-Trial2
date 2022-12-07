// import { useState } from "react";
// import styled from "styled-components";
// // import './signUp.css'
// import "./signUp.css";

// const SignUp = () => {
//   // const [email, setEmail] = useState();
//   // const [password, setPassword] = useState();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   let name, email, password, confirmPassword;

//   const submitHandler = async (e) => {
//     e.prevetDefault();
//     setUser({ name, email, password, confirmPassword });
//     console.log(name, email, password, confirmPassword);
//     // setUser({ ...user })

//     const postURL = "http://localhost:3001/signUp/";
//     fetch(postURL, {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Alloq-Origin": "*",
//       },
//       body: JSON.stringify({
//         user: {
//           name,
//           email,
//           password,
//           confirmPassword,

//           // clockedIn: false,
//         },
//       })
//         .then((res) => {
//           res.json();
//           alert("You have been added to the system!");
//         })
//         .then((data) => {
//           console.log(data, "user signUp");
//         }),
//     });
//   };

//   return (
//     <Register>
//       <div className="wrapper">
//         <div>
//           <h2>Registration</h2>
//           <form onSubmit={submitHandler}>
//             <div className="input-box">
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 onChange={(e) => setUser({ name: e.target.value })}
//                 value={name}
//                 required
//               />
//             </div>
//             <div className="input-box">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 onChange={(e) => setUser({ email: e.target.value })}
//                 value={user.email}
//                 required
//               />
//             </div>
//             <div className="input-box">
//               <input
//                 type="password"
//                 placeholder="Create password"
//                 onChange={(e) => setUser({ password: e.target.value })}
//                 value={user.password}
//                 required
//               />
//             </div>
//             <div className="input-box">
//               <input
//                 type="password"
//                 placeholder="Confirm password"
//                 onChange={(e) => setUser({ confirmPassword: e.target.value })}
//                 value={user.confirmPassword}
//                 required
//               />
//             </div>
//             <div className="policy">
//               <input type="checkbox" />
//               <h3>I accept all terms & condition</h3>
//             </div>
//             <div className="input-box button">
//               <input type="Submit" />
//             </div>
//             <div className="text">
//               <h3>
//                 Already have an account? <a href="/signIn">Login now</a>
//               </h3>
//             </div>
//           </form>
//         </div>
//         <div className="signUp-image">
//           <img src="public/images/hero1.svg" />
//         </div>
//       </div>
//     </Register>
//   );
// };

// const Register = styled.div`
//   .wrapper {
//     justify-items: center;
//     max-width: 430px;
//     width: 50%;
//     background: #fff;
//     padding: 34px;
//     border-radius: 3px;
//   }
//   .wrapper h2 {
//     position: absolute;
//     font-size: 22px;
//     font-weight: 600;
//     color: #333;
//   }

//   .wrapper form {
//     margin: 30px;
//   }
//   .wrapper form .input-box {
//     height: 50px;
//     margin: 18px 0;
//   }
//   form .input-box input {
//     height: 100%;
//     width: 100%;
//     outline: none;
//     padding: 10 15;
//     font-size: 17px;
//     font-weight: 400;
//     color: #333;
//     border: 1.5px solid #c7bebe;
//     border-bottom-width: 2.5px;
//     border-radius: 6px;
//     transition: all 0.3s ease;
//   }
//   .input-box input:focus,
//   .input-box input:valid {
//     border-color: #4070f4;
//   }
//   form .policy {
//     display: flex;
//     align-items: center;
//   }
//   form h3 {
//     color: #707070;
//     font-size: 14px;
//     font-weight: 500;
//     margin-left: 10px;
//   }
//   .input-box.button input {
//     color: #fff;
//     letter-spacing: 1px;
//     border: none;
//     background: #4070f4;
//     cursor: pointer;
//   }
//   .input-box.button input:hover {
//     background: #0e4bf1;
//   }
//   form .text h3 {
//     color: #333;
//     width: 100%;
//     text-align: center;
//   }
//   form .text h3 a {
//     color: #4070f4;
//     text-decoration: none;
//   }
//   form .text h3 a:hover {
//     text-decoration: underline;
//   }
//   signUp-image {
//     max-width: 50%;
//   }
// `;

// export default SignUp;

//type 3

import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function SignIn() {
  return (
    <MDBContainer fluid className="p-6">
      <MDBRow>
        <MDBCol
          md="5"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn className="w-100 mb-4" size="md">
                sign up
              </MDBBtn>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignIn;
