import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import PageList from "./PageList";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

const Settings = () => {
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
        <div className="settings">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">settings</div>
              <div className="other-needed-things">
                <Link to="/notification" className="notify">
                  <span>4</span>
                  <NotificationsNoneIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="page-list container">
            <div className="settings-user">
              <div className="settings-inner">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                />
                <span>
                  <CameraAltOutlinedIcon />
                </span>
              </div>
            </div>
          </div>
          <PageList title="Theme">
            <ul className="page-items">
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <Brightness3Icon />
                  </div>
                  <div className="linear">
                    <p>darkmode</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </PageList>
          <PageList title="Notifications">
            <ul className="page-items">
              <li>
                <div className="first-grid and">
                  <div className="linear">
                    <p>
                      payment alert
                      <span>send notification when new payment recived</span>
                    </p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid and">
                  <div className="linear">
                    <p>notification sound</p>
                    <div className="beep">
                      <span>Beep</span>
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </PageList>
          <PageList title="Profile settings">
            <ul className="page-items ">
              <li>
                <div className="first-grid and">
                  <div className="linear">
                    <p>change username</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid and">
                  <div className="linear">
                    <p>update e-mail</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid and">
                  <div className="linear">
                    <p>address</p>
                    <div className="beep">
                      <span>Edit</span>
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid and">
                  <div className="linear">
                    <p>private profile</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </PageList>
          <PageList title="security">
            <ul className="page-items mb-s2">
              <li>
                <div className="first-grid and">
                  <div className="linear">
                    <p>update password</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid and">
                  <div className="linear">
                    <p>2 step verification</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid and">
                  <div className="linear">
                    <p>log out all services</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
            </ul>
          </PageList>
        </div>
      )}
    </div>
  );
};

export default Settings;
