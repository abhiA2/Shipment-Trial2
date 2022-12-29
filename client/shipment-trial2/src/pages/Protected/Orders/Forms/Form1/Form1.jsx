import React, { useState } from "react";
import "../../orders.css";

const Form1 = () => {
  const [firstName, setFirstName] = useState("");

  const nextHandler = () => {
    if (!validateform()) {
      return false;
    }
    formnumber++;
    updateform();
    progress_forward();
    contentchange();
  };

  return (
    <div>
      <div className="main active">
        <small>
          <i className="fa fa-smile-o"></i>
        </small>
        <div className="text">
          <h2>Buyer Shipping Details</h2>
        </div>
        <div className="input-text">
          <div className="input-div">
            <input
              type="text"
              required
              require
              id="user_name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <span htmlFor="user_name">First Name</span>
          </div>
          <div className="input-div">
            <input type="text" required />
            <span>Last Name</span>
          </div>
        </div>
        <div className="input-text">
          <div className="input-div">
            <input type="text" required require />
            <span>Phone number</span>
          </div>
          <div className="input-div">
            <input type="text" required require />
            <span>E-mail Address</span>
          </div>
        </div>
        <div className="input-text">
          <div className="input-div">
            <select>
              <option>Select Country</option>
              <option>India</option>
              <option>France</option>
              <option>UK</option>
              <option>USA</option>
              <option>Germany</option>
              <option>Russia</option>
              <option>China</option>
              <option>Japan</option>
              <option>Pakistan</option>
            </select>
          </div>
          <div className="input-div">
            <select>
              <option>Select City</option>
              <option>New Delhi</option>
              <option>Paris</option>
              <option>London</option>
              <option>Washington D.C.</option>
              <option>Berlin</option>
              <option>Moscow</option>
              <option>Bejing</option>
              <option>Tokyo</option>
              <option>Islamabad</option>
            </select>
          </div>
        </div>
        <div className="buttons">
          <button className="next_button" onClick={nextHandler}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form1;
