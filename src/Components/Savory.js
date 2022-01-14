import React from "react";
import { getSavory } from "./SavoryDetails";
import { Link } from "react-router-dom";

class Savory extends React.Component {
  state = {
    details: getSavory(),
    cart: 0,
  };

  UpdateCart = () => {
    this.state.cart = this.setState.cart + 1;
  };
  render() {
    return (
      <div>
        <div className="row" style={{paddingLeft: "6px"}}>
          {this.state.details.map((d) => (
            <div className="col-3">
              <div
                style={{ paddingTop: "10px", paddingLeft: "6px" }}
                lass="card"
              >
                <img
                  id="cardimage"
                  src={d.pic}
                  class="card-img-top"
                  alt="Cake"
                />
                <div class="card-body">
                  <h5 id="logo" class="card-title">
                    {d.title}
                  </h5>
                  <h5 class="card-text">{d.price} Rupees</h5>
                  <p class="card-text">{d.text}</p>
                  <p className="card-text">
                    {d.productionTime} {d.time}
                  </p>
                  <Link to={`/TempCard/${d.title}/${d.price}`}>
                    <a id="navcolor" class="btn">Add To Cart </a>
                    <h5>
                      <span class="badge bg-gradient bg-dark badge-secondary">
                        {"New item"}
                      </span>
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Savory;

export function getcart() {
  return Savory;
}
