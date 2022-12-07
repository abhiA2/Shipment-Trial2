import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Login className="section">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submitHandler}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="/">password?</a>
            </p>
          </div>
        </form>
      </div>
    </Login>
  );
}

const Login = styled.section`
  .Auth-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url("./src/images/HeroSlider2.jpg");
    background-blend: blur;
  }

  .Auth-form {
    width: 620px;
    height: 400px;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 8px;
    background-color: white;
  }

  .Auth-form-content {
    padding-left: 12%;
    padding-right: 12%;
  }

  .Auth-form-title {
    text-align: center;
    margin-bottom: 1em;
    font-size: 44px;
    color: rgb(34, 34, 34);
    font-weight: 800;
  }

  label {
    font-size: 24px;
    font-weight: 600;
    color: rgb(34, 34, 34);
  }
`;
