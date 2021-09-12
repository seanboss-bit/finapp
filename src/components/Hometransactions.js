import React from "react";
import { Link } from "react-router-dom";

const Hometransactions = () => {
  return (
    <div className="container">
      <div className="trans-title">
        <p>Transactions</p>
        <Link to="/transactions/all">View all</Link>
      </div>
      <div className="trans-list">
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img src="/images/avatar1.jpg" alt="#" />
              <div className="trans-text">
                <p>amazon</p>
                <p>shopping</p>
              </div>
            </div>
            <p className="text-red">- $150</p>
          </div>
        </Link>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img src="/images/avatar1.jpg" alt="#" />
              <div className="trans-text">
                <p>apple</p>
                <p>apple store purchase</p>
              </div>
            </div>
            <p className="text-red">- $29</p>
          </div>
        </Link>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img src="/images/avatar1.jpg" alt="#" />
              <div className="trans-text">
                <p>alex ljuang</p>
                <p>transfer</p>
              </div>
            </div>
            <p className="text-green">+ $1,000</p>
          </div>
        </Link>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img src="/images/avatar1.jpg" alt="#" />
              <div className="trans-text">
                <p>beatriz brito</p>
                <p>transfer</p>
              </div>
            </div>
            <p className="text-green">- $186</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hometransactions;
