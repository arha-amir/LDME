import React, { Component } from "react";
import { getCakes } from "./CakeDetails";

class Output extends React.Component {
  state = {
    details: getCakes(),
    cart: 0,
  };

  UpdateCart = () => {
    this.state.cart = this.setState.cart + 1;
  };
  render() {
    return (
      <div>
        <p className="container">Showing {this.state.details.length} ads.</p>
        {this.state.details.map((d) => (
          <div className="card mb-3 container" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4 border-end">
                <img src={d.pic} class="img-fluid rounded-start" alt="Cakes" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text">{d.price}</p>
                  <p className="card-text">{d.productionTime}</p>
                </div>
                <Link to="/Cart">
                <button onClick UpdateCartclassName="btn btn-primary ms-3 mb-2">
                  Add to cart
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Output;
