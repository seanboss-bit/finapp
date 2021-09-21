import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PageList from "./PageList";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { Link } from "react-router-dom";

const Component = ({ darkMode, setDarkMode }) => {
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
        <div className="mb-s2">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">components</div>
              <div className="other-needed-things"></div>
            </div>
          </div>
          <div className="component-body-full page-list container">
            <div className="component-text">
              <header>reusable components</header>
              <p>
                finapp comes with many components you may need for your project.
                you can use them over and over again
              </p>
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
                        checked={darkMode ? true : false}
                        onChange={(e) => {
                          setDarkMode(!darkMode);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </PageList>
          <PageList title="App Pages">
            <ul className="page-items ">
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>accordion</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>action sheet</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>add to home</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>alert</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>app bottom menu</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>app header</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>badges</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>buttons</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>cards</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>checkbox</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>chips</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>contnet boxes</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>dialogue</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>dropdown</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>full slider</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>grid</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>icons</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>images</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>inputs</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>listView</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>messages</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>modal & panel</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>notification</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>preloader</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>progress bar</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>radio</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>search</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>table</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>tabs</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>timeline</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>toasts</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>toggle</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>tool tips</p>
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </li>
              <li>
                <div className="first-grid">
                  <div className="trans-inn">
                    <i className="fas fa-cube"></i>
                  </div>
                  <div className="linear">
                    <p>typography</p>
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

export default Component;
