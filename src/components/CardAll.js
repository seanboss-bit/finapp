import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";

const CardAll = () => {
  const [loading, setLoading] = useState(false);
  const [add, setAdd] = useState(false);
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
                <AddSharpIcon onClick={() => setAdd(true)} />
              </div>
            </div>
          </div>
          <div className="page-list container mb-s2">
            <div className="card-box">
              <div className="card-box-content">
                <div className="card-box-left">
                  <div className="balance">
                    <p>balance</p>
                    <p>
                      {" "}
                      <span className="naira">N</span> 1,043,450
                    </p>
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
                    <p>
                      {" "}
                      <span className="naira">N</span> 1,043,450
                    </p>
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
                    <p>
                      {" "}
                      <span className="naira">N</span> 1,043,450
                    </p>
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
                    <p>
                      {" "}
                      <span className="naira">N</span> 1,043,450
                    </p>
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
                    <p>
                      {" "}
                      <span className="naira">N</span> 1,043,450
                    </p>
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
                    <p>
                      {" "}
                      <span className="naira">N</span> 1,043,450
                    </p>
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
      {add ? (
        <div className="index-modal" onDoubleClick={() => setAdd(false)}>
          <div className="index-modal-body">
            <div className="index-body-title">
              <p>add card</p>
            </div>
            <div className="index-body-content">
              <div className="index-modal-inputs">
                <p>card number</p>
                <input type="text" placeholder="Enter Card Number" />
              </div>
              <div className="for-grid">
                <div className="for-grid">
                  <div className="index-modal-inputs">
                    <p>expity date</p>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="index-modal-inputs">
                    <p>year</p>
                    <select>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                      <option>2031</option>
                    </select>
                  </div>
                </div>
                <div className="index-modal-inputs ms-5">
                  <p>
                    cvv {/* eslint-disable-next-line */}
                    <a href="#" className="ps-2">
                      what is this?
                    </a>
                  </p>
                  <div className="boxing">
                    <input type="text" placeholder="Enter 3 Digit" />
                  </div>
                </div>
              </div>
              <button className="btn-purple">add</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardAll;
