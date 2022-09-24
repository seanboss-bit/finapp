import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const Detail = () => {
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
        <div className="details">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">trasaction detils</div>
              <div className="other-needed-things">
                <DeleteOutlineOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="detail-body page-list">
            <div className="container">
              <div className="detail-send">
                <span>
                  <ArrowForwardIcon />
                </span>
                <p>payment sent</p>
              </div>
              <div className="detail-content">
                <div className="detail-lines">
                  <p>status</p>
                  <p className="text-green">sucess</p>
                </div>
                <div className="detail-lines">
                  <p>to</p>
                  <p>jordi santiago</p>
                </div>
                <div className="detail-lines">
                  <p>bank name</p>
                  <p>envato bank</p>
                </div>
                <div className="detail-lines">
                  <p>transaction category</p>
                  <p>shopping</p>
                </div>
                <div className="detail-lines">
                  <p>reciept</p>
                  <p>yes</p>
                </div>
                <div className="detail-lines">
                  <p>date</p>
                  <p>sept 25, 2020 10:45AM</p>
                </div>
                <div className="detail-lines">
                  <p>amount</p>
                  <p className="amount">$24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
