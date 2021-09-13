import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Link } from "react-router-dom";
const TransactionAll = () => {
  return (
    <div className="transaction-all-page">
      <div className="page navbar">
        <div className="container">
          <div className="back-to">
            <ArrowBackIosIcon />
          </div>
          <div className="other-page-title">transactions</div>
          <div className="other-needed-things">
            <div className="notify">
              <span>4</span>
              <NotificationsNoneIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="trans-list page-list container">
        <label>today</label>
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
      <div className="trans-list container">
        <label>yesterday</label>
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
      </div>
      <div className="trans-list container">
        <label>sept 20, 2020</label>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img src="/images/avatar1.jpg" alt="#" />
              <div className="trans-text">
                <p>envato</p>
                <p>shopping</p>
              </div>
            </div>
            <p className="text-red">- $24</p>
          </div>
        </Link>
      </div>
      <div className="trans-list container mb-s2">
        <label>sept 14, 2020</label>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img src="/images/avatar1.jpg" alt="#" />
              <div className="trans-text">
                <p>amazon</p>
                <p>shopping</p>
              </div>
            </div>
            <p className="text-red">- $1,500</p>
          </div>
        </Link>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img src="/images/avatar1.jpg" alt="#" />
              <div className="trans-text">
                <p>apple</p>
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
                <p>lara mardigal</p>
                <p>transfer</p>
              </div>
            </div>
            <p className="text-red">- $550</p>
          </div>
        </Link>
        <Link to="/detail">
          <div className="for-flexing">
            <div className="name">
              <img src="/images/avatar1.jpg" alt="#" />
              <div className="trans-text">
                <p>dina glen</p>
                <p>shopping</p>
              </div>
            </div>
            <p className="text-red">- $620</p>
          </div>
        </Link>
        <button>load more</button>
      </div>
    </div>
  );
};

export default TransactionAll;
