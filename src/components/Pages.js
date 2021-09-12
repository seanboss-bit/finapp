import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PageList from "./PageList";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Brightness3Icon from "@material-ui/icons/Brightness3";
const Pages = () => {
  return (
    <div className="page-component">
      <div className="page navbar">
        <div className="container">
          <div className="back-to">
            <ArrowBackIosIcon />
          </div>
          <div className="other-page-title">Pages</div>
          <div className="other-needed-things"></div>
        </div>
      </div>
      <div className="page-list">
        <PageList title="App Pages">
          <ul className="page-items">
            <li>
              <div className="first-grid">
                <div className="trans-inn">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>transactions</p>
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
                  <p>transaction detail</p>
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
                  <p>transaction verification</p>
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
                  <p>card</p>
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
                  <p>savings</p>
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
                  <p>bills</p>
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
                  <p>notification details</p>
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
                  <p>setting</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
          </ul>
        </PageList>
        <PageList title="Cryptocurrency">
          <ul className="page-items">
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>home</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>coin detail</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>exchange</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>portfolio</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>transactions</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
          </ul>
        </PageList>
        <PageList title="Authentication">
          <ul className="page-items">
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-red">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>login</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-red">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>register</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-red">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>forgot password</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-red">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>sms verification</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-red">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>QR verification code</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
          </ul>
        </PageList>
        <PageList title="Blog">
          <ul className="page-items">
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-grey">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>blog category</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-grey">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>blog post</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
          </ul>
        </PageList>
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
        <PageList title="Components">
          <ul className="page-items">
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-dark">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>discover component</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
          </ul>
        </PageList>
        <PageList title="Others">
          <ul className="page-items mb-s2">
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>about page</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>contact</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>FAQ</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>404</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>splash icon</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
            <li>
              <div className="first-grid">
                <div className="trans-inn bg-teal">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="linear">
                  <p>splash image</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </li>
          </ul>
        </PageList>
      </div>
    </div>
  );
};

export default Pages;
