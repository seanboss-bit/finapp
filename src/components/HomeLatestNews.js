import React from "react";
import { Link } from "react-router-dom";

const HomeLatestNews = () => {
  return (
    <div className="container">
      <div className="trans-title">
        <p>Transactions</p>
        <Link to="/latest-news/all">View all</Link>
      </div>
      <div className="latest">
        <div className="latest-box">
          <img src="/images/avatar1.jpg" alt="#" />
          <div className="latest-bottom">
            <div className="container">
              <p>what will be the value of bitcoin in the next ...</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img src="/images/avatar1.jpg" alt="#" />
          <div className="latest-bottom">
            <div className="container">
              <p>rules you need to know in business</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img src="/images/avatar1.jpg" alt="#" />
          <div className="latest-bottom">
            <div className="container">
              <p>10 easy ways to save your money</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img src="/images/avatar1.jpg" alt="#" />
          <div className="latest-bottom">
            <div className="container">
              <p>follow the finacial agenda with...</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img src="/images/avatar1.jpg" alt="#" />
          <div className="latest-bottom">
            <div className="container">
              <p>follow the finacial agenda with...</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img src="/images/avatar1.jpg" alt="#" />
          <div className="latest-bottom">
            <div className="container">
              <p>follow the finacial agenda with...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLatestNews;
