import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";

const CardAll = () => {
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
        <div>
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">my cards</div>
              <div className="other-needed-things">
                <AddSharpIcon />
              </div>
            </div>
          </div>
          <div className="page-list container mb-s2">
            <div className="card-box">
              <div className="card-box-content">
                <div className="card-box-left">
                  <div className="balance">
                    <p>balance</p>
                    <p> <span className="naira">N</span> 1,043,450</p>
                  </div>
                  <div className="card-numb">
                    <p>card num</p>
                    <p>
                      {" "}
                      <MoreHorizIcon /> 3456
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="expire">
                      <p>expires</p>
                      <p>12/25</p>
                    </div>
                    <div className="cvv">
                      <p>cvv</p>
                      <p>123</p>
                    </div>
                  </div>
                </div>
                <div className="card-box-right">
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card-box-content">
                <div className="card-box-left">
                  <div className="balance">
                    <p>balance</p>
                    <p> <span className="naira">N</span> 1,043,450</p>
                  </div>
                  <div className="card-numb">
                    <p>card num</p>
                    <p>
                      {" "}
                      <MoreHorizIcon /> 3456
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="expire">
                      <p>expires</p>
                      <p>12/25</p>
                    </div>
                    <div className="cvv">
                      <p>cvv</p>
                      <p>123</p>
                    </div>
                  </div>
                </div>
                <div className="card-box-right">
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card-box-content">
                <div className="card-box-left">
                  <div className="balance">
                    <p>balance</p>
                    <p> <span className="naira">N</span> 1,043,450</p>
                  </div>
                  <div className="card-numb">
                    <p>card num</p>
                    <p>
                      {" "}
                      <MoreHorizIcon /> 3456
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="expire">
                      <p>expires</p>
                      <p>12/25</p>
                    </div>
                    <div className="cvv">
                      <p>cvv</p>
                      <p>123</p>
                    </div>
                  </div>
                </div>
                <div className="card-box-right">
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card-box-content">
                <div className="card-box-left">
                  <div className="balance">
                    <p>balance</p>
                    <p> <span className="naira">N</span> 1,043,450</p>
                  </div>
                  <div className="card-numb">
                    <p>card num</p>
                    <p>
                      {" "}
                      <MoreHorizIcon /> 3456
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="expire">
                      <p>expires</p>
                      <p>12/25</p>
                    </div>
                    <div className="cvv">
                      <p>cvv</p>
                      <p>123</p>
                    </div>
                  </div>
                </div>
                <div className="card-box-right">
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card-box-content">
                <div className="card-box-left">
                  <div className="balance">
                    <p>balance</p>
                    <p> <span className="naira">N</span> 1,043,450</p>
                  </div>
                  <div className="card-numb">
                    <p>card num</p>
                    <p>
                      {" "}
                      <MoreHorizIcon /> 3456
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="expire">
                      <p>expires</p>
                      <p>12/25</p>
                    </div>
                    <div className="cvv">
                      <p>cvv</p>
                      <p>123</p>
                    </div>
                  </div>
                </div>
                <div className="card-box-right">
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card-box-content">
                <div className="card-box-left">
                  <div className="balance">
                    <p>balance</p>
                    <p> <span className="naira">N</span> 1,043,450</p>
                  </div>
                  <div className="card-numb">
                    <p>card num</p>
                    <p>
                      {" "}
                      <MoreHorizIcon /> 3456
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="expire">
                      <p>expires</p>
                      <p>12/25</p>
                    </div>
                    <div className="cvv">
                      <p>cvv</p>
                      <p>123</p>
                    </div>
                  </div>
                </div>
                <div className="card-box-right">
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardAll;
