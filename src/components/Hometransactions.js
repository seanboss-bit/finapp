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
              <img
                src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                alt="#"
              />
              <div className="trans-text">
                <p>amazon</p>
                <p>shopping</p>
              </div>
            </div>
            <p className="text-red">- <span className="naira">N</span> 150</p>
          </div>
        </Link>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img
                src="https://e7.pngegg.com/pngimages/394/395/png-clipart-computer-icons-apple-logo-apple-computer-logo.png"
                alt="#"
              />
              <div className="trans-text">
                <p>apple</p>
                <p>apple store purchase</p>
              </div>
            </div>
            <p className="text-red">- <span className="naira">N</span> 29</p>
          </div>
        </Link>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img
                src="https://i.insider.com/5cb8b133b8342c1b45130629?width=700"
                alt="#"
              />
              <div className="trans-text">
                <p>alex ljuang</p>
                <p>transfer</p>
              </div>
            </div>
            <p className="text-green">+ <span className="naira">N</span> 1,000</p>
          </div>
        </Link>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img
                src="https://i.insider.com/56016278bd86ef1c008bc175?width=1136&format=jpeg"
                alt="#"
              />
              <div className="trans-text">
                <p>beatriz brito</p>
                <p>transfer</p>
              </div>
            </div>
            <p className="text-red">-  <span className="naira">N</span> 186</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hometransactions;
