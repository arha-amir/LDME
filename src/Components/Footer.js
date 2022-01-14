import { Link } from "react-router-dom";
import Beverages from "./Beverages";
import Cakes from "./Cakes";
import Savory from "./Savory";
import Login from "./Signin";
const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start ">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class=" ms-25 ">
            <span>More about us</span>
          </div>
          <div>
            <a href="" class="me-4 ms-4 text-reset">
              <i class="bi bi-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-whatsapp"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row mt-3">
              <div class="text-center mb-5">
                <br></br>
                <br></br>
                <br></br>
                <h6 id="logo1">
                  <i class="fas fa-gem me-3 "></i>LessDepressoMoreExpresso
                </h6>
                <p>A place for every depressed one looking for good vibes.</p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 id="col" class="text-uppercase fw-bold mb-4">
                  Products.
                </h6>
                
                <Link
                  to="/Beverages" 
                  style={{ textDecoration: "none", color: "darkgray"}}
                >
                  <p>
                   
                    <i class="bi bi-cup-straw"></i> Beverages
                  </p>
                </Link>
                <Link
                  to="/Cakes"
                  style={{ textDecoration: "none", color: "darkgray" }}
                >
                  <p>
                    {" "}
                    <i class="bi bi-bag-dash"></i> Cakes
                  </p>
                </Link>
                <Link
                  to="/Savory"
                  style={{ textDecoration: "none", color: "darkgray" }}
                >
                  <p>
                    {" "}
                    <i class="bi bi-handbag"></i> Savory
                  </p>
                </Link>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 id="col" class="text-uppercase fw-bold ms-3 mb-4">
                  Contact here.
                </h6>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  <a
                    href="https://LDME.com/"
                    style={{ textDecoration: "none", color: "darkgray" }}
                  >
                    {" "}
                    LessDepressoMoreExpresso.com
                  </a>
                </p>
                <p>
                  <i class="fas fa-home me-3"></i> Lahore, 54000, Pakistan
                </p>
                <p>
                  <i class="bi bi-phone ms-3"></i> + 92 322 489 89
                </p>
                <p>
                  <i class="fas fa-home me-3"></i> Karachi, 54000, Pakistan
                </p>
                <p>
                  <i class="bi bi-phone ms-3"></i> + 01 312 489 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default Footer;
