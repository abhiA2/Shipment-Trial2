import React, { useState } from "react";

import store from "../../../store/index";
import { useNavigate } from "react-router-dom";
import authApi from "../../../api/auth";

import "./SignIn.css";
const SignIn = () => {
  const Navigate = useNavigate();

  const [error, setError] = useState(null);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    console.log(user);
    event.preventDefault();
    // async function validateCredentials(email, password) {
    // store.dispatch({ type: "LOGIN" });
    // Navigate("/dashboard");
    //   try {
    //     const { data } = await authApi.login(user);
    //     // await authApi.login({
    //     //   email: email,
    //     //   password: password,
    //     // });
    //     // const jwt = response.data.jwt;
    //     // return jwt;
    //     if (data) {
    //       store.dispatch({ type: "LOGIN" });
    //       Navigate("/dashboard");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     if (error.response) {
    //       setError(error.message);
    //     }
    //   }
    try {
      const userData = await authApi.login(user);
      console.log(userData);
      const payload = {
        authToken: userData.data.token,
        user: {
          email: user.email,
          password: user.password,
        },
      };
      store.dispatch({ type: "LOGIN", payload: payload });
      Navigate("/userPage");
    } catch (error) {
      console.log(error);
    }
  };

  //ANIMATED LOGIN FORM "return1"
  //   return (
  //     <div className="wrwapper">
  //       <div className="login-box">
  //         <h2>Login</h2>
  //         <form>
  //           <div className="user-box">
  //             <input type="text" name="" required="" />
  //             <label>Username</label>
  //           </div>
  //           <div className="user-box">
  //             <input type="password" name="" required="" />
  //             <label>Password</label>
  //           </div>
  //           <a href="#">
  //             <span></span>
  //             <span></span>
  //             <span></span>
  //             <span></span>
  //             Submit
  //           </a>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };

  // export default SignIn;

  /* {error && <p>{error}</p>} */

  /* <SignInForm onSubmit={handleSubmit} /> */

  //Normal Login Form
  //   return (
  //     <div className="login-box">
  //       <form onSubmit={handleSubmit}>
  //         <MDBInput
  //           className="user-box"
  //           id="first2"
  //           placeholder="Email"
  //           onChange={(e) => setUser({ ...user, email: e.target.value })}
  //           value={user.email}
  //           required
  //         />
  //         <MDBInput
  //           className="user-box"
  //           id="last2"
  //           placeholder="Password"
  //           onChange={(e) => setUser({ ...user, password: e.target.value })}
  //           value={user.password}
  //           required
  //         />
  //         <button type="Submit" className="">
  //           Login
  //         </button>
  //       </form>
  //     </div>
  //   );
  // };

  // export default SignIn;

  // BOOTSTRAP LOGIN FORM 1
  //   return (
  //     <section className="vh-100">
  //       <div className="container-fluid">
  //         <div className="row">
  //           <div className="col-sm-6 text-black">
  //             <div className="px-5 ms-xl-4">
  //               <i
  //                 className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
  //                 style={{ color: "#709085" }}
  //               ></i>
  //               <span className="h1 fw-bold mb-0">Logo</span>
  //             </div>

  //             <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
  //               <form style={{ width: "23rem" }}>
  //                 <h3
  //                   className="fw-normal mb-3 pb-3"
  //                   style={{ letterSpacing: "1px" }}
  //                 >
  //                   Log in
  //                 </h3>

  //                 <div className="form-outline mb-4">
  //                   <input
  //                     type="email"
  //                     id="form2Example18"
  //                     className="form-control form-control-lg"
  //                   />
  //                   <label className="form-label" for="form2Example18">
  //                     Email address
  //                   </label>
  //                 </div>

  //                 <div className="form-outline mb-4">
  //                   <input
  //                     type="password"
  //                     id="form2Example28"
  //                     className="form-control form-control-lg"
  //                   />
  //                   <label className="form-label" for="form2Example28">
  //                     Password
  //                   </label>
  //                 </div>

  //                 <div className="pt-1 mb-4">
  //                   <button
  //                     className="btn btn-info btn-lg btn-block"
  //                     type="button"
  //                   >
  //                     Login
  //                   </button>
  //                 </div>

  //                 <p className="small mb-5 pb-lg-2">
  //                   <a className="text-muted" href="#!">
  //                     Forgot password?
  //                   </a>
  //                 </p>
  //                 <p>
  //                   Don't have an account?{" "}
  //                   <a href="#!" className="link-info">
  //                     Register here
  //                   </a>
  //                 </p>
  //               </form>
  //             </div>
  //           </div>
  //           <div className="col-sm-6 px-0 d-none d-sm-block">
  //             <img
  //               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
  //               alt="Login image"
  //               className="w-100 vh-100"
  //               style={{ objectFit: "cover", objectPosition: "left" }}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };
  // export default SignIn;

  //BOOTSTRAP LOGIN FORM2 return2

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <h2>Login</h2>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div
            className="col-md-8 col-lg-6 col-xl-4 offset-xl-1"
            align="center"
          >
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" for="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/register" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
//Type A
// import React, { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useNavigate } from "react-router-dom";

// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import store from
// // import  login } from "../../../actions/auth";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const Login = (props) => {
//   let navigate = useNavigate();

//   const form = useRef();
//   const checkBtn = useRef();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const { message } = useSelector((state) => state.message);

//   const dispatch = useDispatch();

//   const onChangeUsername = (e) => {
//     const username = e.target.value;
//     setUsername(username);
//   };

//   const onChangePassword = (e) => {
//     const password = e.target.value;
//     setPassword(password);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     setLoading(true);

//     form.current.validateAll();

//     if (checkBtn.current.context._errors.length === 0) {
//       // dispatch(login(username, password))
//       store.dispatch({ type: "LOGIN", payload: payload })
//         .then(() => {
//           navigate("/dashboard");
//           window.location.reload();
//         })
//         .catch(() => {
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   };

//   if (isLoggedIn) {
//     return <Navigate to="/dashboard" />;
//   }

//   return (
//     <div className="col-md-12" align="center">
//       <div className="card card-container">
//         <Form onSubmit={handleLogin} ref={form}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <Input
//               type="text"
//               className="form-control"
//               name="username"
//               value={username}
//               onChange={onChangeUsername}
//               validations={[required]}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <Input
//               type="password"
//               className="form-control"
//               name="password"
//               value={password}
//               onChange={onChangePassword}
//               validations={[required]}
//             />
//           </div>

//           <div className="form-group">
//             <button className="btn btn-primary btn-block" disabled={loading}>
//               {loading && (
//                 <span className="spinner-border spinner-border-sm"></span>
//               )}
//               <span>Login</span>
//             </button>
//           </div>

//           {message && (
//             <div className="form-group">
//               <div className="alert alert-danger" role="alert">
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

// export default Login;
