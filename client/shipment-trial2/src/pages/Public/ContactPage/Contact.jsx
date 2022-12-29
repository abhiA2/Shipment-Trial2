import React from "react";
import img from "../../../../public/images/ContactPage/contact.jpg";
import Back from "../../../components/common/Back";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container">
          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact form div {
    display: flex;
  }
  .contact textarea {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .contact input {
    margin-bottom: 20px;
    margin-right: 10px;
  }
  .contact form {
    padding: 30px;
  }
  @media screen and (max-width: 768px) {
    .contact h4 {
      width: 100%;
      margin-bottom: 30px;
    }
    .contact form div {
      flex-direction: column;
    }
    .contact input {
      width: 100%;
    }
  }
`;

export default Contact;
