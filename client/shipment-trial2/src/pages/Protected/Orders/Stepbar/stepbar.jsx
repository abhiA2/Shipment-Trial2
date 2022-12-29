import React from "react";
import "../orders.css";
const Stepbar = () => {
  return (
    <div>
      <ul className="progress-bar">
        <li className="active">Buyer Details</li>
        <li>Order Details</li>
        <li>Shipment Details</li>
        <li>Shipping Partner</li>
        <li>Place Order</li>
      </ul>
    </div>
  );
};

export default Stepbar;
