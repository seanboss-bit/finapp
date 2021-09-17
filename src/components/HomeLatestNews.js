import React from "react";
import { Link } from "react-router-dom";

const HomeLatestNews = () => {
  return (
    <div className="container">
      <div className="trans-title">
        <p>latest news</p>
        <Link to="/latest-news/all">View all</Link>
      </div>
      <div className="latest">
        <div className="latest-box">
          <img
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F908633080%2F960x0.jpg%3Ffit%3Dscale"
            alt="#"
          />
          <div className="latest-bottom">
            <div className="container">
              <p>what will be the value of bitcoin in the next ...</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img
            src="https://addicted2success.com/wp-content/uploads/2012/03/10-Steps-To-Becoming-An-Amazing-Motivational-Speaker.png"
            alt="#"
          />
          <div className="latest-bottom">
            <div className="container">
              <p>rules you need to know in business</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/money-saving-tips-1622109964.jpg?crop=1.00xw:0.750xh;0,0.250xh&resize=1200:*"
            alt="#"
          />
          <div className="latest-bottom">
            <div className="container">
              <p>10 easy ways to save your money</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img
            src="https://media.istockphoto.com/photos/close-up-business-people-meeting-to-discuss-the-situation-on-the-picture-id1089222846?k=20&m=1089222846&s=612x612&w=0&h=pxRm90xIK-0ozE0GpjPThDBbx0KXgdW3BnCsZDRLFh4="
            alt="#"
          />
          <div className="latest-bottom">
            <div className="container">
              <p>follow the finacial agenda with...</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img
            src="https://media.istockphoto.com/photos/close-up-business-people-meeting-to-discuss-the-situation-on-the-picture-id1089222846?k=20&m=1089222846&s=612x612&w=0&h=pxRm90xIK-0ozE0GpjPThDBbx0KXgdW3BnCsZDRLFh4="
            alt="#"
          />
          <div className="latest-bottom">
            <div className="container">
              <p>follow the finacial agenda with...</p>
            </div>
          </div>
        </div>
        <div className="latest-box">
          <img
            src="https://media.istockphoto.com/photos/close-up-business-people-meeting-to-discuss-the-situation-on-the-picture-id1089222846?k=20&m=1089222846&s=612x612&w=0&h=pxRm90xIK-0ozE0GpjPThDBbx0KXgdW3BnCsZDRLFh4="
            alt="#"
          />
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
