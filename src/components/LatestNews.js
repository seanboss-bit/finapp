import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const LatestNews = () => {
  return (
    <div className="latest-news-all">
      <div className="page navbar">
        <div className="container">
          <div className="back-to">
            <ArrowBackIosIcon />
          </div>
          <div className="other-page-title">news</div>
          <div className="other-needed-things"></div>
        </div>
      </div>
      <div>
        <div className="homeincexp container page-list pt-11 mb-s2">
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
                <p>does it make sense to invest in crypto</p>
              </div>
            </div>
          </div>
          <div className="latest-box">
            <img src="/images/avatar1.jpg" alt="#" />
            <div className="latest-bottom">
              <div className="container">
                <p>follow the financial agenda with</p>
              </div>
            </div>
          </div>
          <div className="latest-box">
            <img src="/images/avatar1.jpg" alt="#" />
            <div className="latest-bottom">
              <div className="container">
                <p>what you need to withdraw money</p>
              </div>
            </div>
          </div>
          <div className="latest-box">
            <img src="/images/avatar1.jpg" alt="#" />
            <div className="latest-bottom">
              <div className="container">
                <p>10 easy ways to save money</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
