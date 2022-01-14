import React, { Component } from 'react';
import { Link } from "react-router-dom";

const BeveragesCard=(props)=>{
    return(
    <div style={{paddingTop:"10px",paddingLeft:"10px",}} className="row">
      <div className="col-12">
          <div class="card">
          <div class="bg-image hover-zoom"> {/*bootstrap not working here*/}
            <img id="cardimage" src={props.pic} class="card-img-top" alt="Cake"/></div>
            <div class="card-body">
              <h5 id="logo" class="card-title">{props.title}</h5>
              <h5 class="card-text">{props.price} Rupees</h5>
              <p class="card-text">{props.text}</p>
              <p className="card-text"> {props.productionTime} {props.time}</p>
              <Link to={`/TempCard/${props.title}/${props.price}`}>
                <a id="navcolor" class="btn">Add To Cart</a>
              </Link>
            </div>
          </div>
      </div>
      
    </div>
  );
}
export default BeveragesCard;