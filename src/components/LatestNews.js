import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src="/images/loading-icon.png" alt="#" />
        </div>
      ) : (
        <div className="latest-news-all">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">news</div>
              <div className="other-needed-things"></div>
            </div>
          </div>
          <div>
            <div className="homeincexp container page-list pt-11 mb-s2">
              <Link to="/latest-news/detail" className="latest-box">
                <img
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F908633080%2F960x0.jpg%3Ffit%3Dscale"
                  alt="#"
                />
                <div className="latest-bottom">
                  <div className="container">
                    <p>what will be the value of bitcoin in the next ...</p>
                  </div>
                </div>
              </Link>
              <Link to="/latest-news/detail" className="latest-box">
                <img
                  src="https://addicted2success.com/wp-content/uploads/2012/03/10-Steps-To-Becoming-An-Amazing-Motivational-Speaker.png"
                  alt="#"
                />
                <div className="latest-bottom">
                  <div className="container">
                    <p>rules you need to know in business</p>
                  </div>
                </div>
              </Link>
              <Link to="/latest-news/detail" className="latest-box">
                <img
                  src="https://m.economictimes.com/thumb/msid-83799965,width-1000,height-659,resizemode-4,imgsize-552110/cryptocurrency.jpg"
                  alt="#"
                />
                <div className="latest-bottom">
                  <div className="container">
                    <p>does it make sense to invest in crypto</p>
                  </div>
                </div>
              </Link>
              <Link to="/latest-news/detail" className="latest-box">
                <img
                  src="https://media.istockphoto.com/photos/close-up-business-people-meeting-to-discuss-the-situation-on-the-picture-id1089222846?k=20&m=1089222846&s=612x612&w=0&h=pxRm90xIK-0ozE0GpjPThDBbx0KXgdW3BnCsZDRLFh4="
                  alt="#"
                />
                <div className="latest-bottom">
                  <div className="container">
                    <p>follow the financial agenda with</p>
                  </div>
                </div>
              </Link>
              <Link to="/latest-news/detail" className="latest-box">
                <img
                  src="https://www.apers.org/images/Blog_Images/Withdraw_From_Fund_Blog_101819.jpg"
                  alt="#"
                />
                <div className="latest-bottom">
                  <div className="container">
                    <p>what you need to withdraw money</p>
                  </div>
                </div>
              </Link>
              <Link to="/latest-news/detail" className="latest-box">
                <img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/money-saving-tips-1622109964.jpg?crop=1.00xw:0.750xh;0,0.250xh&resize=1200:*"
                  alt="#"
                />
                <div className="latest-bottom">
                  <div className="container">
                    <p>10 easy ways to save money</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestNews;
