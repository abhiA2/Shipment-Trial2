import { useState } from "react";
import styled from "styled-components";
// import "./signUp.css";
import "./SignUp.css";
import authApi from "../../../api/auth";
import store from "../../../store/index";
const SignUp = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const [user, setUser] = useState({
    firstName: "Test",
    lastName: "Person",
    mobileNumber: "9282992922",
    email: "test2@gmail.com",
    password: "12341234",
    confirmPassword: "12341234",
    accountType: "personal",
  });
  // console.log("USER", user);

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
      // console.log(data.token);
      console.log(payload.authToken);
      //dispatch action to store
      store.dispatch({ type: "REGISTER", payload: payload });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Register>
      <div align="center">
        {/* <h2 className="text">Registration</h2> */}
        <form onSubmit={submitHandler}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your first name"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              value={user.firstName}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your last name"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              value={user.lastName}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Enter your mobile number"
              onChange={(e) =>
                setUser({ ...user, mobileNumber: e.target.value })
              }
              value={user.mobileNumber}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Create password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              value={user.confirmPassword}
              required
            />
          </div>

          <div className="input-box button">
            <input type="Submit" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <a href="/login">Login now</a>
            </h3>
          </div>
        </form>
      </div>
      {/* <div className="signUp-image">
          <img src="public/images/hero1.svg" />
        </div> */}
    </Register>
  );
};

const Register = styled.div`
  .wrapper {
    display: flex;
    align-items: center;
    justify-items: center;
    max-width: 430px;
    width: 50%;
    background: #fff;
    padding: 34px;
    border-radius: 3px;
  }
  .wrapper h2 {
    position: absolute;
    font-size: 22px;
    font-weight: 600;
    color: #333;
  }

  .wrapper form {
    margin: 30px;
  }
  .wrapper form .input-box {
    height: 50px;
    margin: 18px 0;
  }
  form .input-box input {
    height: 100%;
    width: 100%;
    outline: none;
    padding: 10 15;
    font-size: 17px;
    font-weight: 400;
    color: #333;
    border: 1.5px solid #c7bebe;
    border-bottom-width: 2.5px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }
  .input-box input:focus,
  .input-box input:valid {
    border-color: #4070f4;
  }
  form .policy {
    display: flex;
    align-items: center;
  }
  form h3 {
    color: #707070;
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
  }
  .input-box.button input {
    color: #fff;
    letter-spacing: 1px;
    border: none;
    background: #4070f4;
    cursor: pointer;
  }
  .input-box.button input:hover {
    background: #0e4bf1;
  }
  form .text h3 {
    color: #333;
    width: 100%;
    text-align: center;
  }
  form .text h3 a {
    color: #4070f4;
    text-decoration: none;
  }
  form .text h3 a:hover {
    text-decoration: underline;
  }
  signUp-image {
    max-width: 50%;
  }
`;

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
