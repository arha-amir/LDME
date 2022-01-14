import React from "react";
import { Link } from "react-router-dom";
import Login from './Signin';

const Nav = () => {
  return (
    <div id="navcolor">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link to = "/"
            id="logo"
            class="navbar-brand me-6 ms-lg-4 ms-md-4 ms-xl-4 ms-xxl-4"
          >
            Less Depresso More Expresso
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            id="write"
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/Beverages" style={{ textDecoration: 'none'}}>
                  <a
                    class="nav-link active ms-8 ms-lg-6 ms-md-6 ms-xl-6 ms-xxl-6"
                    aria-current="page"
                  >
                    Beverages
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Cakes" style={{ textDecoration: 'none' }}>
                  <a
                    class="nav-link active ms-lg-2 ms-md-2 ms-xl-2 ms-xxl-2"
                    aria-current="page"
                  >
                    Cakes
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Savory" style={{ textDecoration: 'none'}}>
                  <a
                    class="nav-link active ms-lg-2 ms-md-2 ms-xl-2 ms-xxl-2"
                    aria-current="page"
                  >
                    Savory
                  </a>
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                style={{ width: "350px" }}
                class="form-control me-4 me-lg-1 me-md-4 me-xl-4 me-xxl-4"
                type="search"
                placeholder="Search  for the magic"
                aria-label="Search"/>
              <button
                style={{ height: "36px" }}
                class="btn btn-outline-light me-3 me-lg-3 me-md-3 me-xl-3 me-xxl-3"
                type="submit"
              >
                Search
              </button>
              
              <Link to="/Signup">
                <button
                  style={{ height: "36px" }}
                  class="btn btn-outline-light me-2 me-lg-2 me-md-2 me-xl-2 me-xxl-2"
                  type="submit"
                >
                <i class="bi bi-person-plus"></i>
                </button>
              </Link>
              <Link to="/Signin">
                <button
                  style={{ height: "36px" }}
                  class="btn btn-outline-light me-2 me-lg-2 me-md-2 me-xl-2 me-xxl-2"
                  type="submit"
                >
                  <i class="bi bi-person"></i>
                </button>
              </Link>


              <Link to="/Cart">
              
                <button
                  style={{ height: "36px" }}
                  class="btn btn-outline-light me-lg-5 me-md-5 me-xl-5 me-xxl-5"
                  type="submit"
                ><i class="bi bi-cart3"></i>
                  
                </button>
                </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
