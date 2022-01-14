import React from "react";

const ShopDetails = () => {
  return (
    <div>
      <div className="row mt-2">
        <div  className="col-6">
          <div class="card">
            <div id="navcolor" class="card-header">
              Find the Nearest Branch
            </div>
            <div class="card-body">
              <h5 id="logo" class="card-title">
                Karachi
              </h5>
              <p class="card-text">168 H block DHA Phase 5, Karachi.</p>
              
            </div>
          </div>
        </div>

        <div className="col-6">
          <div class="card">
            <div id="navcolor" class="card-header">
              Find the Nearest Branch
            </div>
            <div class="card-body">
              <h5 id="logo" class="card-title">
                Lahore
              </h5>
              <p class="card-text" >5A Main Market Gulberg, Lahore.</p>
              
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ShopDetails;
