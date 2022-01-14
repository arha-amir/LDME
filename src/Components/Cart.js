import React, { Component } from "react";
const Cart = (props) => {
  return (
    <div>
      <div className="row me-5 ms-5 mb-5 mt-5">
        <h3
          id="logo1"
          style={{ color: "black", marginTop: 20, marginLeft: "44%" }}
        >
          {" "}
          Your Cart{" "}
        </h3>
        <table class="table mt-5 mb-5">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {props.match.params.title} </td>
              <td> {props.match.params.price} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
