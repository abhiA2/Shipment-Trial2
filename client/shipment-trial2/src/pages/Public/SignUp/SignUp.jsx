import { useState } from "react";
import styled from "styled-components";
import "./SignUp2.css";
import authApi from "../../../api/auth";
import store from "../../../store/index";
import { MDBInputGroup } from "mdb-react-ui-kit";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBCardBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBTabsContent,
  MDBIcon,
  MDBCheckbox,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authApi.register(user);
      const payload = {
        authToken: data.token,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          mobileNumber: user.mobileNumber,
          accountType: user.accountType,
        },
      };
      console.log(payload.authToken);
      store.dispatch({ type: "REGISTER", payload: payload });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <MDBContainer fluid>
        <section className="background-radial-gradient overflow-hidden">
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                <h1
                  className="my-5 display-3 fw-bold ls-tight"
                  style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  Register <br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    for easy access
                  </span>
                </h1>
                <p
                  className="mb-4 opacity-70"
                  style={{ color: "hsl(218, 81%, 85%)" }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus, expedita iusto veniam atque, magni tempora
                  mollitia dolorum consequatur nulla, neque debitis eos
                  reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div
                  id="radius-shape-1"
                  className="position-absolute rounded-circle shadow-5-strong"
                ></div>
                <div
                  id="radius-shape-2"
                  className="position-absolute shadow-5-strong"
                ></div>

                <div className="card bg-glass">
                  <div className=" px-4 py-5 px-md-5 px-lg-5 ">
                    <form onSubmit={submitHandler}>
                      <MDBInput
                        className="mb-4"
                        id="first2"
                        placeholder="First name"
                        onChange={(e) =>
                          setUser({ ...user, firstName: e.target.value })
                        }
                        value={user.firstName}
                        required
                      />
                      <MDBInput
                        className="mb-4"
                        id="last2"
                        placeholder="Last name"
                        onChange={(e) =>
                          setUser({ ...user, lastName: e.target.value })
                        }
                        value={user.lastName}
                        required
                      />
                      <MDBInput
                        className="mb-4"
                        type="email"
                        id="email2"
                        placeholder="Email address"
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        value={user.email}
                        required
                      />
                      <MDBInput
                        className="mb-4"
                        type="number"
                        id="mobileNumber"
                        placeholder="Mobile Number"
                        onChange={(e) =>
                          setUser({ ...user, mobileNumber: e.target.value })
                        }
                        value={user.mobileNumber}
                        required
                      />
                      <MDBInput
                        className="mb-4"
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                        value={user.password}
                        required
                      />
                      <MDBInput
                        className="mb-4"
                        type="password"
                        id="Cpassword"
                        placeholder="Confirm Password"
                        onChange={(e) =>
                          setUser({ ...user, confirmPassword: e.target.value })
                        }
                        value={user.confirmPassword}
                        required
                      />
                      {/* 
                      //Checkbox
                      <MDBRow className="mb-4 justify-content-center">
                        <MDBCol
                          md="6"
                          className="d-flex justify-content-center"
                        >
                          <MDBCheckbox
                            className=" mb-3 mb-md-0"
                            defaultChecked
                            label=" Subscribe to our newsletter"
                          />
                        </MDBCol>
                      </MDBRow> */}
                      <div align="center">
                        <button className=" btn-block" type="Submit">
                          Register
                        </button>
                      </div>
                      <hr />
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>

                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="google" />
                        </MDBBtn>

                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="twitter" />
                        </MDBBtn>

                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="github" />
                        </MDBBtn>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MDBContainer>
    </div>
  );
};

export default SignUp;

// //type 3
// // import React from "react";

// // const SignUp = () => {
// //   return <div></div>;
// // };

// // export default SignUp;

// Type 4
// import React, { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";

// import { register } from "../../actions/auth";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

// const Register = () => {
//   const form = useRef();
//   const checkBtn = useRef();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [successful, setSuccessful] = useState(false);

//   const { message } = useSelector((state) => state.message);
//   const dispatch = useDispatch();

//   const onChangeUsername = (e) => {
//     const username = e.target.value;
//     setUsername(username);
//   };

//   const onChangeEmail = (e) => {
//     const email = e.target.value;
//     setEmail(email);
//   };

//   const onChangePassword = (e) => {
//     const password = e.target.value;
//     setPassword(password);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();

//     setSuccessful(false);

//     form.current.validateAll();

//     if (checkBtn.current.context._errors.length === 0) {
//       dispatch(register(username, email, password))
//         .then(() => {
//           setSuccessful(true);
//         })
//         .catch(() => {
//           setSuccessful(false);
//         });
//     }
//   };

//   return (
//     <div className="col-md-12" align="center">
//       <div className="card card-container">
//         {/* <img
//           src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//           alt="profile-img"
//           className="profile-img-card"
//         /> */}

//         <Form onSubmit={handleRegister} ref={form}>
//           {!successful && (
//             <div>
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <Input
//                   type="text"
//                   className="form-control"
//                   name="username"
//                   value={username}
//                   onChange={onChangeUsername}
//                   validations={[required, vusername]}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <Input
//                   type="text"
//                   className="form-control"
//                   name="email"
//                   value={email}
//                   onChange={onChangeEmail}
//                   validations={[required, validEmail]}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <Input
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   value={password}
//                   onChange={onChangePassword}
//                   validations={[required, vpassword]}
//                 />
//               </div>

//               <div className="form-group">
//                 <button className="btn btn-primary btn-block">Sign Up</button>
//               </div>
//             </div>
//           )}

//           {message && (
//             <div className="form-group">
//               <div
//                 className={
//                   successful ? "alert alert-success" : "alert alert-danger"
//                 }
//                 role="alert"
//               >
//                 {message}
//               </div>
//             </div>
//           )}
//           <CheckButton style={{ display: "none" }} ref={checkBtn} />
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Register;
