import React, { useState } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AppsIcon from "@material-ui/icons/Apps";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const Homenav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="home-nav">
      <div className="navbar">
        <div className="container">
          <i className="fas fa-bars" onClick={() => setShow(true)}></i>
          <div className="text-logo">
            <p>SafePay</p>
          </div>
          <div className="main-user">
            <Link to="/notification" className="notify">
              <span>4</span>
              <NotificationsNoneIcon />
            </Link>
            <Link to="/settings" className="user">
              <span>6</span>
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      {show ? (
        <div
          className="modale-back"
          onDoubleClick={() => {
            setShow(false);
          }}
        >
          <div className="modale-body">
            <div className="modal-info">
              <div className="modal-pic">
                <img src="/images/avatar1.jpg" alt="#" />
              </div>
              <div className="modal-info-text">
                <p>John Doe</p>
                <p>40583945</p>
              </div>
              <CloseIcon />
            </div>
            <div className="modal-balance">
              <div className="container">
                <p>Balance</p>
                <p className="value">$ 2,475.50</p>
              </div>
              <div className="transfers">
                <div className="tranfer-content">
                  <div className="trans-inn">
                    <AddIcon />
                  </div>
                  <p className="transfer-p">deposit</p>
                </div>
                <div className="transfer-content">
                  <div className="trans-inn">
                    <ArrowDownwardIcon />
                  </div>
                  <p className="transfer-p">withdraw</p>
                </div>
                <div className="tranfer-content">
                  <div className="trans-inn">
                    <ArrowForwardIcon />
                  </div>
                  <p className="transfer-p">send</p>
                </div>
                <div className="transfer-content">
                  <div className="trans-inn">
                    <CreditCardIcon />
                  </div>
                  <p className="transfer-p">card</p>
                </div>
              </div>
            </div>
            <div className="modal-menu">
              <div className="container">
                <p className="menu-title">menu</p>
                <ul className="menu-list">
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <div className="ops">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                        <p>overview</p>
                      </div>
                      <div className="rs">
                        <span>10</span>
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <div className="ops">
                          <i className="far fa-file"></i>
                        </div>
                        <p>pages</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <div className="ops">
                          <AppsIcon />
                        </div>
                        <p>component</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <div className="ops">
                          <CreditCardIcon />
                        </div>
                        <p>my cards</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-others">
              <div className="container">
                <p className="menu-title">others</p>
                <ul className="menu-list">
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <div className="ops">
                          <SettingsIcon />
                        </div>
                        <p>settings</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <div className="ops">
                          <ChatBubbleIcon />
                        </div>
                        <p>support</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <div className="ops">
                          <ExitToAppIcon />
                        </div>
                        <p>log out</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-send-money">
              <div className="container">
                <p className="menu-title">send money</p>
                <ul className="menu-list">
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <img src="/images/avatar1.jpg" alt="#" />
                        <p>artem sazonov</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <img src="/images/avatar1.jpg" alt="#" />
                        <p>sophie asved</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="op">
                        <img src="/images/avatar1.jpg" alt="#" />
                        <p>Kobus van de Vegte</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Homenav;
