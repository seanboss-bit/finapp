import React from "react";
import { Link } from "react-router-dom";

const HomeSaving = () => {
  return (
    <div className="container">
      <div className="trans-title">
        <p>Savings</p>
        <Link to="/saving/all">View all</Link>
      </div>
      <div className="saving-body">
        <div className="saving-container">
          <div className="saving-top">
            <div className="saving-text">
              <p>gaming console</p>
              <p>gaming</p>
            </div>
            <p>$499</p>
          </div>
          <div className="saving-progress">
            <div className="savebar">85%</div>
          </div>
        </div>
        <div className="saving-container">
          <div className="saving-top">
            <div className="saving-text">
              <p>new house</p>
              <p>living</p>
            </div>
            <p>$ 100,000</p>
          </div>
          <div className="saving-progress">
            <div className="savebar">55%</div>
          </div>
        </div>
        <div className="saving-container">
          <div className="saving-top">
            <div className="saving-text">
              <p>sport car</p>
              <p>livestyle</p>
            </div>
            <p>$ 42,500</p>
          </div>
          <div className="saving-progress">
            <div className="savebar">15%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSaving;
