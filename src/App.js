import React from "react";
import { Route , Switch , Redirect  } from "react-router-dom";
import Nav from "./Components/Nav";
import Carousel from "./Components/Carousel";
import TempCard from "./Components/TempCard";
import Cakes from "./Components/Cakes";
import ShopDetails from "./Components/ShopDetails";
import InValidURL from "./Components/InValidURL";
import Savory from "./Components/Savory";
import Beverages from "./Components/Beverages";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";  
function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
      <Switch>
          <Route path="/Cakes" exact component={Cakes} />
          <Route path="/Cart/:title/:price" exact component={Cart} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Beverages" exact component={Beverages} />
          <Route path="/Savory" exact component={Savory} />
          <Route path="/TempCard/:title/:price" exact component={TempCard} />
          <Route path="/" exact component={Carousel} />
          <Route path="/InValidURL" exact component={InValidURL} />
          <Redirect to="/InValidURL"></Redirect>
        </Switch>
      </div>
      <ShopDetails />
      <Footer />
      <footer class="page-footer font-small">
        <div class="footer-copyright text-center py-3">
          © 2019 Copyrights Resevered :
          <a id="col" href="https://LDME.com/">
            LessDepressoMoreExpresso.com
          </a>
        </div>
      </footer>
    </div>
  );
}
export default App;
