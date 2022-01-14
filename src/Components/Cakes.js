import React from "react";
import LotusCake from "../images/LotusCake.jpg";
import StrawberryCake from "../images/StrawberryCake.jpg";
import { getCakes } from "./CakeDetails";
import { Link } from "react-router-dom";

class Cakes extends React.Component {
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
        <div style={{paddingTop:"10px",paddingLeft:"10px",}} className="row">
          {this.state.details.map((d) => (
            <div className="col-3">
              <div class="card">
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
                  <h5 class="card-text">{d.price} Rupees </h5>
                  <p class="card-text">{d.text}</p>
                  <p className="card-text">
                    {d.productionTime} {d.time} 
                  </p>
                    <Link to={`/TempCard/${d.title}/${d.price}`}>
                    <a id="navcolor" class="btn ">Add To Cart</a>
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

export default Cakes;
export function getcart() {
  return Cakes;
}
