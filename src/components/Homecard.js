import React from "react";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Homecard = () => {
  return (
    <div className="container">
      <div className="trans-title">
        <p>My Cards</p>
        <Link to="/cards/all">View all</Link>
      </div>
      <div className="card-body">
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
  );
};

export default Homecard;
