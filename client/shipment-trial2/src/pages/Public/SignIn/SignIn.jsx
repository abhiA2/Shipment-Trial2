// // import { useState } from "react";
// import { Formik } from "formik";
// import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import "./SignIn.css";
// // import axios from "axios";

// const schema = Yup.object().shape({
//   email: Yup.string().email().required("Required"),
//   password: Yup.string()
//     .required("No password provided.")
//     .min(8, "Password is too short - should be 8 chars minimum.")
//     .matches(/(?=.*[0-9])/, "Password must contain a number."),
// });

// const SignIn = () => {
//   //   const [msg, setMsg] = useState("");
//   const Navigate = useNavigate();

//   <Formik
//     validationSchema={schema}
//     initialValues={{ email: "", password: "" }}
//     onSubmit={async (values) => {
//       // Alert the input values of the form that we filled
//       alert(JSON.stringify(values));
//       alert.on(values);

//       try {
//         await axios.post(
//           "http://localhost:9191/auth/login",
//           {
//             email: email,
//             password: password,
//           },
//           {
//             method: "GET",
//             mode: "no-cors",
//             headers: {
//               "Access-Control-Allow-Origin": "*",
//               "Content-Type": "application/json",
//             },
//           },
//           {
//             withCredentials: true,
//             credentials: "same-origin",
//           }
//         );
//         Navigate("/dashboard");
//       } catch (error) {
//         if (error.response) {
//           setMsg(error.response.data.msg);
//         }
//       }
//     }}
//   >
//     {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
//       <div className="login">
//         <div className="form">
//           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
//           <form noValidate onSubmit={handleSubmit}>
//             <span>Login</span>
//             {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//               placeholder="Enter email id / username"
//               className="form-control inp_text"
//               id="email"
//             />
//             {/* If validation is not passed show errors */}
//             <p className="error">
//               {errors.email && touched.email && errors.email}
//             </p>
//             {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//               placeholder="Enter password"
//               className="form-control"
//             />
//             {/* If validation is not passed show errors */}
//             <p className="error">
//               {errors.password && touched.password && errors.password}
//             </p>
//             {/* Click on submit button to submit the form */}
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     )}
//   </Formik>;
// };

// export default SignIn;
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import "./SignIn.css";

// // Creating schema
// const schema = Yup.object().shape({
//   email: Yup.string()
//     .required("Email is a required field")
//     .email("Invalid email format"),
//   password: Yup.string()
//     .required("Password is a required field")
//     .min(8, "Password must be at least 8 characters"),
// });

// const SignIn = () => {
//   const Navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:9191/auth/login",
//         {
//           email: email,
//           password: password,
//         },
//         {
//           method: "GET",
//           mode: "no-cors",
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "application/json",
//           },
//         },
//         {
//           withCredentials: true,
//           credentials: "same-origin",
//         }
//       );
//       Navigate("/dashboard");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <Formik>
//       <div className="login">
//         //{" "}
//         <div className="form">
//           //{" "}
//           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
//           //{" "}
//           <form noValidate onSubmit={submitHandler}>
//             // <span>Login</span>
//             //{" "}
//             {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//             //{" "}
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//               placeholder="Enter email id / username"
//               className="form-control inp_text"
//               id="email"
//             />
//             {/* If validation is not passed show errors */}
//             <p className="error">
//               {errors.email && touched.email && errors.email}
//             </p>
//             {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//               placeholder="Enter password"
//               className="form-control"
//             />
//             {/* If validation is not passed show errors */}
//             <p className="error">
//               {errors.password && touched.password && errors.password}
//             </p>
//             {/* Click on submit button to submit the form */}
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </Formik>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
// import SignInForm from "./SignInForm";
// import authApi from "../../api/auth";
import store from "../../../store/index";
import { useNavigate } from "react-router-dom";
import authApi from "../../../api/auth";

// import { validateCredentials } from "./validateCredentials";
const SignIn = () => {
  // const [email, setEmail] = useState();
  // const [pass, setPass] = useState();
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
      Navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* {error && <p>{error}</p>} */}
      {/* <SignInForm onSubmit={handleSubmit} /> */}
      <div align="center">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
            </label>
          </div>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </label>
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
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
