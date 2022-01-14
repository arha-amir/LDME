import React from "react";
import ProjectShop from "../images/ProjectShop.jpg";
import Shop2 from "../images/Shop2.jpg";
import Shop3 from "../images/Shop3.jpg";

const Carousel = () => {
  return (
    <div id="base">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={ProjectShop}
              style={{ height: 600 }}
              className="d-block w-100"
              alt="Front view of the shop"
            />
            <div id="text" class="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: 80 }} id="logo">
                The Ambience
              </h5>
              <p>The happiness you crave.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Shop2}
              style={{ height: 600 }}
              className="d-block w-100"
              alt="sitting inside the shop"
            />
            <div id="text" class="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: 80 }} id="logo">
                The Ambience
              </h5>
              <p>The happiness you crave.</p>
            </div>{" "}
          </div>
          <div className="carousel-item">
            <img
              src={Shop3}
              style={{ height: 600 }}
              className="d-block w-100"
              alt="outside"
            />
            <div id="text" class="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: 80 }} id="logo">
                The Ambience
              </h5>
              <p>The happiness you crave.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
