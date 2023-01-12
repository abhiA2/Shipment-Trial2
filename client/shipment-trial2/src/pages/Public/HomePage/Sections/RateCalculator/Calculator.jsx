import React, { useState } from "react";
import Heading from "../../../../../components/common/Heading";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Calculator = () => {
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Rate Calculator
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            <form>
              <div>
                <label htmlFor="shipping_weight">
                  Weight of package in milligrams
                </label>
                <input
                  id="shipping_weight"
                  type="number"
                  placeholder="Weight of package in pounds"
                  // value={this.state.weight_lbs}
                  // onChange={(event) => this.updateResults(event, "weight")}
                />
                {/*<button type="button" id="submit_button">Calculate</button>*/}
              </div>
              <div className=" mt-4">
                <div>
                  <label htmlFor="shipping_length">
                    Length of package in centimeters
                  </label>
                  <input
                    id="shipping_length"
                    type="number"
                    placeholder="Weight of package in pounds"
                    // value={this.state.weight_lbs}
                    // onChange={(event) => this.updateResults(event, "weight")}
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="shipping_height">
                    Height of package in centimeters
                  </label>
                  <input
                    id="shipping_height"
                    type="number"
                    placeholder="Height of package in pounds"
                    // value={this.state.weight_lbs}
                    // onChange={(event) => this.updateResults(event, "weight")}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="radio_buttons">Shipping speed</label>
                <ul id="radio_buttons">
                  <input
                    type="radio"
                    //   updateResults={this.updateResults}
                    //   shipping_speed={this.state.shipping_speed}
                    placeholder="5"
                  />
                  <input
                    type="radio"
                    //   updateResults={this.updateResults}
                    //   shipping_speed={this.state.shipping_speed}
                    days="3"
                  />
                  <input
                    type="radio"
                    //   updateResults={this.updateResults}
                    //   shipping_speed={this.state.shipping_speed}
                    days="2"
                  />
                </ul>
              </div>
              <button
                onClick={() => {
                  alert("You are almost there");
                }}
              >
                Calculate
              </button>
            </form>{" "}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div>
      <section>
        <Heading
          title="Want to know the rate "
          subtitle="Calculate the price for your shipment"
        />
        <div align="center">
          <button variant="primary" onClick={() => setModalShow(true)}>
            Use our Calculator{" "}
          </button>{" "}
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </section>
    </div>
  );
};

export default Calculator;
