import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockIcon from "@mui/icons-material/Lock";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";

const Notification = () => {
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
        <div className="notifications">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">notifications</div>
              <div className="other-needed-things">
                <NotificationsOffIcon />
              </div>
            </div>
          </div>
          <div className="page-list">
            <ul className="notify-list mb-s1">
              <li className="active">
                <Link to="/notification-detail" className="list-task container">
                  <div className="icn">
                    <ArrowDownwardIcon />
                  </div>
                  <div className="contidet">
                    <div className="writing">
                      <p>payment recived</p>
                      <p>
                        john sent you <span className="naira">N</span>50
                      </p>
                      <p>
                        5/3/2020 <span>10:30AM</span>
                      </p>
                    </div>
                    <div className="number-of-times">
                      <span></span>
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </Link>
              </li>
              <li className="active">
                <Link to="/notification-detail" className="list-task container">
                  <div className="icn">
                    <ArrowForwardIcon />
                  </div>
                  <div className="contidet">
                    <div className="writing">
                      <p>money has been sent</p>
                      <p>the money you sent to john was sucessfully sent</p>
                      <p>
                        5/3/2020 <span>10:30AM</span>
                      </p>
                    </div>
                    <div className="number-of-times">
                      <span>3</span>
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/notification-detail" className="list-task container">
                  <div className="icn">
                    <LockIcon />
                  </div>
                  <div className="contidet">
                    <div className="writing">
                      <p>password changed</p>
                      <p>your password has been changed</p>
                      <p>
                        5/3/2020 <span>10:30AM</span>
                      </p>
                    </div>
                    <div className="number-of-times">
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/notification-detail" className="list-task container">
                  <div className="icn">
                    <ChatBubbleIcon />
                  </div>
                  <div className="contidet">
                    <div className="writing">
                      <p>new messages</p>
                      <p>you have new messages fro john</p>
                      <p>
                        5/3/2020 <span>10:30AM</span>
                      </p>
                    </div>
                    <div className="number-of-times">
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/notification-detail" className="list-task container">
                  <div className="icn">
                    <ArrowDownwardIcon />
                  </div>
                  <div className="contidet">
                    <div className="writing">
                      <p>payment recived</p>
                      <p>
                        john sent you <span className="naira">N</span>50
                      </p>
                      <p>
                        5/3/2020 <span>10:30AM</span>
                      </p>
                    </div>
                    <div className="number-of-times">
                      <span></span>
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/notification-detail" className="list-task container">
                  <div className="icn bg-teal">
                    <ArrowForwardIcon />
                  </div>
                  <div className="contidet">
                    <div className="writing">
                      <p>money has been sent</p>
                      <p>the money you sent to john was sucessfully sent</p>
                      <p>
                        5/3/2020 <span>10:30AM</span>
                      </p>
                    </div>
                    <div className="number-of-times">
                      <span>3</span>
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/notification-detail" className="list-task container">
                  <div className="icn bg-red">
                    <LockIcon />
                  </div>
                  <div className="contidet">
                    <div className="writing">
                      <p>password changed</p>
                      <p>your password has been changed</p>
                      <p>
                        5/3/2020 <span>10:30AM</span>
                      </p>
                    </div>
                    <div className="number-of-times">
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/notification-detail" className="list-task container">
                  <div className="icn bg-yellow">
                    <ChatBubbleIcon />
                  </div>
                  <div className="contidet">
                    <div className="writing">
                      <p>new messages</p>
                      <p>you have new messages fro john</p>
                      <p>
                        5/3/2020 <span>10:30AM</span>
                      </p>
                    </div>
                    <div className="number-of-times">
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
