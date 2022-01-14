import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import Cardback from "../images/Cardback.jpg";
const TempCard = (props) => {
  const [stock, setStock] = useState(1);
  const handleDecrement = () => {
    setStock(stock - 1);
  };
  const handleIncrement = () => {
    setStock(stock + 1);
  };
  return (
    <div>
      <div class="row">
        <div
          style={{ marginLeft: 350, marginTop: 100, marginBottom: 100 }}
          class="col-sm-6"
        >
          <div id="navcolor" class="card bg-gradient">
            <div
              class="card-body"
              style={{
                backgroundImage: `url(${Cardback})`,
                backgroundRepeat: "repeat",
                columnFill: "2",
              }}
            >
              <h5 id="cardhead" class="card-title text-center">
                {props.match.params.title}
              </h5>
              <h3 class="card-text text-center">{props.match.params.price}</h3>
              <button
                id="text"
                onClick={handleDecrement}
                className="btn btn-outline-light"
                style={{ marginLeft: "100px" }}
              >
                <i class="bi bi-dash-lg"></i>
              </button>
              <button
                style={{ marginLeft: "120px" }}
                className="btn btn-outline-none"
              >
                Quantity
              </button>
              <button
                id="text"
                style={{ marginLeft: "130px" }}
                onClick={handleIncrement}
                className="btn btn-outline-light"
              >
                <i class="bi bi-plus-lg"></i>
              </button>
              <div>
                <Link
                  to={`/Cart/${props.match.params.title}/${props.match.params.price}`}
                >
                  <button
                    style={{ marginLeft: 280, marginTop: 20 }}
                    class="btn btn-outline-light "
                  >
                    Add
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempCard;
