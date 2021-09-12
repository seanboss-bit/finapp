import React from "react";
import { Link } from "react-router-dom";

const SendMoney = () => {
  return (
    <div className="container">
      <div className="trans-title">
        <p>Send Money</p>
        <Link to="/">Add New</Link>
      </div>
      <div className="card-body">
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>jurrien</p>
        </div>
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>elwin</p>
        </div>
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>alma</p>
        </div>
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>justine</p>
        </div>
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>maria</p>
        </div>
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>pamela</p>
        </div>
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>neville</p>
        </div>
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>alex</p>
        </div>
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>stina</p>
        </div>
        <div className="money-content">
          <img src="/images/avatar1.jpg" alt="#" />
          <p>jurrien</p>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
