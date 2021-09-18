import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { Link } from "react-router-dom";

const Homeshow = () => {
  const [withdraw, setWithdraw] = useState(false);
  const [send, setSend] = useState(false);
  const [exchange, setExchange] = useState(false);
  const [addBalance, setAddBalance] = useState(false);
  return (
    <div className="home-show">
      <div className="homeshow">
        <div className="container">
          <div className="homeshow-inner">
            <div className="container">
              <div className="top">
                <div className="top-left">
                  <p>total balance</p>
                  <p>
                    {" "}
                    <span className="naira">N</span> 2,456.90
                  </p>
                </div>
                <div className="top-right">
                  <AddIcon onClick={() => setAddBalance(true)} />
                </div>
              </div>
              <div className="bottom">
                <div
                  className="transctions-options"
                  onClick={() => setWithdraw(true)}
                >
                  <div className="back">
                    <ArrowDownwardIcon />
                  </div>
                  <p>withdraw</p>
                </div>
                <div
                  className="transctions-options"
                  onClick={() => setSend(true)}
                >
                  <div className="back">
                    <ArrowForwardIcon />
                  </div>
                  <p>send</p>
                </div>
                <Link to="/cards/all" className="transctions-options">
                  <div className="back">
                    <CreditCardIcon />
                  </div>
                  <p>cards</p>
                </Link>
                <div
                  className="transctions-options"
                  onClick={() => setExchange(true)}
                >
                  <div className="back">
                    <ImportExportIcon />
                  </div>
                  <p>exchange</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========
      P0PUPS
      ==========*/}
      {withdraw ? (
        <div className="index-modal" onDoubleClick={() => setWithdraw(false)}>
          <div className="index-modal-body" onClick={() => setWithdraw(true)}>
            <div className="index-body-title">
              <p>withdraw money</p>
            </div>
            <div className="index-body-content">
              <div className="index-modal-inputs">
                <p> from</p>
                <select>
                  <option>savings (*** 5091)</option>
                  <option>investments (*** 6212)</option>
                  <option>mortage (*** 5021)</option>
                </select>
              </div>
              <div className="index-modal-inputs">
                <p> to</p>
                <input type="text" placeholder="Enter IBAN" />
              </div>
              <div className="index-modal-inputs">
                <p>enter amount</p>
                <div className="boxing">
                  $
                  <input type="text" placeholder="100" />
                </div>
              </div>
              <button className="btn-purple">withdraw</button>
            </div>
          </div>
        </div>
      ) : null}
      {send ? (
        <div className="index-modal" onDoubleClick={() => setSend(false)}>
          <div className="index-modal-body" onClick={() => setSend(true)}>
            <div className="index-body-title">
              <p>send money</p>
            </div>
            <div className="index-body-content">
              <div className="index-modal-inputs">
                <p> from</p>
                <select>
                  <option>savings (*** 5091)</option>
                  <option>investments (*** 6212)</option>
                  <option>mortage (*** 5021)</option>
                </select>
              </div>
              <div className="index-modal-inputs">
                <p> to</p>
                <input type="text" placeholder="Enter Bank ID" />
              </div>
              <div className="index-modal-inputs">
                <p>enter amount</p>
                <div className="boxing">
                  $
                  <input type="text" placeholder="100" />
                </div>
              </div>
              <button className="btn-purple">send</button>
            </div>
          </div>
        </div>
      ) : null}
      {addBalance ? (
        <div className="index-modal" onDoubleClick={() => setAddBalance(false)}>
          <div className="index-modal-body">
            <div className="index-body-title">
              <p>add balance</p>
            </div>
            <div className="index-body-content">
              <div className="index-modal-inputs">
                <p> from</p>
                <select>
                  <option>savings (*** 5091)</option>
                  <option>investments (*** 6212)</option>
                  <option>mortage (*** 5021)</option>
                </select>
              </div>
              <div className="index-modal-inputs">
                <p>enter amount</p>
                <div className="boxing">
                  $
                  <input type="text" placeholder="100" />
                </div>
              </div>
              <button className="btn-purple">deposit</button>
            </div>
          </div>
        </div>
      ) : null}
      {exchange ? (
        <div
          className="index-modal exchange"
          onDoubleClick={() => setExchange(false)}
        >
          <div className="index-modal-body" onClick={() => setExchange(true)}>
            <div className="index-body-title">
              <p>exchange money</p>
            </div>
            <div className="index-body-content">
              <div className="for-grid">
                <div className="index-modal-inputs">
                  <p> from</p>
                  <select>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>AUD</option>
                    <option>CAD</option>
                  </select>
                </div>
                <div className="index-modal-inputs">
                  <p> to</p>
                  <select>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>AUD</option>
                    <option>CAD</option>
                  </select>
                </div>
              </div>
              <div className="index-modal-inputs">
                <p>enter amount</p>
                <div className="boxing">
                  $
                  <input type="text" placeholder="100" />
                </div>
              </div>
              <button className="btn-purple">exchange</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Homeshow;
