import React, { useState } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Link, useNavigate } from "react-router-dom";

const Homenav = ({ setAdmin }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const logOut = () => {
    setAdmin(false);
    navigate("/");
  };
  return (
    <div className="home-nav">
      <div className="navbar">
        <div className="container">
          <i className="fas fa-bars" onClick={() => setShow(true)}></i>
          <div className="text-logo">
            <p>SafePAY</p>
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
                alt="#"
              />
            </Link>
          </div>
        </div>
      </div>
      {show ? (
        <div
          className="modale-back"
          onClick={() => {
            setShow(false);
          }}
        >
          <div className="modale-body">
            <div className="modal-info">
              <div className="modal-pic">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  alt="#"
                />
              </div>
              <div className="modal-info-text">
                <p>John Doe</p>
                <p>40583945</p>
              </div>
              <CloseIcon onClick={() => setShow(false)} />
            </div>
            <div className="modal-menu">
              <div className="container">
                <p className="menu-title">menu</p>
                <ul className="menu-list">
                  <li>
                    {/* eslint-disable-next-line */}
                    <Link to={"/dashboard"}>
                      <div className="op">
                        <div className="ops">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                        <p>overview</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </Link>
                    <Link to={"/transactions/all"}>
                      <div className="op">
                        <div className="ops">
                          <TrendingUpIcon />
                        </div>
                        <p>transactions</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </Link>
                    <Link to="/merchants">
                      <div className="op">
                        <div className="ops">
                          <PersonIcon />
                        </div>
                        <p>merchants</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </Link>
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
                    <Link to={"/settings"}>
                      <div className="op">
                        <div className="ops">
                          <SettingsIcon />
                        </div>
                        <p>settings</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </Link>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <Link to={"/dashboard"}>
                      <div className="op">
                        <div className="ops">
                          <ChatBubbleIcon />
                        </div>
                        <p>support</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </Link>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <Link to={"/"} onClick={() => logOut()}>
                      <div className="op">
                        <div className="ops">
                          <ExitToAppIcon />
                        </div>
                        <p>log out</p>
                      </div>
                      <div className="rs">
                        <ArrowForwardIosIcon />
                      </div>
                    </Link>
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
